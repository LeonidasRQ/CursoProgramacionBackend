/**
 * Aquí puedes ver una pequeña demostración del uso que podemos darle a
 * las funciones que nos ofrece el objeto JSON.
 *
 * JSON significa: JavaScript Object Notation (Notación de Objetos JavaScript)
 *
 * JSON es el formato en el cual trabajan la gran mayoría de los servidores.
 * Nos ayuda a tener respuestas más estructuradas.
 * Lo veremos bastante en futuras secciones del curso cuando comencemos a crear
 * nuestros propios servidores web.
 *
 * JSON posee dos metodos muy poderosos:
 *  - JSON.stringify(): nos permitirá convertir un objeto a un string de tipo JSON.
 *  - JSON.parse(): nos permitirá convertir un string de tipo JSON a un objeto.
 *
 * Los veremos en acción justo ahora:
 */

// Creamos un objeto
const numeros = {
  x: 10,
  y: 20,
};

const string = JSON.stringify(numeros, null, "\t"); // Recibe un objeto y te devolverá un string
console.log(string);

const objeto = JSON.parse(string); // Recibe un string y te devuelve un objeto
console.log(objeto);
