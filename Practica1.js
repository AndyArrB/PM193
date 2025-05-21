// EJERCICIO 1
let nombre = "Armando"; //Declaro la variable nombre y asigno info
const edad = 25; //Declaro mi constante edad y asigno número

//Creo la función saludo con el parámetro del nombre
function saludo(nombre) { 
    //Pido que regrese un saludo con el nombre y mencion de la edad
    return `Hola ${nombre} tienes ${edad} años`;
}
// Pido mostrar todo en la consola
//console.log(saludo(nombre));


// EJERCICIO 2
//Creo mi variable cuadrado y asigno el parámetro o argumento numero
// luego le pigo que retorne la funcion de multiplicar numero por si mismo
const cuadrado = (numero) => {return numero*numero};

//Muestro la operacion con el número 5, 3 y 1
//console.log(cuadrado(5));
//console.log(cuadrado(3));
//console.log(cuadrado(1));


// EJERCICIO 3
// Declaro la función saludo y asigno argumentos de nombre y edad
// luego pido que regrese el saludo del nombre y edad que se ingresen
const saludoPersonalizado = (nombre, edad) => {return `Hola, me llamo ${nombre} y tengo ${edad} años`};

//Muestro la función con un nombre y edad asignados
console.log(saludoPersonalizado("Andy", 20));