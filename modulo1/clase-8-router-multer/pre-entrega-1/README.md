# Primera Entrega de tu Proyecto Final

## Resumen

Desarrollar un servidor basado en Node.JS y express, que escuche en el puerto 8080 y disponga de dos grupos de rutas: `/api/products` y `/api/carts`. Dichos endpoints estarán implementados con el router de express.

## Requerimientos

### Rutas para productos

Todas las rutas de products que están especificadas en la **tabla 1** deben ser precedidas por este path: `/api/products`

###### Tabla 1: Especificación de rutas para productos

| Verbo http | Ruta    | Descripcion                                                                                                      |
| :--------- | :------ | :--------------------------------------------------------------------------------------------------------------- |
| GET        | `/`     | Listar todos los productos del archivo (incluír el parametro query del desafío anterior`limit`)                  |
| GET        | `/:pid` | Retorna solo el producto con el id proporcionado                                                                 |
| POST       | `/`     | Deberá crear un nuevo producto con la estructura que detallamos abajo de esta tabla                              |
| PUT        | `/:pid` | Deberá actualizar un producto con los campos enviados desde el body. (Nunca se debe actualizar o eliminar el id) |
| DELETE     | `/:pid` | Debe eliminar el producto con el pid proporcionado                                                               |

### Estructura de un Producto

###### Tabla 2: Estructura de Producto

| Propiedad   | Tipo de Dato        | Descripción                                                                                                         |
| :---------- | :------------------ | :------------------------------------------------------------------------------------------------------------------ |
| id          | `Number` o `String` | Identificador unico del producto. Debe ser autogenerado desde la clase `ProductManager`                             |
| title       | `String`            | Nombre del producto                                                                                                 |
| description | `String`            | Descripción del producto. Por ejemplo: especificación de peso o dimensiones, etc.                                   |
| code        | `String`            | Codigo del producto                                                                                                 |
| price       | `Number`            | Precio del producto                                                                                                 |
| status      | `Boolean`           | Tendrá un valor `true` por defecto. Será `false` cuando hayan 0 unidades del producto en stock                      |
| stock       | `Number`            | Cantidad de unidades disponibles para la venta                                                                      |
| category    | `String`            | Categoría a la que pertenece el producto. Por ejemplo: "Pet Care", "Health and Wellness", "Food and Beverage", etc. |
| thumbnails  | `Array`             | Arreglo que contiene las direcciones a imagenes relacionadas al producto                                            |

###### Nota: Todos los campos son obligatorios, a excepción de `thumbnail`

###### Ejemplo de Producto almacenado en `Products.json`

```
[
    {
        id: 1
        title: "Cheese",
        description: "500 gr",
        code: "AGSM123",
        price: 23,
        status: true,
        stock: 4,
        category: "food" ,
        thumbnails: [
            "http://localhost:8080/images/image1.jpg",
            "http://localhost:8080/images/image2.jpg"
            ]
    }
]
```

### Rutas para Carritos

Todas las rutas de carritos que están especificadas en la **tabla 3** deben ser precedidas por este path: `/api/carts`

###### Tabla 3: Especificación de rutas para carritos

| Verbo http | Ruta                 | Descripcion                                                                                                                  |
| :--------- | :------------------- | :--------------------------------------------------------------------------------------------------------------------------- |
| POST       | `/`                  | Deberá crear un nuevo carrito con la estructura que detallamos abajo de esta tabla                                           |
| GET        | `/:cid`              | Retorna solo el carrito con el id proporcionado                                                                              |
| POST       | `/:cid/product/:pid` | Deberá agregar el id del producto indicado a la propiedad del carrito llamada `products`. Evita agregar el producto completo |

### Estructura de un Carrito

###### Tabla 4: Estructura de Carrito

| Propiedad | Tipo de Dato        | Descripción                                                                         |
| :-------- | :------------------ | :---------------------------------------------------------------------------------- |
| id        | `Number` o `String` | Identificador unico del carrito. Debe ser autogenerado desde la clase `CartManager` |
| products  | `Array`             | Array que contendrá los id's de los productos que se van agregando al carrito       |

###### Ejemplo de Carrito almacenado en `Carts.json`

```
[
    {
        id: 1
        products: [ 1, 2, 6 ]
    }
]
```
