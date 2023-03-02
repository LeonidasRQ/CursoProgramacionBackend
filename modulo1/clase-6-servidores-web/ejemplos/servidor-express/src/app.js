const express = require("express");

/**
 * Ya tenemos express instalado, sin embargo, antes de poder usarlo tenemos que inicializarlo.
 *
 * A partir de la linea de abajo, nuestra variable "app" tendrá todas las funcionalidades
 * que nos ofrece express.
 */
const app = express();

const usuarios = [
  { id: "1", nombre: "Myrna", apellido: "Espinosa", genero: "M" },
  { id: "2", nombre: "Natalia", apellido: "Cardozo", genero: "F" },
  { id: "3", nombre: "Roberto", apellido: "Gomez", genero: "M" },
  { id: "4", nombre: "Dalia", apellido: "Gomez", genero: "F" },
  { id: "5", nombre: "Herminio", apellido: "Fuentes", genero: "M" },
  { id: "6", nombre: "Juan", apellido: "Cepeda", genero: "M" },
];

/**
 * Ejemplo: usando req.params
 *
 * Este endpoint nos permite retornar un usuario con un id especifico
 */
app.get("/:idUsuario", (req, res) => {
  const idUsuario = req.params.idUsuario;
  const usuario = usuarios.find((u) => u.id === idUsuario);
  if (!usuario) return res.send({ error: "Usuario no encontrado" });
  res.send(usuario);
});

/**
 * Ejemplo: usando req.query
 *
 * Sí la propiedad "genero" no se introdujo en el query, o si el genero no es "M" ni "F",
 * entonces no se emplea ningun filtro y retorna el array usuarios completo
 */
app.get("/", (req, res) => {
  const genero = req.query.genero;

  if (!genero || (genero !== "M" && genero !== "F"))
    return res.send({ usuarios });

  let usuariosFiltrados = usuarios.filter(
    (usuario) => usuario.genero === genero
  );

  res.send({ usuarios: usuariosFiltrados });
});

app.listen(8080, () => {
  console.log("Servidor arriba en el puerto 8080");
});
