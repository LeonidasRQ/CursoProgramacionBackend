import express from "express";
import { fork } from "child_process";

const app = express();

app.listen(8080, () => {
  console.log("Listening on port 8080");
});

app.get("/", (req, res) => {
  res.send("hola");
});

app.get("/suma", (req, res) => {
  const child = fork("./operacionCompleja.js");
  child.send("Inicia el calculo");
  child.on("message", (result) => {
    res.send(`El resultado de la operacón es ${result}`);
  });
});
