// Homero
const socket = io();

socket.emit("message", "Miiiilhouseeeee");

socket.on("message1", (data) => {
  console.log(data);
});

socket.emit("message2", "Dile a Bart que venga aquí");

socket.on("message3", (data) => {
  console.log(data);
});
