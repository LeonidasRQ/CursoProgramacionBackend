/**
 * Actividad en Clase:
 * Dado el objeto definido abajo en el codigo:
 *
 *  - Realizar una nueva lista (array) que contenga todos los tipos de productos (no cantidades),
 *      Consejo: puedes utilizar Object.keys() y Array.includes().
 *
 *  - Posteriormente, obtener el total de productos vendidos por todos los objetos.
 *      Consejo: Puedes utilizar Object.values().
 */

const objetos = [
  {
    manzanas: 3,
    peras: 2,
    carne: 1,
    jugos: 5,
    dulces: 2,
  },
  {
    manzanas: 1,
    sandias: 1,
    huevos: 6,
    jugos: 1,
    panes: 4,
  },
];

// 1. Obtener Array con lista de productos
let arregloProductos = [];

objetos.forEach((objeto) => {
  const keys = Object.keys(objeto);

  keys.forEach((key) => {
    if (!arregloProductos.includes(key)) arregloProductos.push(key);
  });
});

console.log(arregloProductos);

// 2. Obtener el total de productos que fueron vendidos
let arregloValores = [];

objetos.forEach((objeto) => {
  // extraemos los valores de cada objeto dentro del arreglo
  let values = Object.values(objeto);

  // insertamos cada arreglo en nuestro arregloValores: [ [3, 2, 1, 5, 2], [1, 1, 6, 1, 4] ]
  arregloValores.push(values);
});

// podemos concatenar nuestro arreglo de arreglos para poder tener un solo arreglo: [3, 2, 1, 5, 2, 1, 1, 6, 1, 4]
let arregloUnificado = arregloValores.reduce((a, b) => a.concat(b));

// ahora es mucho más facil sumar los elementos de nuestro arreglo usando el metodo reduce()
let totalVentas = arregloUnificado.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(totalVentas);
