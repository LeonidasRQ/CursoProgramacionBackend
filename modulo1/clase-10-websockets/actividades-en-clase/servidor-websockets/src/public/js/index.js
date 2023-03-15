const socket = io();

const input = document.getElementById("textbox");
const log = document.getElementById("log");

/* input.addEventListener("keyup", (event) => {
  event.target.value = "";
  socket.emit("message1", event.key);
});
socket.on("log", (data) => {
  log.innerHTML += data;
}); */

// Segunda parte de la actividad
input.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    socket.emit("message2", input.value);
    input.value = "";
  }
});

socket.on("log", (data) => {
  let logs = "";
  data.logs.forEach((log) => {
    logs += `El socket ${log.socketId} dice: ${log.message} </br>`;
  });

  log.innerHTML = logs;
});
