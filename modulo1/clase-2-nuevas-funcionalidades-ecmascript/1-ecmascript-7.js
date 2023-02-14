/**
 * 1. Exponential
 * Es un operador de JS que nos permite realizar operaciones de potencias.
 *
 * Por ejemplo:
 * Digamos que queremos saber cuanto es 2 a la potencia de 3 (2^3).
 *
 * JS tiene un objeto que nos permite hacer operaciones matematicas, y entre estas, la potencia
 * , utilizando este opbjeto, tendríamos algo como esto:
 * Math.pow(2, 3);
 *
 * Y usando el nuevo operador que llegó con EC7, sería algo así:
 * 2**3;
 *
 * ¡A PROBARLO!
 */

// Ejemplo Sencillo
let base = 2;
let exponente = 3;
console.log(base ** exponente); // 8

// Ejemplo un poco más complejo
let valoresBase = [1, 2, 3, 4, 5, 6];
let nuevosValores = valoresBase.map((numero, indice) => numero ** indice);
console.log(nuevosValores); // resultado: [ 1, 2, 9, 64, 625, 7776 ]

/**
 * 2. Includes
 * Nos permite saber si un elemento se encuentra dentro de un array.
 * Este metodo nos retorna un valor de tipo booleano: true o false
 */

// Ejemplo
let nombres = ["Juan", "Camilo", "Maria", "Ana", "Humberto"];

if (nombres.includes("Remberto")) {
  console.log("Camilo si aparece dentro del array");
} else {
  console.log("Nombre no encontrado en la base de datos");
}
