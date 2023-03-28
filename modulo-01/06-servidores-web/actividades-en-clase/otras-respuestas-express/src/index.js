const express = require("express");

const app = express();

app.get("/bienvenida", (req, res) => {
  res.send(`<h1 style="color:blue">Bienvenido a mi express</h1>`);
});

app.get("/usuario", (req, res) => {
  res.send({
    nombre: "Alfredo",
    apellido: "Mercurio",
    edad: 60,
    correo: "alfredo.mercurio@gmail.com",
  });
});

app.listen(8080, () => {
  console.log("Listening on port 8080");
});
