# Apuntes CRUD MongoDB

<details> 
    <summary><b><font size="+2">Ejemplo: Mascotas</font></b></summary>

1. Crear base de datos llamada "baseCRUD"

   ```
   use baseCRUD
   ```

2. Agregar coleccion llamada "mascotas"

   ```
   db.createCollection("mascotas")
   ```

3. Agregar 3 mascotas con las siguientes propiedades: nombre, especie, edad

   ```
   db.mascotas.insertMany([{ nombre: 'Lucas', especie: 'Labrador', edad: 4 }, { nombre: 'Luna', especie: 'Labrador', edad: 6 }, { nombre: 'Rocky', especie: 'Weimaraner', edad: 2 }])
   ```

4. Buscar mascotas por especie

   ```
   db.mascotas.find({especie:"Labrador"})
   ```

5. Contar el numero de mascotas agregadas

   ```
   db.mascotas.estimatedDocumentCount()
   ```

</details>

<details> 
    <summary><b><font size="+2">Actividad en Clase: CRUD (Create, Read)</font></b></summary>

1. Crear una base de datos llamada "colegio"
   ```
   use colegio
   ```
2. Crear una colección llamada "estudiantes"

   ```
   db.createCollection("estudiantes")
   ```

3. Agregar 5 estudiantes con los siguientes datos: "nombre","apellido", "curso", "edad", "correo", "sexo"

   ```
   db.estudiantes.insertMany([{nombre: 'Alejandro', apellido: 'Hernandez', curso: 'A', edad: '12', correo: 'alejo@correo', sexo: 'M', }, { nombre: 'Sofia', apellido: 'Fernanda', curso: 'B', edad: '14', correo: 'sof@correo', sexo: 'F', }, { nombre: 'Lorenzo', apellido: 'Salamanca', curso: 'A', edad: '15', correo: 'loren@correo', sexo: 'M', }, { nombre: 'Juana', apellido: 'Quintero', curso: 'C', edad: '13', correo: 'juana@correo', sexo: 'F', }, { nombre: 'Federico', apellido: 'Corrales', curso: 'B', edad: '15', correo: 'fede@correo', sexo: 'M'}])
   ```

4. Agregar también un estudiante que solo tenga: "nombre", "apellido" y "curso" ¿es posible?

   ```
   db.estudiantes.insertOne({nombre: "Leonardo", apellido: "Turizo", curso: "A"})
   ```

5. Realiza una busqueda para obtener a todos los estudiantes
   ```
   db.estudiantes.find()
   ```
6. Realiza una busqueda para obtener a todos los estudiantes de sexo Masculino (M)

   ```
   db.estudiantes.find({sexo:"M"})
   ```

7. Realiza un conteo para obtener el numero de documentos totales

   ```
   db.estudiantes.estimatedDocumentCount()
   ```

8. Realizar el conteo de documentos totales cuyo sexo sea "F"
   ```
   db.estudiantes.countDocument({sexo:"F"})
   ```
   </details>

<details> 
    <summary><b><font size="+2">Ejemplo: Filtros</font></b></summary>

1. El colegio dará una conferencia sobre becas en el sector STEM para mujeres con edades entre 12 y 15 años. Por lo tanto necesita saber que niñas de la institución cumplen el requisito de edad para poder invitarlas a la conferencia.

   ```
   db.estudiantes.find({$and:[{edad:{$gte:"12"}}, {edad:{$lte:"14"}}, {sexo:"F"}]})
   ```

2. El colegio está asignando los cursos de aquellos estudiantes que acaban de matricularse.
   Crear una consulta que nos permita encontrar aquellos estudiantes que no posean la propiedad "curso" en su documento

   ```
   db.estudiantes.find({nombre: {$exists: false}})
   ```

   </details>

   <details> 
    <summary><b><font size="+2">Ejemplo: Proyecciones, Sort, Skip, Limits</font></b></summary>

3. Agregar 5 estudiantes más:

```
db.estudiantes.insertMany([{ nombre: 'Diana', apellido: 'Guarín', curso: 'C', edad: '16', correo: 'diana@correo', sexo: 'F', }, { nombre: 'José', apellido: 'Luciano', curso: 'C', edad: '14', correo: 'jose@correo', sexo: 'M', }, { nombre: 'Bob', apellido: 'Patiño', curso: 'A', edad: '12', correo: 'bob@correo', sexo: 'M', }, { nombre: 'Silvia', apellido: 'Barreto', curso: 'A', edad: '15', correo: 'silvia@correo', sexo: 'F', }, { nombre: 'Angel', apellido: 'Mori', curso: 'B', edad: '15', correo: 'angel@correo', sexo: 'M', }])
```

2. Realizar una busqueda aplicando proyecciones, sort, skip y limit

   1. Obtener todos los estudiantes
      ```
      db.estudiantes.find()
      ```
   2. Agreguemos una proyección: Yo quiero que solo me muestres el nombre, edad y sexo de cada estudiante

      1. Mostrando el nombre de cada estudiante

      ```
      db.estudiantes.find({},{nombre:1})
      ```

      2. Agregando edad y sexo a la proyección

      ```
      db.estudiantes.find({}, {nombre:1, edad:1, sexo:1})
      ```

   3. Agregando ordenamiento con .sort(): Ordenar los estudiantes por edad de manera ascendente

   ```
   db.estudiantes.find({}, {nombre:1, edad:1, sexo:1}).sort({edad:1})
   ```

   4. Agregamos un filtro: Yo quiero que me traigas solo aquellos documentos que contienen la propiedad "edad" y "sexo"

   ```
   db.estudiantes.find({edad: {$exists: true}, sexo:{$exists:true}}, {nombre:1, edad:1, sexo:1}).sort({edad:1})

   ```

   5. Agregamos un .limit(): Yo quiero que solo me traigas los 5 primeros estudiantes que encuentes

   ```
   db.estudiantes.find({edad: {$exists: true}, sexo:{$exists:true}}, {nombre:1, edad:1, sexo:1}).sort({edad:1}).limit(5)
   ```

   6. Agregamos el .skip(): Quiero que me muestres solo 5 estudiantes, pero vas a omitir los 5 elementos que leas de la base de datos

   ```
   db.estudiantes.find({edad: {$exists: true}, sexo:{$exists:true}}, {nombre:1, edad:1, sexo:1}).sort({edad:1}).limit(5).skip(5)
   ```

   </details>

<details> 
    <summary><b><font size="+2">Actividad en Clase: Operaciones con Filtros</font></b></summary>
1. Crear la colección "clientes" dentro de la base de datos "colegio"
   ```
   db.createCollection("clientes")
   ```
2. Insertar cinco documentos dentro de la colección clientes

```
db.clientes.insertMany([{nombre: "Pablo", edad:25}, {nombre: "Juan", edad:22}, {nombre: "Lucia", edad:25}, {nombre: "Juan", edad:29},{nombre: "Fede", edad:35}])
```

3. Listar todos los documentos de la colección "clientes" ordenados por edad descendente

   ```
   db.clientes.find().sort({edad:-1})
   ```

4. Listar el cliente más joven

   ```
   db.clientes.find().sort({edad:1}).limit(1)
   ```

5. Listar el segundo cliente más joven

   ```
   db.clientes.find().sort({edad:1}).limit(1).skip(1)
   ```

6. Listar los clientes llamados "Juan"

   ```
   db.clientes.find({nombre:"Juan"})
   ```

7. Listar los clientes llamados "Juan" que tengan 29 años

   ```
   db.clientes.find({$and:[{nombre: "Juan"}, {edad: 29}]})
   ```

8. Listar los clientes llamados "Juan" o "Lucía"

   ```
   db.clientes.find({$or:[{nombre: "Juan"}, {nombre: "Lucia"}]})
   ```

9. Listar los clientes que tengan más de 25 años

   ```
   db.clientes.find({edad:{$gt: 25}})
   ```

10. Listar los clientes que tengan 25 años o menos

    ```
    db.clientes.find({edad: {$lte:25}})
    ```

11. Listar los clientes que NO tengan 25 años

    ```
    db.clientes.find({edad: {$ne: 25}})
    ```

12. Listar los clientes que están entre los 26 y 35 años

    ```
    db.clientes.find({edad: {$gte: 26, $lte: 35}})
    ```

13. Actualizar la edad de Fede a 36 años, listando y verificando que no aparezca en el ultimo listado

    ```
    db.clientes.updateOne({nombre: "Fede"}, {$set:{edad: 36}})
    ```

14. Actualizar todas las edades de los clientes que tienen 25 años a 26

    ```
    db.clientes.updateMany({edad: 25}, {$set: {edad: 26}})
    ```

15. Borrar los clientes que se llamen Juan.

    ```
    db.clientes.deleteMany({nombre: "Juan"})
    ```

16. Eliminar todos los documentos de estudiantes que hayan quedado con algun valor

    ```
    db.estudiantes.deleteMany({})
    ```

</details>
