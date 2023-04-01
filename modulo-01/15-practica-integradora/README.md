# Practica Integradora

Vamos a crear una aplicación de chat integrando todos los conceptos que hemos visto a lo largo de la cursada.

Primero crearemos la aplicación con un modelo de persistencia basado en archivos y luego lo cambiaremos por MongoDB y mongoose.

Utilizaremos:

- Node.js
- Express
- MongoDB Atlas
- mongoose
- handlebars
- websockets
- file system
- dotenv
- nodemon

## Requerimientos:

1. Crea la estructura base del servidor de express

   ###### Ilustración 1: Descripción de estructura de carpetas en el proyecto

   ```
   ├── src
   │   ├── public
   │   ├── routes
   │   ├── views
   │   ├── app.js
   │   ├── socket.js
   │   ├── utils.js
   ```

2. Implementa un modelo de persistencia basado en archivos

   1. Crea la carpeta `files` dentro de la carpeta `src`
   2. Crea los respectivos managers para cada una de las entidades involucradas en nuestro sistema. Cada manager debe contar con los metodos `findAll()` y `create()`
      1. `usersManager.js`
      2. `messagesManager.js`
      3. `chatsManager.js`

3. ¡Comencemos a implementar nuestro modelo de persistencia basado con MongoDB y mongoose! **NO BORRES LO IMPLEMENTACIÓN DE ARCHIVOS**

   1. Configuremos MongoDB Atlas

      1. Crea una base de datos en MondoDB Atlas llamada `chatAll`
      2. Configura las credenciales de acceso. Asegurate de copiar la contraseña y guardarla en un lugar seguro
      3. Obten la URL de conexión para nuestra aplicación

   2. Configuremos la base de datos en nuestro editor de codigo

      1. En el archivo `app.js` pega la URL que obtuvimos en MongoDB Atlas y pegala dentro de `mongoose.conect("")`. Recuerda sustituir el parametro `<password>` dentro de esta URL por la contraseña que configuraste cuando creaste la base de datos
      2. Crea una una carpeta llamada `dao` que tenga la siguiente estructura:
         ###### Ilustración 2: Descripción de estructura de carpetas en el proyecto
         ```
            ├── src
            │   ├── dao
            |   |   ├── dbManagers
            |   |   |   ├── user.js
            |   |   |   ├── message.js
            |   |   |   ├── chat.js
            |   |   ├── fileManagers
            |   |   |   ├── user.js
            |   |   |   ├── message.js
            |   |   |   ├── chat.js
            │   │   ├── models
            |   |   |   ├── user.js
            |   |   |   ├── message.js
            |   |   |   ├── chat.js
            │   ├── routes
            │   ├── views
            │   ├── app.js
            │   ├── socket.js
            │   ├── utils.js
         ```
      3. Mueve los managers creamos con modelo de persistencia de archivos dentro a la ruta: `\src\dao\dbManagers` tal como lo denota la estructura de carpetas en la **Ilustración 2**
      4. Crea los modelos para cada entidad involucrada en nuestro sistema en la ruta `\src\dao\models`. Puedes utilizar los siguientes schemas como guía:

         ###### Ilustración 3: Descripción de userSchema

         ```
         userSchema = {
            first_name
            last_name
            email
         }
         ```

         ###### Ilustración 4: Descripción de messageSchema

         ```
         messageSchema = {
            // Es una referencia al id del chat donde el mensaje fue enviado
            chat

            // Es una referencia al id del autor de autor del mensaje
            user

            // El cuerpo del mensaje, este debe ser obligatorio
            message

            // La fecha en la cual fue enviado el mensaje
            date
         }
         ```

         ###### Ilustración 5: Descripción de chatSchema

         ```
         chatSchema = {
            // Referencia a todos los usuarios que pertencen al chat
            users
         }
         ```

4. Crea una vista llamada `chat.handlebars` en la cual todos los usuarios conectados a nuestra aplicación podrán ver los mensajes enviados
