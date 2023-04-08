# Segunda Pre-Entrega del Proyecto Final: Profesionalizando la Base de Datos

## Objetivos Generales:

1. Cambiaremos nuestro sistema de persistencia a MongoDB
2. Terminaremos de definir todos los endpoints para trabajar con los productos y carritos

## Objetivos Especificos:

1. Profesioanlizar las consultas de productos con filtros, paginación y ordenamientos
2. Profesionalizar la gestión de carritos usando los ultimos conceptos vistos

## Sugerencia

1. Recuerda que lo unico que debes cambiar es el modelo de persistencia de archivos por el modelo basado en la base de datos. La logica de negocio sigue siendo la misma

## Requerimientos

1. Modificar el endpoint `GET /api/products` según las siguientes especificaciones:

   1. Debe poder recibir los siguientes parametros mediante el objeto `req.query`:
      1. **limit:**
         1. Permite devolver el numero de elementos solicitados por el usuario.
         2. Sí no se recibe en la petición, tomará un valor por defecto de 10
      2. **page:**
         1. La pagina que queremos visualizar.
         2. Sí no se recibe, tendrá un valor por defecto de 1
      3. **query:**
         1. Representa el filtro a aplicar.
         2. Nos debe permitir filtrar productos por categoría y por disponibilidad (status).
         3. Sí este parametro no se recibe, se listarán todos los elementos
      4. **sort:**
         1. Se ordenarán los productos por precio, ya sea de forma ascendente o descendente.
         2. Sí no se recibe este parametro, no se aplica ordenamiento
   2. Debe retornar una respuesta con la siguiente estructura:

      ### Estructura de un Producto

      ###### Tabla 1: Estructura de Producto

      | Propiedad   | Tipo de Dato | Descripción                                                                                            |
      | :---------- | :----------- | :----------------------------------------------------------------------------------------------------- |
      | status      | `String`     | Representa el estado de la petición del usuario. Puede ser `success` o `error`                         |
      | payload     | `Array`      | Lista de productos                                                                                     |
      | totalPages  | `Number`     | Cantidad total de paginas                                                                              |
      | prevPages   | `Number`     | Numero de la pagina anterior                                                                           |
      | nextPage    | `Number`     | Numero de la pagina siguiente                                                                          |
      | page        | `Number`     | Numero de pagina actual                                                                                |
      | hasPrevPage | `Boolean`    | Boolean para saber sí existe una pagina anterior                                                       |
      | hasNextPage | `Boolean`    | Boolean para saber sí existe una pagina siguiente                                                      |
      | prevLink    | `String`     | Link hacia la pagina anterior. Este será null sí la propiedad `hasPrevPage` tiene un valor de `false`  |
      | nextLink    | `String`     | Link hacia la pagina siguiente. Este será null sí la propiedad `hasNextPage` tiene un valor de `false` |

      ###### Ilustración 1: Ejemplo de una respuesta exitosa del endpoint para listar productos

      ```
      {
          status: "success"
          payload: [
            {
                "_id": "64305228441be760cfb1fecb",
                "first_name": "Sibby",
                "last_name": "David",
                "email": "sdavid5@goo.gl",
                "gender": "Female",
                "grade": 2.5,
                "group": "B"
            },
            {
                "_id": "64305228441be760cfb1fecc",
                "first_name": "Erna",
                "last_name": "Vasyaev",
                "email": "evasyaev6@cbsnews.com",
                "gender": "Female",
                "grade": 4.6,
                "group": "B"
            },
            {
                "_id": "64305228441be760cfb1fecd",
                "first_name": "Dev",
                "last_name": "Trevaskus",
                "email": "dtrevaskus7@yahoo.co.jp",
                "gender": "Male",
                "grade": 3.3,
                "group": "C"
            }
        ],
          totalPages: 20
          prevPage: 1
          nextPage: 3
          page: 2
          hasPrevPage: true
          hasNextPage: true
          prevLink: "/students?page=1"
          nextLink: "/students?page=3"
      }
      ```

2. Agregar `carts.router.js` los siguientes endpoints:

   ###### Tabla 2: Especificación de rutas para carritos

   | Verbo http | Ruta                  | Descripcion                                                                                   |
   | :--------- | :-------------------- | :-------------------------------------------------------------------------------------------- |
   | DELETE     | `/:cid/products/:pid` | Elimina un producto del carrito especifico                                                    |
   | DELETE     | `/:cid`               | Elimina todos los productos de un carrito                                                     |
   | PUT        | `/:cid`               | Actualiza el carrito con un arreglo de productos                                              |
   | PUT        | `/:cid/products/:pid` | Actualizar SOLAMENTE la cantidad de unidades de un producto que ya se encuentre en el carrito |

   ###### Nota: Recuerda que todas las rutas especificadas en esta tabla están precedidas por `/api/carts`

3. Modifica el `cartsSchema` para que en su propiedad `products` almacene una referencia a la colección de productos
4. Modifica el endpoint que permite encontrar un carrito `GET /api/carts/:cid` para que este pueda popular los objetos que hacen referencia a los productos almacenados dentro del carrito
5. Modificar la vista `products.handlebars` para que incluya las siguientes especificaciones:
   1. Debe incluír paginación. El usuario debe poder navegar entre paginas para ver los productos
   2. Se debe poder agregar un producto al carrito desde esta vista. Cada producto renderizado en esta vista debe contar con su propio botón para agregar al carrito
6. Crear una nueva vista llamada `product.handlebars` (en singular)
   1. Cuando el usuario se encuentre navegando en la lista de productos, este debe poder hacer click en cualquiera de estos y ser redireccionado a esta nueva vista, donde se renderizarán los detalles del producto en el cual el usuario hizo click
   2. Esta vista también debe contar con un botón para agregar ese producto en especifico al carrito
7. Crea una nueva vista llamada `cart.handlebars` que permita visualizar los productos de un carrito en especifico
