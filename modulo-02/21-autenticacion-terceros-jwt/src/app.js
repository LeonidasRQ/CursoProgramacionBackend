import express from "express";
import handlebars from "express-handlebars";
import session from "express-session";
import morgan from "morgan";
import initializePassport from "./auth/passport.js";
import { __dirname } from "./utils.js";
import database from "./db.js";
import config from "./config.js";
import sessionsRouter from "./routes/sessions.router.js";
import viewsRouter from "./routes/views.router.js";

// initialization
const app = express();
app.listen(8080, () => {
  console.log("Listening on port 8080");
});

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`));
app.use(morgan("dev"));
initializePassport();
app.use(
  session({
    resave: true,
    saveUninitialized: false,
    secret: config.sessionSecret,
  })
);

// view engine
app.engine("handlebars", handlebars.engine());
app.set("views", `${__dirname}/views`);
app.set("view engine", "handlebars");

// database connection
database.connect();

// routes
app.use("/api/sessions", sessionsRouter);
app.use("/", viewsRouter);
