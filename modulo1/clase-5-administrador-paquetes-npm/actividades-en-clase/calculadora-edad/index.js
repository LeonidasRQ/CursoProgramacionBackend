const moment = require("moment");

const fechaHoy = moment();
const fechaNacimiento = moment("30-04-1999", "DD-MM-YYYY");

if (fechaNacimiento.isValid() && fechaHoy.isValid()) {
  // nos permite calcular cuantos dias han pasado desde la fecha de nacimiento que introdujimos hasta el día de hoy
  const diferencia = fechaHoy.diff(fechaNacimiento, "days");
  console.log(diferencia);
}
