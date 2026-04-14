from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel
from typing import List

app = FastAPI()

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
    estado: str = "Pendiente" 

@app.get("/")
async def root():
    return {"message": "DuoCert API conectada a MongoDB"}

@app.post("/activos")
async def crear_activo(activo: Activo):
    nuevo_activo = await db.activos.insert_one(activo.dict())
    return {"id": str(nuevo_activo.inserted_id), "status": "Activo guardado"}

@app.get("/activos", response_model=List[Activo])
async def obtener_activos():
    activos = await db.activos.find().to_list(100)
    return activos