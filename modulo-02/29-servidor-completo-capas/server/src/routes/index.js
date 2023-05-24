import businessRouter from "./business.router.js";
import usersRouter from "./users.router.js";
import ordersRouter from "./orders.router.js";
import { Router } from "express";

export function routerApi(app) {
  const router = Router();

  app.use("/api/v1", router);

  router.use("/business", businessRouter);
  router.use("/users", usersRouter);
  router.use("/orders", ordersRouter);
}
