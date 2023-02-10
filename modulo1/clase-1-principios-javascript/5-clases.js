/**
 * Una clase es como tener una plantilla o un molde, nos dicta cuales son las caracteristicas que
 * debe tener una de sus instancias.
 *
 *
 */
class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }

  static especie = "humano";

  /**
   * Este metodo nos retorna el nombre con el cual fue creada nuestra instancia.
   * Es decir, el nombre que le pasamos a nuestra función constructor cuando creamos nuestra instancia.
   */
  saludar = () => {
    console.log(`Hola, mi nombre es ${this.nombre}`);
  };

  /**
   * Este metodo nos permite acceder al valor de nuestra variable estatica especie, el cual tiene un valor de "humano".
   */
  obtenerEspecie = () => {
    console.log(`Aunque no lo creas, soy un ${Persona.especie}, como tu`);
  };
}

/**
 * Creamos dos instancias de la clase Persona.
 * Podemos entener el acto de "crear una instancia de una clase" como sí utilizaramos una plantilla
 */
let persona1 = new Persona("Leandro");
let persona2 = new Persona("Leopoldo");

persona1.saludar(); // Hola, mi nombre es Leandro
persona2.saludar(); // Hola, mi nombre es Leopoldo

persona1.getEspecie(); // Aunque no lo creas, soy un humano, como tu
persona2.getEspecie(); // Aunque no lo creas, soy un humano, como tu
