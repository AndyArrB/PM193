from fastapi import FastAPI #importar la clase principal
from fastapi.middleware.cors import CORSMiddleware # esto permite que otras apps se conecten (React Native)
from routes import router # importamos las rutas del archivo routes.py

app = FastAPI() #creamos la app principal

# Creamos el filtro de seguridad
app.add_middleware (
    CORSMiddleware,
    allow_origins=["*"], #permitimos que el front se conecte
    allow_credentials=True, #permitimos que se envíen credenciales
    allow_methods=["*"], #permitimos todos los métodos
    allow_headers=["*"], #permitimos todos los encabezados
)

app.include_router(router)
# le decimos que use todas las rutas que se encuentran en el Router creado

