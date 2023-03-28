/**
 * Este es uno de los hands-on-lab realizadeos durante la clase:
 *
 * Definiremos la función “mostrarLista”, la cual recibirá un arreglo con elementos como parámetro.
 *  - Si la lista está vacía, devolver un mensaje indicando “Lista vacía”.
 *  - Si la lista cuenta con elementos, mostrarlos 1 por 1 en consola. Finalizar el proceso devolviendo la longitud de la lista (Utilizar template strings)
 *  - Invocar la función con los casos de prueba.
 */

function mostrarLista(array) {
  if (array.length === 0) {
    return "Lista Vacia";
  }

  // Por cada elemento dentro del array, vas a imprimirlo en la consola
  array.forEach((elemento) => console.log(elemento));
  return array.length;
}

// arreglo vacio
let arrayVacio = [];

// arreglo poblado
let arregloPoblado = [1, 2, 3];

// 1era prueba: debe retornar: "Lista Vacía"
console.log(mostrarLista(arrayVacio));

// 2da prueba: debe imprimir en consola: 1, 2, 3 y debe retornar: 3
console.log(mostrarLista(arregloPoblado));
