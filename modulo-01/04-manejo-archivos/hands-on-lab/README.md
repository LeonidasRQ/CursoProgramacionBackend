# Hands On Lab

Se creará una clase que permita gestionar usuarios usando fs.promises, éste deberá contar sólo con dos métodos: Crear un usuario y consultar los usuarios guardados.

1. Crea un nuevo archivo llamado "ManagerUsuarios.js" y crear allí la clase "ManagerUsuarios".
2. Dentro de eta clase agrega los metodos "crearUsuario()" y "consultarUsuario()".
3. El metodo "crearUsuario()" debe recibir como parametro un objeto que contenga las siguientes propiedades:

   ```
   const usuario = {
       nombre,
       apellido,
       edad,
       curso
   }
   ```

   - El método debe guardar un usuario en un archivo “Usuarios.json”.
   - Deben guardarlos dentro de un arreglo, ya que se trabajarán con múltiples usuarios.

4. El método “consultarUsuarios()” debe poder leer el archivo "Usuarios.json" y devolver el arreglo correspondiente a esos usuarios.
