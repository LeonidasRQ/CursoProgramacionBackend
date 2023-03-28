/**
 * Operador nullish
 * Este operador nos retorna el operando del lado derecho cuando nuestra variable
 * tiene un valor de null o undefined.
 *
 * Ejemplo:
 */

const foo = 15 ?? "Vacio";
console.log(foo); // 'Vacio'

const baz = 0 ?? 42;
console.log(baz); // 0

class Persona {
  #fullname;
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.fullname = `${this.nombre} ${this.apellido}`;
  }

  getFullName = () => {
    return this.#fullname;
  };

  #metodoPrivado = () => {};
}

let instancia1 = new Persona("Mauricio", "Espinoza");

console.log(instancia1.nombre);
console.log(instancia1.apellido);
console.log(instancia1.getFullName());
//instancia1.#fullName;
