import express from "express";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";
import { Server } from "socket.io";
import viewsRouter from "./routes/views.router.js";

const app = express();

const httpServer = app.listen(8080, () => {
  console.log("Listening on port 8080");
});

const socketServer = new Server(httpServer);

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.engine("handlebars", handlebars.engine());
app.set("views", `${__dirname}/views`);
app.set("view engine", "handlebars");

app.use("/", viewsRouter);

socketServer.on("connection", (socket) => {
  console.log("Nuevo cliente conectado");

  socket.on("message", (data) => {
    console.log(data);
  });

  socket.emit("message1", "Queeeee");

  socket.on("message2", (data) => {
    console.log(data);
  });

  socket.emit("message3", "Creo que está con Nelsooon");
});
