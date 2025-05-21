// Primero creo mi objeto Persona y le asigno los valores correspondientes
const persona = {
    nombre: "Andy",
    edad: 20,
    direccion: {
        ciudad: "Querétaro",
        pais: "México"
    }
};

//Realizo la desestructuración tomando los datos que necesito
// en este caso, solo nombre, edad y para la ciudad debo desestructurar direccion
// perteneciento a la persona (osea el objeto)
const {nombre, edad, direccion: {ciudad}} = persona;

// Muestro el mensaje con los datos que necesito y listooo
console.log("Me llamo ", nombre, "tengo ", edad, "años y vivo en ", ciudad);