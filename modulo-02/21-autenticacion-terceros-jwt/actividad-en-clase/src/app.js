import express from "express";
import handlebars from "express-handlebars";
import morgan from "morgan";
import { __dirname } from "./utils.js";
import viewsRouter from "./routes/views.router.js";
import sessionsRouter from "./routes/sessions.router.js";

// Initialization
const app = express();

app.listen(8080, () => {
  console.log("Listening on port 8080");
});

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`));
app.use(morgan("dev"));

// View Engine
app.engine("handlebars", handlebars.engine());
app.set("views", `${__dirname}/views`);
app.set("view engine", "handlebars");

// Routes
app.use("/api/sessions", sessionsRouter);
app.use("/", viewsRouter);
