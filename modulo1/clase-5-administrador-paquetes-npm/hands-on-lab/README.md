# Hands On Lab: Practica de Modulos Nativos: fs + crypto

## Resumen:

Se creará una clase `UserManager` que permitirá guardar usuarios en un archivo. El usuario se recibirá con una contraseña en string plano, y se deberá guardar la contraseña hasheada con crypto. Utilizar los módulos nativos fs y crypto, Nuestra clase debe cumplir con los siguientes requerimientos:

## Requerimientos:

1. El método `crearUsuario()` debe permitirnos:

   1. Guardar un usuario en un archivo llamado `Usuarios.json`
   2. Hashear la contraseña.
   3. Recibir un objeto `usuario` como el mostrado a continuación:

      ```
      const usuario = {
          nombre,
          apellido,
          nombreUsuario,
          contraseña
      }
      ```

2. El método `validarUsuario()` nos debe permitir:
   1. Recibir `nombreUsuario` y `contraseña` como parametros;
   2. Leer el archivo `Usuarios.json` y comparar sí los parametros recibidos coinciden con los datos de algún usuario registrado en nuestro arhivo:
      1. Sí hay coincidencia, retornar un string con el mensaje "Loggueado";
      2. En caso contrario retornar un error indicando sí el usuario no existe, o si la contraseña no coincide.
