from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel
from typing import List, Optional, Dict, Any
from validador import validar_compresor

app = FastAPI(title="DuoCert API - Motor de Reglas")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

MONGO_URL = "mongodb://localhost:27017"
client = AsyncIOMotorClient(MONGO_URL)
db = client.duocert_db

class Activo(BaseModel):
    nombre: str
    tipo: str
    numero_serie: str
    datos_tecnicos: Dict[str, Any] 
    apto: Optional[bool] = None
    errores_validacion: Optional[List[str]] = []


@app.get("/")
async def inicio():
    return {"mensaje": "API de DuoCert funcionando con Motor de Reglas"}

@app.post("/activos")
async def crear_activo(activo: Activo):
    es_apto = True
    errores = []

    if activo.tipo.lower() == "compresor":
        es_apto, errores = validar_compresor(activo.datos_tecnicos)
    documento = activo.dict()
    documento["apto"] = es_apto
    documento["errores_validacion"] = errores

    nuevo_registro = await db.activos.insert_one(documento)
    
    return {
        "id": str(nuevo_registro.inserted_id),
        "apto": es_apto,
        "errores": errores
    }

@app.get("/activos", response_model=List[Activo])
async def listar_activos():
    cursor = db.activos.find().sort("_id", -1)
    activos = await cursor.to_list(length=100)
    return activos