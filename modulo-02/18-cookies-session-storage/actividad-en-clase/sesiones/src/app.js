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

app.get("/", (req, res) => {
  const { name } = req.query;

  if (!name) {
    return res
      .status(400)
      .send({ status: "error", message: "No me dijiste tu nombre" });
  }
  if (req.session.counter) {
    req.session.counter++;
    return res.send({
      status: "sucess",
      message: `Hola ${name}, has visitado este sitio ${req.session.counter} veces`,
    });
  }

  req.session.counter = 1;
  return res.send({ status: "sucess", message: `Bienvenido ${name}` });
});

app.listen(8080, (req, res) => {
  console.log("Listening on port 8080");
});
