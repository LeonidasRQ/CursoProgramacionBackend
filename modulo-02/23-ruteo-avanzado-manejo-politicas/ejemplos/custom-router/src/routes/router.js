import { Router } from "express";

export default class CustomRouter {
  constructor() {
    this.router = Router();
    this.init();
  }

  getRouter() {
    return this.router;
  }

  init() {}

  get(path, ...callbacks) {
    this.router.get(
      path,
      this.generateCustomResponses,
      this.applyCallbacks(callbacks)
    );
  }

  post(path, ...callbacks) {
    this.router.post(
      path,
      this.generateCustomResponses,
      this.applyCallbacks(callbacks)
    );
  }

  put(path, ...callbacks) {
    this.router.put(
      path,
      this.generateCustomResponses,
      this.applyCallbacks(callbacks)
    );
  }

  delete(path, ...callbacks) {
    this.router.delete(
      path,
      this.generateCustomResponses,
      this.applyCallbacks(callbacks)
    );
  }

  applyCallbacks(callbacks) {
    return callbacks.map((callback) => async (...params) => {
      try {
        await callback.apply(this, params);
      } catch (error) {
        console.log(error);

        params[1].status(500).send(error);
      }
    });
  }

  generateCustomResponses(req, res, next) {
    res.sendSucess = (payload) => res.send({ status: "sucess", payload });

    res.sendServerError = (error) =>
      res.status(500).send({ status: "error", error });

    res.sendUserError = (error) =>
      res.status(400).send({ status: "error", error });

    next();
  }
}
