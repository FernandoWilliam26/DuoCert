from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {
        "proyecto": "DuoCert API",
        "estado": "En desarrollo",
        "empresa": "DuoTech Industrial Service"
    }

@app.get("/test")
def test():
    return {"mensaje": "Si ves esto, el backend está vivo"}