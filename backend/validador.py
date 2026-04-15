def validar_compresor(datos: dict):
    errores = []
    presion = datos.get("presion", 0)
    if presion > 12:
        errores.append(f"Presión excesiva ({presion} bar). Máximo 12.")
    return len(errores) == 0, errores

def validar_elevador(datos: dict):
    errores = []
    carga = datos.get("carga_maxima", 0)
    frenos = datos.get("estado_frenos", "")
    
    if carga < 500:
        errores.append("La carga máxima no cumple el mínimo industrial de 500kg.")
    if frenos.lower() != "verificado":
        errores.append("Los frenos de seguridad no han sido verificados.")
    return len(errores) == 0, errores

def validar_cabina(datos: dict):
    errores = []
    ventilacion = datos.get("caudal_ventilacion", 0)
    if ventilacion < 2000:
        errores.append("Caudal de ventilación insuficiente para cabina de pintura.")
    return len(errores) == 0, errores

MOTOR_DE_REGLAS = {
    "compresor": validar_compresor,
    "elevador": validar_elevador,
    "cabina": validar_cabina
}