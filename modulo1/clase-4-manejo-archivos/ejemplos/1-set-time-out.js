// Ejemplo de codigo sincrono
console.log("1. ¡Iniciando tarea!");
console.log("2. Realizando operación");
console.log("3. Continuando operación");
console.log("4. ¡Tarea finalizada!");

/**
 * Orden de salida:
 *
 * "¡Iniciando tarea!"
 * "Realizando operación"
 * "Continuando operación"
 * "¡Tarea finalizada!"
 *
 * ¡Todo en orden! tal como lo esperamos. Veamos ahora que pasa con las operaciones asincronas
 */

// ****************************************************************************************************

/**
 * Ejemplo codigo asincrono:
 *
 * La función setTimeOut esperará 5000 milisegundos (o 5 segundos) para
 * ejecutar el codigo que se encuentra contenido en ella
 */

console.log("1. ¡Iniciando tarea!");

setTimeout(() => {
  console.log("2. Realizando operación");
}, 5000);

console.log("3. Continuando operación");
console.log("4. ¡Tarea finalizada!");

/**
 * Orden de salida:
 *
 * "1. ¡Iniciando tarea!"
 * "3. Continuando operación"
 * "4. ¡Tarea finalizada!"
 * "2. Realizando operación"
 *
 * ¿viste eso? cuando ejecutaste este tramo de codigo todos nuestros console.log()
 * aparecieron casi al instante, a excepción del console.log() que estaba contenido
 * en el setTimeOut(). Tuvimos que esperar 5 segundos para que este pudiera aparecer
 * en nuestra consola.
 *
 * Ese es un perfecto ejemplo de una operación asincrona (o no bloqueante)
 */

// ****************************************************************************************************

/**
 * ¡Repasemos un poco los callbacks!
 *
 * El codigo que tenemos aquí abajo hace exactamente lo mismo que el codigo de arriba.
 * La unica diferencia es la manera en como lo escribimos.
 *
 * Sí tienes problemas entendiendo este codigo te recomendamos revisar la grabación de la clase 3
 * donde hablamos sobre programación sincrona y asincrona.
 */
const temporizador = (callback) => {
  setTimeout(() => {
    callback();
  }, 5000);
};

let operacion = () => console.log("2. Realizando operación");

console.log("1. ¡Iniciando tarea!");
temporizador(operacion);
console.log("3. Continuando operación");
console.log("4. ¡Tarea finalizada!");
