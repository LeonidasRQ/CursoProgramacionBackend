/**
 * 1. Métodos del objeto "Object"
 * Estos métodos nos permiten interactuar de diferentes maneras con las propiedades de un objeto.
 *  - Object.entries();
 *  - Object.keys();
 *  - Object.values();
 */

// Ejemplo Simple
let objetoPrueba = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
  key4: "value4",
};

let llaveValor = Object.entries(objetoPrueba);
console.log(llaveValor); // resultado: [ [ 'key1', 'value1' ], [ 'key2', 'value2' ], [ 'key3', 'value3' ], [ 'key4', 'value4' ] ]

let soloLlaves = Object.keys(objetoPrueba);
console.log(soloLlaves); // resultado: [ 'key1', 'key2', 'key3', 'key4' ]

let soloValores = Object.values(objetoPrueba);
console.log(soloValores); // resultado: [ 'value1', 'value2', 'value3', 'value4' ]

// Ejemplo con Aplicación Real

let animalesVeterinaria = {
  perros: 6,
  gatos: 9,
  aves: 3,
};

let valoresAnimalesVeterinaria = Object.values(animalesVeterinaria); // [6, 9, 3]
let cantidadAnimalesTotal = valoresAnimalesVeterinaria.reduce(
  (valorActual, valorAcumulable) => valorActual + valorAcumulable
);

console.log(valoresAnimalesVeterinaria);
console.log(cantidadAnimalesTotal);
