import { Server } from "socket.io";

const socket = {};

socket.connect = function (httpServer) {
  socket.io = new Server(httpServer);

  let { io } = socket;

  io.on("connection", (socket) => {
    console.log(`${socket.id} connected`);
  });
};

export { socket };
