const sumar = (numero1, numero2) => numero1 + numero2;
const restar = (numero1, numero2) => numero1 - numero2;
const multiplicar = (numero1, numero2) => numero1 * numero2;
const dividir = (numero1, numero2) => numero1 / numero2;

const realizarOperacion = (numero1, numero2, callback) => {
  let resultado = callback(numero1, numero2);

  console.log(
    `El resultado de la operación que me pediste que hiciera es: ${resultado}
    `
  );
};

realizarOperacion(2, 5, sumar);
realizarOperacion(2, 5, restar);
realizarOperacion(2, 5, multiplicar);
realizarOperacion(2, 5, dividir);
