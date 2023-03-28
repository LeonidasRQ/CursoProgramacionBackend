import { Router } from "express";
import { uploader } from "../utils.js";

// le damos las funciones de Router a nuestra variable router
const router = Router();

let users = [];

router.get("/", (req, res) => {
  res.send({ status: "Success", payload: users });
});

router.post("/", (req, res) => {
  if (!req.file) {
    return res
      .status(400)
      .send({ status: "Error", error: "No se pudo guardar la imagen" });
  }

  let user = req.body;
  user.profile = req.file.path;
  users.push(user);
  res.send({ status: "Sucess", message: "User created" });
});

export default router;
