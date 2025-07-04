from fastapi import APIRouter #sistema de rutas
from data import nombres #del data.py importo los nombres (datos)

router = APIRouter() #creamos un objeto para poder definir las rutas

@router.get("/nombres") # definimos ruta (o endpoint) GET llamada nombres
def get_nombre(): # esta función se ejecuta cuando alguien use el /nombres
    return nombres #nos regresará la lista de los nombres

# Sirve como buena práctica para seccionar bien las rutas que tenemos
# y así no amontonar todo en el main