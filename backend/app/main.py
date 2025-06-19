from fastapi import FastAPI #Importamos la clase principal
from fastapi.middleware.cors import CORSMiddleware #Esto nos permite que otras apps se conecten (React Native)
from routes import router #Importamos las rutas de routes.py

app = FastAPI() #Creamos la app principal

#Esta es la configuración para permitir peticiones desde otra app
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], #Permitimos que el front se conecte
    allow_credentials=True, #Permite el uso de encabezados con credenciales (autenticación con sesión)
    allow_methods=["*"], #Permitimos todos los métodos GET, POST, etc
    allow_headers=["*"], #Permitimos todos los encabezados
)

app.include_router(router)
#Le indicamos que use las rutas que se encuentran definidas en Router
# ¿Pq Router y no routes? explicarlo a la clase