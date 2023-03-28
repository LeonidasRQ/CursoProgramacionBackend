/**
 * Aquí podemos ver una implementación de las mismas operaciones que realizamos anteriormente
 * con archivos, la diferencia aquí es que ya no estamos utilizando callbacks, sino promesas
 * con la sintaxis async/await.
 *
 * Esta sintaxis es mucho más comoda de leer y nos evita dolores de cabeza que teniamos
 * con los callbacks anidados.
 */
const fs = require("fs");

const operacionesAsincronas = async () => {
  await fs.promises.writeFile("./ejemplo-promesas.txt", "Hola desde promesa");

  let resultado = await fs.promises.readFile("./ejemplo-promesas.txt", "utf-8");
  console.log(resultado);

  await fs.promises.appendFile("./ejemplo-promesas.txt", "Más texto");

  resultado = await fs.promises.readFile("./ejemplo-promesas.txt", "utf-8");
  console.log(resultado);

  await fs.promises.unlink("./ejemplo-promesas.txt");
};

operacionesAsincronas();
