/**
 * Ejemplos de codigo sincrono:
 * Cuando hablamos de codigo sincrono nos referimos a codigo que JS debe terminar de interpretar
 * y ejecutar antes de continuar con la siguente linea de codigo.
 *
 * También podemos decir que son operaciones BLOQUEANTES.
 *
 */

console.log("🐇: ¡Llegué en 1er lugar!");
console.log("🐢: ¡Llegué en 2do lugar!");

// Otro ejemplo aún más claro sobre codigo sincrono:

function funA() {
  console.log(1);
  funB();
  console.log(2);
}

function funB() {
  console.log(3);
  funC();
  console.log(4);
}

function funC() {
  console.log(5);
}

funA();

/**
 * Ejemplos de codigo asincrono:
 */

setTimeout(() => console.log("🐇: ¡Llegué en 1er lugar!"), 4000);
console.log("🐢: ¡Llegué en 2do lugar!");
