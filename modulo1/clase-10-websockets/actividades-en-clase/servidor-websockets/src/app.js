import express from "express";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";
import { Server } from "socket.io";
import viewsRouter from "./routes/views.router.js";

const app = express();

const httpServer = app.listen(8080, () => {
  console.log("Listening on port 8080");
});

const io = new Server(httpServer);

app.engine("handlebars", handlebars.engine());
app.set("views", `${__dirname}/views`);
app.set("view engine", "handlebars");

app.use(express.static(`${__dirname}/public`));

app.use("/", viewsRouter);

let logs = [];

io.on("connection", (socket) => {
  console.log("Connected");

  socket.on("message1", (data) => {
    io.emit("log", data);
  });

  // segunda parte de la actividad
  socket.on("message2", (data) => {
    logs.push({ socketId: socket.id, message: data });
    io.emit("log", { logs });
  });
});
