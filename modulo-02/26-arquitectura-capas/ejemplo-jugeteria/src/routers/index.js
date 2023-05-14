import { Router } from "express";
import { usersRouter } from "./users.router.js";
import { toysRouter } from "./toys.router.js";

export const routerApi = function (app) {
  const router = Router();
  app.use("/api/v1", router);

  router.use("/users", usersRouter);
  router.use("/toys", toysRouter);
};
