const socket = io();
let user;
let chatBox = document.getElementById("chatBox");

Swal.fire({
  title: "Identificate",
  input: "text",
  text: "Alerta basica con Sweetalert2",
  inputValidator: (value) => {
    return !value && "Necesitas escribir un nombre de usuario para continuar";
  },
  allowOutsideClick: false,
}).then((result) => {
  user = result.value;
  socket.emit("user-autenticated", user);
});

chatBox.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    if (chatBox.value.trim().length > 0) {
      socket.emit("message", { user: user, message: chatBox.value });
      chatBox.value = "";
    }
  }
});

socket.on("messageLogs", (data) => {
  let log = document.getElementById("messageLogs");
  let messages = "";
  data.forEach((message) => {
    messages += `${message.user}: ${message.message} </br>`;
  });
  log.innerHTML = messages;
});

socket.on("user-connected", (data) => {
  Swal.fire({
    text: "Nuevo usuario autenticado",
    toast: true,
    position: "top-right",
    title: `${data} se ha unido al chat`,
    icon: "success",
  });
});
