const express = require("express");

const app = express();

app.use(express.json());

const server = app.listen(8080, (req, res) => {
  console.log("Listening on port 8080");
});

let frase = "Frase inicial";

// Obtener la frase completa
app.get("/api/frase", (req, res) => {
  if (!frase) {
    return res.status(404).send({
      status: "Error",
      mensaje: {
        error: "frase no encontrada",
      },
    });
  }

  return res.send({
    status: "Success",
    mensaje: {
      frase: frase,
    },
  });
});

// Obtener una palabra en una posición especifica dentro de la variable "frase"
app.get("/api/palabras/:pos", (req, res) => {
  const { pos } = req.params;

  /**
   * La función .split() nos ayuda a convertir el string "Frase inicial" en un array.
   * De esta forma: ["Frase", "inicial"]
   *
   * Puedes consultar más sobre la función .split() en MDN (Mozilla Developer Network)
   */
  const arrayPalabras = frase.split(" ");

  const palabra = arrayPalabras[pos - 1];

  if (!palabra || pos > arrayPalabras.length || pos <= 0) {
    return res.status(404).send({
      status: "Error",
      mensaje: {
        error: "palabra no encontrada",
      },
    });
  }

  return res.send({
    status: "Success",
    mensaje: {
      buscada: palabra,
    },
  });
});

// Agregar una nueva palabra dentro de la variable "frase"
app.post("/api/palabras", (req, res) => {
  const { palabra } = req.body;

  if (!palabra) {
    return res.status(400).send({
      status: "Error",
      mensaje: {
        error: "la palabra no pudo ser agregada",
      },
    });
  }

  // convertimos la variable "frase" en un array usando la función .split()
  const fraseArray = frase.split(" ");

  // agregamos la nueva palabra que enviamos a través de Postman a nuestro array
  fraseArray.push(palabra);

  const posicionPalabra = fraseArray.length;

  /**
   * La función .join() nos ayuda a crear un string a partir de un array.
   *
   * En este caso estamos reasignando nuestra variable "frase"
   * y le damos como valor el array que ya contiene la nueva palabra.
   */
  frase = fraseArray.join(" ");

  return res.status(201).send({
    status: "Success",
    mensaje: {
      agregada: palabra,
      pos: posicionPalabra,
    },
  });
});

// Modificar una palabra existente dentro de la variable "frase"
app.put("/api/palabras/:pos", (req, res) => {
  const posicion = req.params.pos;
  const { palabra } = req.body;

  const fraseArray = frase.split(" ");

  if (posicion > fraseArray.length || posicion <= 0) {
    return res.status(404).send({
      status: "Error",
      mensaje: {
        error: "palabra no encontrada",
      },
    });
  }

  if (!palabra) {
    return res.status(400).send({
      status: "Error",
      mensaje: {
        error: "por favor, envía una palabra para agregar a la frase",
      },
    });
  }

  /**
   * Asignamos a la variable "palabraReemplazada" el valor que tiene el array de palabras
   * en la posición: "posicion - 1"
   */
  const palabraReemplazada = fraseArray[posicion - 1];

  /**
   * En este caso la función .splice() nos ayuda reemplazar el elemento de un array
   * en una posición especifica por otro elemento.
   *
   * Aquí reemplazamos la palabra existente por la palabra
   * que nosotros le pasemmos mediante postman.
   *
   * Consulta más sobre esta función en MDN (Mozzilla Developer Network)
   */
  fraseArray.splice(posicion - 1, 1, palabra);

  /**
   * le reasignamos a la variable "frase" el nuevo array que hemos creado
   * y lo convertimos a string con la función .join()
   */
  frase = fraseArray.join(" ");

  res.status(200).send({
    status: "Success",
    mensaje: {
      palabra: palabra,
      anterior: palabraReemplazada,
    },
  });
});

// Eliminar una palabra dentro de la variable "frase"
app.delete("/api/palabras/:pos", (req, res) => {
  const posicion = req.params.pos;

  const fraseArray = frase.split(" ");

  if (posicion > fraseArray.length || posicion <= 0) {
    return res.status(404).send({
      status: "Error",
      mensaje: {
        error: "palabra no encontrada",
      },
    });
  }

  /**
   * En este caso usamos la función .splice() para eliminar un elemento de un array
   * en una posición especifica.
   *
   * Fijate que en este caso, solo le pasamos dos parametros a la función, a diferencia
   * de lo que hicimos en el endpoint para modificar una palabra existente, sí te fijas, en
   * ese caso utilizamos 3 parametros. (Consulta MDN para saber más al respecto)
   */
  fraseArray.splice(posicion - 1, 1);

  frase = fraseArray.join(" ");

  return res.status(200).send({
    status: "Success",
    mensaje: {
      mensaje: "palabra eliminada con exito",
    },
  });
});
