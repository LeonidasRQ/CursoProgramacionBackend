// callback hell
movePlayer(100, "Left", function () {
  movePlayer(400, "Left", function () {
    movePlayer(10, "Right", function () {
      movePlayer(330, "Left", function () {});
    });
  });
});

// mismo codigo de arriba pero usando promesas
movePlayer(100, "Left")
  .then(() => movePlayer(400, "Left"))
  .then(() => movePlayer(10, "Right"))
  .then(() => movePlayer(330, "Left"));

/**
 * Vamos a crear nuestra nueva promesa
 */

const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve("Funcionó");
  } else {
    reject("Error!");
  }
});

//promise.then((result) => console.log(result));

// Hagamos algo más interesante con esta promesa!
promise
  .then((result) => result + "!")
  .then((result2) => result2 + "?")
  .then((result3) => console.log(result3 + "!"))
  .catch((error) => console.log(error));

/**
 * Vamos a analizar otro ejemplo:
 */

const dividir = (dividendo, divisor) => {
  return new Promise((resolve, reject) => {
    if (divisor === 0) {
      reject("No se puede hacer divisiones entre 0");
    } else {
      resolve(dividendo / divisor);
    }
  });
};

dividir(6, 3)
  .then((resultado) => console.log(resultado))
  .catch((error) => console.log(error));

dividir(5, 0)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
