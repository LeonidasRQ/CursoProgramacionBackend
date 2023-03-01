# Actividad en Clase:

1. Crear un proyecto basado en express js, el cual cuente con un servidor que escuche en el puerto `8080`

2. Debes configurar los siguientes endpoints en nuestro servidor:

   1. El endpoint del método `GET` a la ruta `/bienvenida` deberá devolver un html con letras en color azul, en una string, dando la bienvenida

   2. El endpoint del método `GET` a la ruta `/usuario` deberá devolver un objeto con los datos de un usuario falso. Por ejemplo:

      ```
      {
        nombre: "Alfredo",
        apellido: "Mercurio",
        edad: 60,
        correo: "alfredo.mercurio@gmail.com",
      }
      ```
