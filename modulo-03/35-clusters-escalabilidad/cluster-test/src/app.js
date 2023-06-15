import express from "express";

import cluster from "cluster";
import { cpus } from "os";

const logicProcessors = cpus().length;

if (cluster.isPrimary) {
  console.log("Este es el proceso primario. Voy a generar un proceso hijo");

  for (let i = 0; i < logicProcessors; i++) {
    cluster.fork();
  }
} else {
  console.log("Soy proceso hijo!");
  console.log(`Mucho gusto, soy el procesador ${process.pid}`);
  const app = express();

  app.get("/operacionSencilla", (req, res) => {
    let sum = 0;
    for (let i = 0; i < 100000; i++) {
      sum += i;
    }

    res.send({
      status: "success",
      message: `El proceso hijo ${process.pid} ha atendido esta petición, el resultado es: ${sum}}`,
    });
  });

  app.get("/operacionCompleja", (req, res) => {
    let sum = 0;
    for (let i = 0; i < 5e8; i++) {
      sum += i;
    }
    res.send({
      status: "success",
      message: `El proceso hijo ${process.pid} ha atendido esta petición, el resultado es: ${sum}}`,
    });
  });

  app.listen(8080, () => {
    console.log("Listening on port 8080");
  });
}

/**
 * - principal process
 *    - child process #1
 *    - child process #2
 */
