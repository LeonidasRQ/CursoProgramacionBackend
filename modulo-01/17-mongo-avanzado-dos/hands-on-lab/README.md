# Hands on Lab: Sistema de Paginación de Estudiantes

Crearemos un servidor con express que nos permita visualizar la lista completa de los estudiantes utilizando paginación

## Requerimientos

1. Crear una vista con handlebars llamada `students` donde se muestren los estudiantes.
2. La vista debe contener los siguientes elementos para la paginación:
   1. Un enlace llamado `Anterior` que permita regresar a la pagina anterior de estudiantes.
      ###### Nota: Este solo debe ser visible cada que exista una pagina anterior
   2. Un enlace llamado `Siguiente` que permita ir a la pagina siguiente de estudiantes.
      ###### Nota: Este solo debe ser visible cada que exista una pagina siguiente
   3. Debe resaltarse el numero de la página actual
