import express from "express";
import mongoose from "mongoose";
import handlebars from "express-handlebars";
import dotenv from "dotenv";
dotenv.config();
import __dirname from "./utils.js";
import studentsRouter from "./routes/students.router.js";
import viewsRouter from "./routes/views.router.js";

const app = express();

// configuración handlebars
app.engine("handlebars", handlebars.engine());
app.set("views", `${__dirname}/views`);
app.set("view engine", "handlebars");

// variables de entorno
const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

// conexión a base de datos MongoDB ATLAS
mongoose.connect(
  `mongodb+srv://${dbUser}:${dbPassword}@cluster0.1k06imr.mongodb.net/${dbName}?retryWrites=true&w=majority`
);

app.listen(8080, () => {
  console.log("Listening on port 8080");
});

app.use("/api/students", studentsRouter);
app.use("/students", viewsRouter);
