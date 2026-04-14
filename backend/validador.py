def validar_compresor(datos: dict):
    """
    Reglas de ejemplo para un compresor:
    1. La presión no puede superar los 12 bares.
    2. El estado estructural debe ser 'Bueno'.
    """
    errores = []
    presion = datos.get("presion", 0)
    estado_estrucutral = datos.get("estado_estructural", "")

    if presion > 12:
        errores.append("La presión excede el límite legal de 12 bares.")
    
    if estado_estrucutral != "Bueno":
        errores.append("El estado estructural debe ser 'Bueno' para certificar.")

    es_apto = len(errores) == 0
    return es_apto, errores