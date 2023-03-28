/**
 * Podemos entender un valor como la unidad más pequeña de dato que utilizamos en programación.
 * por ejemplo:
 *  - "Jonas" (string)
 *  - 12345 (Number)
 *  - true (Boolean)
 *  - false (Boolean)
 */

console.log("Jonas"); // muestra en consola el valor: "Jonas"
console.log(123); // muestra en console el valor: 123

/**
 * Por otro lado, también podemos utilizar variables para almacenar nuestros valores.
 * Podemos pensar como si una variable fuera una caja en la cual guardamos un valor.
 */

const primerNombre = "Jonas";

console.log(primerNombre);
/**
 * A diferencia de nuestro codigo de arriba, ahora podemos acceder a nuestro valor "Jonas"
 * haciendo uso de la variable (o caja) que lo representa.
 *
 * Una de las ventajas de utilizar variables es que podemos utilizar el valor que esta
 * almacena en multiples ocasiones.
 * Además, cuando necesitemos hacer cambios en nuestro valor, solo tendremos
 * que cambiarlo en un solo sitio.
 *
 * Por ejemplo:
 *
 * Si necesitamos cambiar una parte del mensaje  que estamos imprimiendo en la consola
 * tendriamos que modificar cada uno de los console.log. Lo cual NO es recomendable, pues hace que
 * nuestro proceso de desarrollo sea más lento.
 *
 * Por ejemplo: Intenta modificar el nombre "Mario Hugo" en cada console.log, cambialo por "Tulio Triviño"
 */
console.log("🐇 Ah, que buena frase, anotala Mario Hugo");
console.log("🐇 Ah, que buena frase, anotala Mario Hugo");
console.log("🐇 Ah, que buena frase, anotala Mario Hugo");
console.log("🐇 Ah, que buena frase, anotala Mario Hugo");

// En lugar de hacer eso ☝🏻, se recomienda adoptar el siguiente enfoque 👇🏻:

// ¿Lo ves? ahora solo tienes que modificar un solo valor, a diferenceia que lo que hicimos antes.
const celebreFraseDeBodoque = "🐇 Ah, que buena frase, anotala Mario Hugo";

console.log(celebreFraseDeBodoque);
console.log(celebreFraseDeBodoque);
console.log(celebreFraseDeBodoque);
console.log(celebreFraseDeBodoque);

/**
 * Ejemplo de Objetos en JavaScript
 * Podemos utilizar un objeto cuando necesitamos agrupar variables.
 *
 * Por ejemplo:
 */
const persona = {
  id: 1, // Number
  nombre: "Leonidas", // String
  apellido: "Ramirez", // String
  peliculaFavorita: "Eyes Wide Shut", // String
};

// Sí queremos mostrar el objeto con todas sus propiedades en nuestra consola, podemos hacerlo así:
console.log(persona);

// Sí queremos mostrar solo una propiedad de nuestro objeto en la consola, podemos hacer esto:
console.log(persona.peliculaFavorita);

/*
 * Importante recordar el uso de convenciones al momento de nombrar nuestras variables.
 * En JS normalmente se utiliza camelCase
 *
 * En JS, los nombres de nuestras variables solo pueden componerse de:
 * numeros (123...), letras (abc...), guión bajo (_), o el signo dolar ($).
 *
 * Ejemplos de nombres de variables ILEGALES:
 * const 3years = 3;
 * const jonas&matilda = "jm"
 * */
