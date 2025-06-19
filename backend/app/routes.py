from fastapi import APIRouter # APIRouter es un sistema de rutas
from data import nombres # Del data.py importamos los datos, osea "nombres"

router = APIRouter() #Creamos un objeto que nos permite definir rutas

@router.get("/nombres") #Definimos ruta GET llamada nombres
def get_nombres():   #Se ejecutará lo siguiente cuando alguien use /nombres
    return nombres   #Devuelve la lista completa de nombres

# Routes.py nos ayuda a no tener todo solo en main.py
# Sino que lo seccionamos y aquí solo tenemos las rutas 
# Ya después solo lo importamos en main