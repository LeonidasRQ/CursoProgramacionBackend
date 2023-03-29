# Actividad en Clase

Realizar un proyecto en Node.js que se conecte a una base de datos MongoDB Atlas llamada `colegio`. Utilizar `mongoose`.

1. Crear una colección llamada `estudiantes` y su respectivo Schema basandote en esta estructura:

   ```
   nombre: String
   apellido: String
   curso: String
   edad: Number
   correo: String (campo unico)
   sexo: String
   ```

   Todos los campos deben ser obligatorios `({ required: true })`

2. Insertar un arreglo de 10 estudiantes a dicha colección.
   Puedes utilizar el objeto se muestra al final de este documento para ahorrar algo de tiempo.

3. Desarrollar los endpoints correspondientes al CRUD pensado para trabajar con esta colección.

4. Prueba el funcionamiento de tus endpoints a través de POSTMAN.

## Objeto de Muestra

```
[
  {
    nombre: "Alejandro",
    apellido: "Hernandez",
    curso: "A",
    edad: 12,
    correo: "alejo@correo",
    sexo: "M",
  },
  {
    nombre: "Sofia",
    apellido: "Fernanda",
    curso: "B",
    edad: 14,
    correo: "sof@correo",
    sexo: "F",
  },
  {
    nombre: "Lorenzo",
    apellido: "Salamanca",
    curso: "A",
    edad: 15,
    correo: "loren@correo",
    sexo: "M",
  },
  {
    nombre: "Juana",
    apellido: "Quintero",
    curso: "C",
    edad: 13,
    correo: "juana@correo",
    sexo: "F",
  },
  {
    nombre: "Federico",
    apellido: "Corrales",
    curso: "B",
    edad: 15,
    correo: "fede@correo",
    sexo: "M",
  },
  {
    nombre: "Diana",
    apellido: "Guarín",
    curso: "C",
    edad: 16,
    correo: "diana@correo",
    sexo: "F",
  },
  {
    nombre: "José",
    apellido: "Luciano",
    curso: "C",
    edad: 14,
    correo: "jose@correo",
    sexo: "M",
  },
  {
    nombre: "Bob",
    apellido: "Patiño",
    curso: "A",
    edad: 12,
    correo: "bob@correo",
    sexo: "M",
  },
  {
    nombre: "Silvia",
    apellido: "Barreto",
    curso: "A",
    edad: 15,
    correo: "silvia@correo",
    sexo: "F",
  },
  {
    nombre: "Angel",
    apellido: "Mori",
    curso: "B",
    edad: 15,
    correo: "angel@correo",
    sexo: "M",
  },
];
```
