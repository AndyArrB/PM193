// Primero tengo mi arreglo personas
const personas = [
    { nombre: "Andy", edad: 20 },
    { nombre: "Ana", edad: 22 },
    { nombre: "María", edad: 28 },
    { nombre: "Luis", edad: 35 }
];

// primero con find() buscaremos a Luis
//creamos la variable luis (con minúscula) y aquí se guardará solo el nombre
// de la persona que se llame Luis y ya
const luis = personas.find((persona) => persona.nombre === "Luis");

//muestro el resultado de esto
console.log(luis);

// ahora con forEach() mostramos el nombre y edad de cada persona
//basicamente aquí decimos que "para cada" persona, quiero mostrar su nombre y edad
personas.forEach((persona) => {
    console.log(`Se llama ${persona.nombre}, y tiene ${persona.edad} años`);
});


// y por ultimo con map() sumamos todas las edades y mostramos el total
// para esto en el array totalEdad lo que voy a guardar es la suma de las edades
//con el reduce, justo voy a reducir todo, primero mapeo la edad de cada una de las personas
// después con el reduce, asigno el valor acumulativo y la edad actual y los voy sumando,
// y por último le asigno un valor inicial de 0 para que no me de undefined
const totalEdad = personas.map((persona) => persona.edad).reduce((acc, edad) => acc + edad, 0);

//muestro el resultado
console.log(`La suma de todas las edades es: ${totalEdad}`);