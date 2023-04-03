import express from "express";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";
import { socket } from "./socket.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import usersRouter from "./routes/users.router.js";
import chatsRouter from "./routes/chats.router.js";
import messagesRouter from "./routes/messages.router.js";
import viewsRouter from "./routes/views.router.js";

const app = express();

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.engine("handlebars", handlebars.engine());
app.set("views", `${__dirname}/views`);
app.set("view engine", "handlebars");

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const port = process.env.PORT || 8080;

const httpServer = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

mongoose.connect(
  `mongodb+srv://${dbUser}:${dbPassword}@cluster0.1k06imr.mongodb.net/${dbName}?retryWrites=true&w=majority`
);

app.use("/api/users", usersRouter);
app.use("/api/chats", chatsRouter);
app.use("/api/messages", messagesRouter);
app.use("/", viewsRouter);

socket.connect(httpServer);
