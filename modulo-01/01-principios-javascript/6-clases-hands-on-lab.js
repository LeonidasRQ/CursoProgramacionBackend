/**
 * Este es uno de los hands-on-lab realizadeos durante la clase:
 *
 * Se creará una clase que permitirá llevar cuentas individuales según cada responsable.
 * Para ello debemos:
 *
 *  - Definir clase Contador.
 *  - La clase se creará con un nombre, representando al responsable del contador.
 *  - El contador individual debe inicializarse en 0.
 *  - Debe existir una variable estática que funcione como contador global de todas las instancias de contador creadas.
 *
 * Define los siguientes metodos:
 *
 *  - Definir el método getResponsable, el cual debe devolver el responsable de dicho contador.
 *  - Definir el método contar, el cual debe incrementar, tanto su cuenta individual, como la cuenta global.
 *  - Definir el método getCuentaIndividual, el cual debe devolver sólo la cuenta individual del contador
 *  - Definir el método getCuentaGlobal, el cual debe devolver la variable estática con el conteo global.
 *  - Realizar prueba de individualidad entre las instancias.
 */

class Contador {
  constructor(nombre) {
    this.nombre = nombre;
    this.contadorIndividual = 0;
  }
  static contadorGlobal = 0;

  obtenerResponsable = () => {
    return this.nombre;
  };

  contar = () => {
    this.contadorIndividual++;
    Contador.contadorGlobal++;
  };

  obtenerContadorIndividual = () => {
    return this.contadorIndividual;
  };

  obtenerContadorGlobal = () => {
    return Contador.contadorGlobal;
  };
}

// Pruebas:
let contador1 = new Contador("Jose Maria");
let contador2 = new Contador("Lucas");

contador1.contar();
contador1.contar();
console.log(`contador1: ${contador1.obtenerContadorIndividual()}`);

contador2.contar();
console.log(`contador2: ${contador2.obtenerContadorIndividual()}`);

console.log(`contadorGlobal: ${contador1.obtenerContadorGlobal()}`);
