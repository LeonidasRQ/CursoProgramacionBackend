import express from "express";
import session from "express-session";

const app = express();

app.use(
  session({
    secret: "coderSecret",
    resave: true,
    saveUninitialized: true,
  })
);
let counter = 1;

app.get("/", (req, res) => {
  const name = req.query.name;

  if (!req.session.user) {
    req.session.user = { name };
    return res.send({
      status: "sucess",
      message: `Bienvenido ${req.session.user.name}`,
    });
  }
  return res.send({
    status: "sucess",
    message: `Hola ${
      req.session.user.name
    }, has visitado este sitio ${++counter} veces`,
  });
});

app.listen(8080, (req, res) => {
  console.log("Listening on port 8080");
});
