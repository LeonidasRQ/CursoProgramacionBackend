import express from "express";
import cookieParser from "cookie-parser";

const app = express();

// Este middleware nos ayuda a que nuestros endpoints puedan leer las cookies que existen en el cliente
// Agregamos una clave o un "secreto" para poder agregar una medida extra de seguridad en caso de que la cookie sea modificada del lado del cliente
app.use(cookieParser("Secreto"));

app.listen(8080, (req, res) => {
  console.log("listening on port 8080");
});

// endpoint en donde creamos una cookie
app.get("/setCookies", (req, res) => {
  // Creamos una cookie que exista durante 20 segundos y esté firmada con nuestro "secreto"
  res.cookie("CoderCookie", "Esta es una cookie muy poderosa", {
    maxAge: 20000,
    signed: true,
  });
  res.send("Hello world");
});

// endpoint para obtener las cookies existentes
app.get("/getCookies", (req, res) => {
  // const cookies = req.cookies;
  const cookies = req.signedCookies;
  res.send({ cookies });
});

// endpoint para borrar una cookie en especifico
app.get("/deleteCookie", (req, res) => {
  res.clearCookie("MyCookie").send("Cookie Removed");
});
