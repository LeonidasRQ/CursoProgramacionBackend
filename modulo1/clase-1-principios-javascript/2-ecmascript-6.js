/**
 * 1. Reasignación.
 *  - Usamos let cuando queremos cambiar el valor de nuestra variable durante la ejecución de nuestro programa
 *  - Usamos const cuando queremos que nuestra variable tenga el mismo valor.
 *      - Sí intentamos re-asignar una variable const, obtendremos un error.
 */

let numero = 2;
numero = 3;
console.log(numero);

// constant - constante
const nombre = "Leo";
nombre = "Andrés";
console.log(nombre);

/**
 * 2. Scopes
 * El scope (o ambito) de una variable se refiere al espacio en el cual una variable está disponbible para su uso.
 *
 * - let y const tiene un scope de bloque. Lo que significa que podremos usarlas
 */

const i = 0; // esta variable tiene un scope global
if (true) {
  const j = 2; // esta variable tiene un scope local.
  console.log(i, j); // 0, 2;
}
console.log(j); // Nos arroja un error: "j is undefined"

/**
 * 3. const y mutabilidad
 * No podemos reasignar una constante,
 * pero si podemos mutar las propiedades del objeto que contienen.
 * O mutar los elementos de un array.
 */

// Ejemplo 1: mutando los elementos de un array
const array = [1, 2, 3, 4];
array[0] = 22;
array[3] = 40;
console.log(array); // 22, 2, 3, 40

// Ejemplo 2: mutando las propiedades de un objeto
const persona = {
  id: 1, // Number
  nombre: "Leonidas", // String
  apellido: "Ramirez", // String
  peliculaFavorita: "Eyes Wide Shut", // String
};

persona.id = 88; // mutamos la propiedad "id" del objeto persona para que sea igual a 88
console.log(persona); // imprime el objeto persona, su propiedad "id" tiene un valor de 88
