import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import session from "express-session";
import MongoStore from "connect-mongo";

const app = express();

// variables de entorno
const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

// middlewares
app.use(cookieParser());
app.use(
  session({
    store: MongoStore.create({
      mongoUrl: `mongodb+srv://${dbUser}:${dbPassword}@cluster0.1k06imr.mongodb.net/${dbName}?retryWrites=true&w=majority`,
      mongoOptions: { useNewUrlParser: true, useUnifiedTopology: true },
      ttl: 15,
    }),
    secret: "asdlgnmñl13",
    resave: false,
    saveUninitialized: true,
  })
);

app.get("/", (req, res) => {
  return res.send({
    status: "sucess",
    payload:
      "Yo sabía que te conocía. Te di un plato de avena en 1947 para que pintaras mi cocina y nunca la terminaste",
  });
});

app.listen(8080, () => {
  console.log("Listening on port 8080");
});
