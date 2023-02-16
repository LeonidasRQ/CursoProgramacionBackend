/**
 * Podemos encontrar los callbacks dentro de muchas funciones de JS.
 *
 * Por ejemplo: .map()
 */

let nuevosValores = valoresOriginales.map((element) => element + 1); // resultado: [ 2, 3, 4, 5, 6 ]
let otrosValores = valoresOriginales.map((element) => element * 2); // resultado: [ 2, 4, 6, 8, 10 ]
let masValores = valoresOriginales.map((element) => "a"); // resultado: [ "a", "a", "a", "a", "a" ]

console.log(nuevosValores);
console.log(otrosValores);
console.log(masValores);

// Ejemplo de un callback
const funcionCallback = (valor) => {
  if (valor % 2 === 0) {
    return valor;
  } else {
    return "no es par";
  }
};

const sumarUno = (valor) => {
  return valor + 1;
};

const evaluacionPares = valoresOriginales.map(funcionCallback);
console.log(evaluacionPares);

/**
 * Ahora vamos a crear nuestra propia versión de la función map para comprender con más detalle
 * lo que es un callback
 */
let valoresOriginales = [1, 2, 3, 4, 5];

const miFuncionMap = (arreglo, callback) => {
  let nuevoArreglo = [];
  for (let i = 0; i < arreglo.length; i++) {
    let nuevoValor = callback(arreglo[i]);
    nuevoArreglo.push(nuevoValor);
  }
  return nuevoArreglo;
};

let nuevoArregloPropio = miFuncionMap(valoresOriginales, (x) => x * 2);
let nuevoArregloConMap = valoresOriginales.map((element) => element * 2);

console.log(nuevoArregloPropio);
console.log(nuevoArregloConMap);

/**
 * EXTRA: Si queeremos que JS reconozca nuestra función como un metodo diseñado exclusivamente
 * para utilizarse en arrays, podemos hacer esto:
 */

Array.prototype.miPropiaFuncionMap = function (callback) {
  let nuevoArreglo = [];
  for (let i = 0; i < this.length; i++) {
    let nuevoValor = callback(this[i]);
    nuevoArreglo.push(nuevoValor);
  }
  return nuevoArreglo;
};

// Ahora podemos utilizar miPropiaFuncionMap tal y como utilizamos el .map() que viene en JS

let arregloPrueba = [1, 2, 3, 4, 5];
let nuevosValores2 = arregloPrueba.miPropiaFuncionMap(
  (elemento) => elemento * 2
);

console.log(nuevosValores2);
