// esta es la función que simula lo de una API
function simularPeticionAPI() {
    // con la promesa mencionó qué pasa si se cumple
    return new Promise(resolve => {
        //aquí espero 5 segundos antes de ejecutar el mensaje
        setTimeout(() => {
            resolve("Datos recibidos de manera correcta");
        }, 5000);
    });
}

// se crea la función asíncrona, osea que me devolverá una promesa
async function obtenerDatos() {
    // si todo está bien, hace el try, sino, el catch
    try {
        const resultado = await simularPeticionAPI();
        console.log(resultado);
    } catch (error) {
        console.error("Ocurrió algo malo:", error);
    }
}
//el async lo uso para decir q esperaré algo después de un rato
// y el await lo uso para esperar a que se cumpla la promesa

// llamo a la función para que se ejecute
obtenerDatos();