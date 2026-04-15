from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel
from typing import List, Optional, Dict, Any
from validador import MOTOR_DE_REGLAS

app = FastAPI(title="DuoCert API - Sistema de Gestión Industrial")

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
async def root():
    return {"status": "Online", "msg": "Bienvenido a la API de DuoCert"}

@app.post("/activos")
async def crear_activo(activo: Activo):
    tipo_maquina = activo.tipo.lower()
    validador_func = MOTOR_DE_REGLAS.get(tipo_maquina)
    
    if validador_func:
        es_apto, errores = validador_func(activo.datos_tecnicos)
    else:
        es_apto = False
        errores = ["Tipo de maquinaria no registrado en el motor de reglas."]

    nuevo_documento = activo.dict()
    nuevo_documento["apto"] = es_apto
    nuevo_documento["errores_validacion"] = errores

    resultado = await db.activos.insert_one(nuevo_documento)
    
    return {
        "id": str(resultado.inserted_id),
        "apto": es_apto,
        "errores": errores
    }

@app.get("/activos")
async def obtener_activos():
    lista_activos = []
    cursor = db.activos.find().sort("_id", -1)
    
    async for documento in cursor:
        documento["id"] = str(documento["_id"])
        del documento["_id"]
        lista_activos.append(documento)
        
    return lista_activos