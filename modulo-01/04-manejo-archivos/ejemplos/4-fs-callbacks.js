/**
 * Aquí podemos ver una implementación de las diferentes operaciones que nos ofrece
 * el file system haciendo uso de callbacks asincronos
 */
const fs = require("fs");

fs.writeFile("./ejemplo-callback.txt", "Hola desde callback", (error) => {
  if (error) return console.log("Error al escribir el archivo");

  fs.readFile("./ejemplo-callback.txt", "utf-8", (error, resultado) => {
    if (error) return console.log("Error al leer el archivo");
    console.log(resultado);

    fs.appendFile("./ejemplo-callback.txt", "Este es otro mensaje", (error) => {
      if (error) return console.log("Error al actualizar el archivo");

      fs.readFile("./ejemplo-callback.txt", "utf-8", (error, resultado) => {
        if (error) return console.log("Error al leer el archivo");
        console.log(resultado);

        fs.unlink("./ejemplo-callback.txt", (error) => {
          if (error) return console.log("No se pudo borrar el archivo");
        });
      });
    });
  });
});
