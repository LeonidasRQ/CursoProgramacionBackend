import express from "express";
import session from "express-session";

const app = express();

app.use(
  session({
    secret: "secretCoder",
    resave: true,
    saveUninitialized: true,
  })
);

app.get("/session", (req, res) => {
  if (req.session.counter) {
    req.session.counter++;
    return res.send(`Has visitado este sitio ${req.session.counter} veces`);
  }
  req.session.counter = 1;
  return res.send("bienvenido");
});

app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (!err) return res.send("logout ok!");

    return res.send({ status: "error", message: "logout error", body: err });
  });
});

app.get("/login", (req, res) => {
  const { username, password } = req.query;
  if (username !== "pepe" || password !== "pepepass") {
    return res.send({ status: "error", message: "login failed" });
  }
  req.session.user = username;
  req.session.admin = true;
  res.send({ status: "success", message: "login success" });
});

function auth(req, res, next) {
  if (req.session?.user === "pepe" && req.session?.admin) {
    return next();
  }
  return res
    .status(401)
    .send({ status: "error", message: "Usuario no autorizado" });
}

app.get("/private", auth, (req, res) => {
  res.send({
    status: "success",
    message: "Sí estás viendo esto, es porque ya estás logueado",
  });
});

app.listen(8080, () => {
  console.log("Listening on port 8080");
});
