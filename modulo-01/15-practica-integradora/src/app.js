import express from "express";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";
import { socket } from "./socket.js";
import usersRouter from "./routes/users.router.js";
import chatsRouter from "./routes/chats.router.js";
import messagesRouter from "./routes/messages.router.js";
const app = express();

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.engine("handlebars", handlebars.engine());
app.set("views", `${__dirname}/views`);
app.set("view engine", "handlebars");

const httpServer = app.listen(8080, () => {
  console.log("Listening on port 8080");
});

app.use("/api/users", usersRouter);
app.use("/api/chats", chatsRouter);
app.use("/api/messages", messagesRouter);

socket.connect(httpServer);
