import { Router } from "express";

const router = Router();

let dictionary = ["leo"];

/**
 * Anteriormente, cada vez que recibiamos un parametro en nuestros endpoints haciamos una busqueda
 * utilizando dicho parametro.
 *
 * En este caso, router.params nos permite evitar hacer
 * la busqueda de la palabra para cada uno de nuestros endpoints sin necesidad de tener que
 * programar la busqueda dentro de cada endpoint.
 */
router.param("word", (req, res, next, word) => {
  let foundWord = dictionary.find((word) => word);
  if (!foundWord) {
    req.word = null;
  } else {
    req.word = word;
  }
  next();
});

/**
 * Haciendo uso de expresiones regulares le indicamos a nuestro endpoint que
 * nuestro parametro 'word' solo podrá recibir datos que contengan letras de la 'a' hasta la 'z'
 * ya sea mayuscula o minuscula
 */
router.get("/:word([a-zA-Z]+)", (req, res) => {
  console.log(req.word);
  res.send(req.word);
});

/**
 * Esta expresión regular permite que nuestro parametro 'word' pueda recibir
 * caracteres del alfabeto y otros caracteres especiales tales como:
 *
 *  - á = %C3%A1
 *  - é = %C3%A9
 *  - í = %C3%AD
 *  - ó = %C3%B3
 *  - ú = %C3%BA
 *  - ü = %C3%BC
 */
router.get(
  "/accent/:word([a-z%C3%A1%C3%A9%C3%AD%C3%B3%C3%BA%C3%BC]+)",
  (req, res) => {
    res.send(req.params.word);
  }
);

router.get("*", (req, res) => {
  res.status(404).send({ status: "error", error: "cannot get specified word" });
});

export default router;
