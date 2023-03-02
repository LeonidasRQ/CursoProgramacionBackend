# Desafio Entregable: Servidor con Express

## Resumen

Desarrollar un servidor basado en express donde podamos hacer consultas a nuestro archivo de productos haciendo uso de la clase `ProductManager` que tenemos actualmente

## Requerimientos

1. Desarrollar un servidor express que en su archivo `app.js` importe la clase `ProductManager`
2. El servidor debe contar con los siguientes endpoints:

   1. `/products` : la cual debe leer el archivo de productos y devolverlos dentro de un objeto.

      1. Nuestro endpoint nos debe permitir recibir un párametro de tipo `query` de nombre `limit` el cual representará la cantidad de resultados que nosotros deseamos visualizar.

         **Ejemplo: cuando pasamos en nuestro parametro de tipo `query` un valor de 3 nuestra URL debería verse de esta forma:**

         ```
         http://localhost:8080/products?limit=3
         ```

         Este filtro debe permitirnos retornar solo 3 productos de nuestro archivo.

      2. Sí no se recibe el parametro `limit`, entonces el endpoint retornará todos los productos de nuestro archivo.

   2. `/products/:pid` : debe recibir mediante `req.params` el `pid` (product id), y retornar solo el producto con ese id.

## Formato del Entregable

1. **Link** al repositorio de Github con el proyecto completo, el cual debe incluir:
   1. carpeta `./src` que incluya el archivo `app.js` y la clase `ProductManager.js`
   2. archivo `package.json` con la info del proyecto
   3. **NO INCLUIR** la carpeta `./node_modules`

## Sugerencias

1. Recuerda que los metodos de la clase `ProductManager` utilizan metodos asincronos. Por lo tanto, debes usar la sintaxis `async/await` en tus endpoints.
2. Utiliza un archivo que ya contenga productos, pues en este desafio solo utilizaremos peticiones de tipo GET. Es decir, no vamos a crear endpoints para crear productos (todavía)
