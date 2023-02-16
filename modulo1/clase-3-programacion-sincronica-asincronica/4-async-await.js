/**
 * sintaxis async-await:
 * Una manera aún más limpia y facil de leer de implementar una promesa
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

const funcionAsincrona = async () => {
  try {
    let resultado = await dividir(10, 5);
    console.log(resultado);
  } catch (error) {
    console.log(error);
  }
};
