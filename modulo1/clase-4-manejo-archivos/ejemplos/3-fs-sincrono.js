/**
 * Esta es la manera más sencilla de hacer uso del file system.
 * Fijate que los nombres de todas las funciones incluyen
 * la palabra "Sync" al final. Esto indica que esta versión de las funciones se ejecuta de
 * manera sincrona, por tanto, debes tener cuidado al utilizarlas porque son funciones bloqueantes!
 */

// "fs" : file system
const fs = require("fs");

// nos permite crear un arhivo. El primer argumento será el nombre del archivo y el segundo su contenido
fs.writeFileSync("./ejemplo.txt", "Hola, estoy en un archivo");

// verificamos si un archivo en particular existe
if (fs.existsSync("./ejemplo.txt")) {
  // leemos el contenido de un archivo y lo guardamos en una variable para imprimirlo en consola
  let contenido = fs.readFileSync("ejemplo.txt", "utf-8");
  console.log(contenido);

  // agregamos contenido a un archivo existente
  fs.appendFileSync("./ejemplo.txt", "Más contenido");

  // volvemos a leer el archivo para ver los cambios que agregamos
  contenido = fs.readFileSync("ejemplo.txt", "utf-8");
  console.log(contenido);

  // eliminamos el archivo
  fs.unlinkSync("./ejemplo.txt");
}
