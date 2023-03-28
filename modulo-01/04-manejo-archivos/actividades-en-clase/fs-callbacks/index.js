/**
 * Actividad en Clase:
 *
 * - Realizar un programa que cree un archivo en el cual escriba la fecha y la hora actual.
 *   Posteriormente leer el archivo y mostrar el contenido por consola.
 * - Utilizar el módulo fs y sus operaciones de tipo callback.
 */
const fs = require("fs");

const fecha = new Date().toString();

fs.writeFile("./archivo-hora.txt", fecha, (error) => {
  if (error) return console.log("Error al crear el archivo");

  fs.readFile("./archivo-hora.txt", "utf-8", (error, resultado) => {
    if (error) return console.log("Error al leer el archivo");
    console.log(resultado);
  });
});
