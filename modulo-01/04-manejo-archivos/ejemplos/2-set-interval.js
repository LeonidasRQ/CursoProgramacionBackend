// Ejemplo codigo sincrono

console.log("1. ¡Iniciando tarea!");
console.log("2. Realizando operación");
for (let contador = 0; contador <= 5; contador++) {
  console.log(`contador: ${contador}`);
}
console.log("3. Continuando operación");
console.log("4. ¡Tarea finalizada!");

/**
 * Orden de salida:
 * "1. ¡Iniciando tarea!"
 * "2. Realizando operación"
 * 1
 * 2
 * 3
 * 4
 * 5
 * "3. Continuando operación"
 * "4. ¡Tarea finalizada!"
 */

/**
 * Nuevamente vemos que todo está normal. La tarea finaliza hasta que el ciclo haya terminado
 * de contar del 1 a 5
 *
 * ¡Echemos un vistazo a los intervalos asincronos!
 */

// ****************************************************************************************************

// Ejemplo codigo asincrono
/**
 * Primero, veamos que es lo que hace la función setInterval() con este sencillo ejemplo:
 * El codigo que tenemos aquí simplemente va a imprimir en nuestra consola: "penny!" cada segundo.
 * (espero que hayas entendido la referencia 😉).
 */
setInterval(() => {
  console.log("penny!");
}, 1000);

/**
 * Como esta función no tiene una condición que nos ayude a terminar su ejecución, entonces
 * esta seguirá ejecutandose indefinidamente.
 *
 * Podrás cancelar la ejecución así:
 *
 * 1. Sí ejecutaste el codigo con CodeRunner (la extensión que hemos recomendado a lo largo del curso),
 * podrás cancelar la ejecución haciendo click en el botón "stop", este aparecerá en la esquina
 * superior derecha de tu editor de codigo una vez tu codigo comience a ejecutarse.
 *
 * 2. Sí ejecutaste el codigo con el comando "node", ve a la consola donde se está ejecutando tu codigo
 * y presiona "Ctrl" + "c".
 */

// ****************************************************************************************************

/**
 * Ahora si, vamos a nuestro contador asincrono
 */

let contador = () => {
  let contador = 1;
  console.log("2. Realizanco operación");
  let temporizador = setInterval(() => {
    console.log(`contador: ${contador++}`);
    if (contador > 5) {
      clearInterval(temporizador);
    }
  }, 1000);
};

console.log("1. ¡Iniciando tarea!");
contador();
console.log("3. Continuando operación");
console.log("4. ¡Tarea finalizada!");

/**
 * Orden de salida:
 * "1. ¡Iniciando tarea!"
 * "2. Realizando operación"
 * "3. Continuando operación"
 * "4. ¡Tarea finalizada!"
 * contador: 1
 * contador: 2
 * contador: 3
 * contador: 4
 * contador: 5
 */
