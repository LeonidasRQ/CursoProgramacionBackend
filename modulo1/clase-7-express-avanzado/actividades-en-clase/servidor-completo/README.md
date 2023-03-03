# Actividad en Clase: Servidor con GET, POST, PUT, DELETE

Crear una serie de endpoints que trabajen con la siguiente variable:

```
const frase = "Frase inicial";
```

## Especificación Endpoints

| Verbo http | Ruta                 | Descripción                                                           |
| :--------- | :------------------- | :-------------------------------------------------------------------- |
| GET        | `/api/frase`         | Retorna la frase completa                                             |
| GET        | `/api/palabras/:pos` | Retorna la palabra que se encuentra en la posición indicada (pos)     |
| POST       | `/api/palabras`      | Agrega una palabra al final de la frase                               |
| PUT        | `/api/palabras/:pos` | Reemplaza una palabra dentro de la frase según la posición dada (pos) |
| DELETE     | `/api/palabras/:pos` | Elimina una palabra de la frase según la posición dada (pos)          |

##### Nota: ten en cuenta que la primera palabra dentro de la variable `frase` tiene la posición #1

## Especificación de Respuestas de Endpoints

### GET `/api/frase`

<table>
<tr>

<th>
Status Code
</th>
<th>
Response
</th>

</tr>

<tr>

<td>
200
</td>
<td>

```json
{
  "status": "Success",
  "mensaje": {
    "frase": "frase completa"
  }
}
```

</td>
</tr>

<tr>

<td>
404
</td>
<td>

```json
{
  "status": "Error",
  "mensaje": {
    "error": "frase no encontrada"
  }
}
```

</td>
</tr>
</table>

### GET `/api/palabras/:pos`

<table>
<tr>

<th>
Status Code
</th>
<th>
Response
</th>

</tr>

<tr>

<td>
200
</td>
<td>

```json
{
  "status": "Success",
  "mensaje": {
    "buscada": "palabra"
  }
}
```

</td>
</tr>

<tr>

<td>
404
</td>
<td>

```json
{
  "status": "Error",
  "mensaje": {
    "error": "palabra no encontrada"
  }
}
```

</td>
</tr>
</table>

### POST `/api/palabras`

<table>
<tr>

<th>
Status Code
</th>
<th>
Response
</th>

</tr>

<tr>

<td>
200
</td>
<td>

```json
{
  "status": "Success",
  "mensaje": {
    "agregada": "palabra",
    "pos": 2
  }
}
```

</td>
</tr>

<tr>

<td>
400
</td>
<td>

```json
{
  "status": "Error",
  "mensaje": {
    "error": "la palabra no pudo ser agregada"
  }
}
```

</td>
</tr>
</table>

### PUT `/api/palabras/:pos`

<table>
<tr>

<th>
Status Code
</th>
<th>
Response
</th>

</tr>

<tr>

<td>
200
</td>

<td>

```json
{
  "status": "Success",
  "mensaje": {
    "palabra": "nueva palabra",
    "anterior": "palabra reemplazada"
  }
}
```

</td>
</tr>

<tr>

<td>
400
</td>

<td>

```json
{
  "status": "Error",
  "mensaje": {
    "error": "la palabra no pudo ser agregada"
  }
}
```

</td>
</tr>
<tr>

<td>
404
</td>

<td>

```json
{
  "status": "Error",
  "mensaje": {
    "error": "palabra no encontrada"
  }
}
```

</td>
</tr>
</table>

### DELETE `/api/palabras/:pos`

<table>
<tr>

<th>
Status Code
</th>
<th>
Response
</th>

</tr>

<tr>

<td>
200
</td>
<td>

```json
{
  "status": "Success",
  "mensaje": {
    "mensaje": "palabra eliminada con exito"
  }
}
```

</td>
</tr>

<tr>

<td>
400
</td>
<td>

```json
{
  "status": "Error",
  "mensaje": {
    "error": "la palabra no pudo ser eliminada"
  }
}
```

</td>
</tr>
<tr>

<td>
404
</td>
<td>

```json
{
  "status": "Error",
  "mensaje": {
    "error": "palabra no encontrada"
  }
}
```

</td>
</tr>
</table>
