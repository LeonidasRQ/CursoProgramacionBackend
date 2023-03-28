/**
 * 1. Operador spread
 * Este operador puede ser utilizado en dos escenarios:
 *  - Para aplicar destructuración a las propiedades de un objeto
 *  - Para hacer una copia de las propiedades de un objeto
 */

/**
 * Destructuración:
 * Nos permite acceder directamente a las propiedades de un objeto sin utilizar la notación punto.
 *
 * Podemos utilizar la destructuración cuando tenemos que acceder muchas veces a una misma
 * propiedad de un objeto.
 *
 * La destructuración nos ayuda a tener codigo más limpio y facil de leer.
 *
 * Ejemplo:
 */
let breakingBadSerie = {
  nombreSerie: "Breaking Bad",
  anioEmision: 2009,
};

// Accediendo a las propiedades del objeto usando la notación punto:
let mensaje = `NOTACIÓN PUNTO: ${breakingBadSerie.nombreSerie} es una de las series más exitosas de todos los tiempos. 
Fue emitida por primera vez en el año ${breakingBadSerie.anioEmision}.`;
console.log(mensaje);

// Accediendo a las propiedades del objeto usando destructuración con el operador spread
let { nombreSerie, anioEmision } = breakingBadSerie;
mensaje = `DESTRUCTURACIÓN: ${nombreSerie} es una de las series más exitosas de todos los tiempos.
Fue emitida por primera vez en el año ${anioEmision}.`;
console.log(mensaje);

/**
 * Creando copias de propiedades de un objeto usando el operador spread:
 *
 * Ejemplo 1: debemos juntar las propiedades de los objetos: 'datosPersonales' y 'usuario'
 * dentro de un nuevo objeto llamado 'persona'.
 */
let datosPersonales = {
  nombre: "Mario",
  apellido: "Valencia",
  edad: 25,
  casado: false,
};

let usuario = {
  email: "mario@gmail.com",
  premium: false,
};

// tomamos las propiedades de 'datosPersonales' y 'usuario' y los juntamos en el objeto 'persona'
let persona = { ...datosPersonales, ...usuario };
console.log(persona);

// Ejemplo 2: 'Corner Case'
let objeto1 = {
  propiedad1: 2,
  propiedad2: "b",
  propiedad3: true,
};

let objeto2 = {
  propiedad1: "c",
  propiedad2: [5, 3, 2, 4, 2],
};

let objeto3 = { ...objeto2, ...objeto1 };

console.log(objeto3);

/**
 * 2. Operador rest
 * Nos ayuda a separar las propiedades de un objeto
 */
let objeto4 = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

// Indicamos que queremos trabajar con la propiedad 'a'
// y guardamos el resto de propiedades del objeto en el objeto 'rest'
let { a, ...rest } = objeto4;
console.log(rest); // { b: 2, c: 3 }
