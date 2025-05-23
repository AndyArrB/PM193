// Primero creo la función para verificar el usuario
function verificarUsuario(usuario) {

    // Creo la promesa y su respectiva función por si cumple
    // y por si no cumple
    return new Promise((resolve, reject) => {
        // Verifico si el usuario es correcto
        // el unico correcto es el admin
        if (usuario === "admin") {
            resolve("Usuario correcto");
        } else {
            // acá mencionó que pasa si no es admin
            reject("Usuario incorrecto");
        }
    });

}

//ejecuto la función para el admin
verificarUsuario("admin")
//si se cumple, entonces muestro el mensaje
    .then((mensaje) => {
        console.log(mensaje);
    })
//si no cumple, entonces muestro el error
    .catch((error) => {
        console.log(error);
    });

//ahora hago lo mismo pero para otro usuario
verificarUsuario("Andy")
    .then((mensaje) => {
        console.log(mensaje);
    })
    .catch((error) => {
        console.log(error);
    });