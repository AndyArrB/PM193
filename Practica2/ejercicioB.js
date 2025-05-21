// Primero tengo que declarar los productos que tengo con su
// respectivo precio
const productos = [
    { nombre: "Laptop", precio: 1200},
    { nombre: "Mouse", precio: 250},
    { nombre: "Monitor", precio: 3000},
    { nombre: "Teclado", precio: 750}
];

// Ahora voy a filtrar los productos, quiero que del array de productos me diga cuales
// tienen un precio mayor a 1000.

// creo el array productos caros y esto es igual a el array original filtrado, donde 
// cada producto quiero revisar si el precio es mayor a mil, si cumple, se guardará en el array
const ProductosCaros = productos.filter((producto) => producto.precio > 1000);
// muestro a los que cumplen la condicion
console.log(ProductosCaros);

// ahora, de esos productos caros, quiero mapear de uno en uno y que de cada producto
// solo se muestre el nombre y no el precio.
const nombres = ProductosCaros.map((producto) => producto.nombre);
console.log(nombres);