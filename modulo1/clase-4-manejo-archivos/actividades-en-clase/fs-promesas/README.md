# Actividad en Clase:

1.  Abra una terminal en el directorio del archivo y ejecute la instrucción: "npm init -y". Esto creará un archivo especial (lo veremos más adelante) de nombre package.json
2.  Lea el archivo package.json utilizando el file system de node.js.
3.  Declare un objeto con el siguiente formato y datos:

```
const info = {
    contenidoStr,
    contenidoObj,
    tamaño,
};
```

- La variable "contenidoStr" debe tener el valor del contenido leído de nuestro package.json en formato string
- La variable "contenidoObj" debe tener el valor del contenido leído de nuestro package.json en formato objeto (usar JSON.parse())
- La variable "tamaño" debe tener el valor del tamaño de string (debes investigar como poder obtener este valor)

4. Muestre en consola el objeto "info"
5. Guardar el objeto "info" en un archivo llamado "Info.json" en el mismo nivel donde se encuentra el archivo "package.json".
