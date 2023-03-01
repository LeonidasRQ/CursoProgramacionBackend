const express = require("express");

/**
 * Ya tenemos express instalado, sin embargo, antes de poder usarlo tenemos que inicializarlo.
 *
 * A partir de la linea de abajo, nuestra variable "app" tendrá todas las funcionalidades
 * que nos ofrece express.
 */
const app = express();

// Ejemplo: consulta en express
app.get("/saludo", (req, res) => {
  res.send("Hola a todos, pero ahora desde express");
});

app.listen(8080, () => {
  console.log("Servidor arriba en el puerto 8080");
});
