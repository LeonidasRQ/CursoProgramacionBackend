function sumar(numero1, numero2) {
  return numero1 + numero2;
}

const resultado = sumar(9, 8);

console.log(resultado);

// Ejemplo función flecha
const sumarDosNumeros = (numero1, numero2) => numero1 + numero2;

console.log(sumarDosNumeros(10, 8));

/**
 * Ejemplo Template String.
 * Los template strings nos permiten concatenar texto y variables de una manera más eficiente.
 * Podemos crear un template string utilizando las backticks (comillas simples al revés como estas: ``).
 * Dentro de las backticks podemos concatenar una variable llamandola dentro de esta estructura: ${}
 *
 * Por ejemplo:
 * ${nombreVariable}
 */
const nombre = "Leo";

// concatenación tradicional. Tiene a ser menos
console.log("Has iniciado sesión correctamente " + nombre);

// template string
console.log(`Has iniciado sesión correctamente ${nombre}`);
