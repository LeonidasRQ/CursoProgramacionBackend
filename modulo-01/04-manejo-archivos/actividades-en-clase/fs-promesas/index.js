/**
 * Actividad en Clase:
 *
 * 1. Abra una terminal en el directorio del archivo y ejecute la instrucción: "npm init -y".
 *   Esto creará un archivo especial (lo veremos más adelante) de nombre package.json
 *
 * 2. Lea el archivo package.json utilizando el file system de node.js.
 *
 * 3. Declare un objeto con el siguiente formato y datos:
 *
 *    const info = {
 *      contenidoStr,
 *      contenidoObj,
 *      tamaño,
 *    };
 *
 *   - La variable "contenidoStr" debe tener el valor del contenido leído de nuestro package.json en formato string
 *   - La variable "contenidoObj" debe tener el valor del contenido leído de nuestro package.json en formato objeto (usar JSON.parse())
 *   - La variable "tamaño" debe tener el valor del tamaño de string (debes investigar como poder obtener este valor)
 *
 *  4. Muestre en consola el objeto "info"
 *
 *  5. Guardar el objeto "info" en un archivo llamado "Info.json" en el mismo nivel
 *     donde se encuentra el archivo "package.json".
 */
const fs = require("fs");
const { Blob } = require("buffer");

const operaciones = async () => {
  try {
    // leemos el archivo "package.json" y guardamos su contenido en la variable "data"
    const data = await fs.promises.readFile("./package.json", "utf-8");

    /**
     * 1. Tomamos el contenido del archivo "package.json" y lo asignamos a nuestra variable "contenidoStr".
     *    Recordemos que el metodo "readFile()" devuelve un "string"
     *    por tanto no hay que hacer algún tipo de procesamiento sobre la variable "data".
     *
     * 2. Usamos el metodo "JSON.parse()" para convertir el contenido del arhivo "package.json"
     *    en un objeto y lo guardamos en la variable "contenidoObj".
     *
     * 3. Usamos el objeto "Blob" para medir el tamaño de la cadena de texto de nuestro archivo "package.json"
     *    Blob significa: "Bynary Large Object". Te recomiendo investigar más sobre este objeto.
     */

    const contenidoStr = data;
    const contenidoObj = JSON.parse(data);
    const tamaño = new Blob([data]).size;

    // Creamos un objeto "info" que tiene como propiedades las variables que ya asignamos justo arriba.
    const info = {
      contenidoStr,
      contenidoObj,
      tamaño,
    };

    console.log(info);

    /**
     * Escribirmos nuestro archivo "info.json" el contenido de nuestro objeto "info".
     *
     * Recuerda que el metodo "writeFile()" solo nos permite pasar un "string" como contenido para el archivo.
     * Por tanto debemos utilizar el metodo "JSON.stringify()" para convertir nuestro objeto "info" en un JSON string.
     *
     * Por ultimo, para que nuestro arhivo sea más facil de leer, vamos a pasarle a nuestra función "JSON.stringify()"
     * los parametros, null y "\t".
     * De esta manera la función "JSON.stringify()" entenderá que debe tabular el objeto "info" que le estamos pasando.
     */
    await fs.promises.writeFile(
      "./info.json",
      JSON.stringify(info, null, "\t")
    );
  } catch (error) {
    console.log(error);
  }
};

operaciones();
