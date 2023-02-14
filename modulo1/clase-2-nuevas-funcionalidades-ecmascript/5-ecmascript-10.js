/**
 * String trim()
 *
 * Este metodo nos permite eliminar los espacios que se encuentran en
 * ambos extremos (comienzo y fin) de una cadena de texto.
 */

let mensaje = `               hola      `;
console.log(mensaje.trim()); // "Hola"

/**Array flat()
 * Nos permite eliminar las anidaciones internas de un arreglo, conviertiendolo así en un arreglo plano
 */

let arrayAnidado = [1, 32, 4, 5, 6, [1, 4, 5, 1], [3411, 4, 3]];

console.log(arrayAnidado.flat()); // [ 1, 32, 4, 5, 6, 1, 4, 5, 1, 3411, 4, 3]
