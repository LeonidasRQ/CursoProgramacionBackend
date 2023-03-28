import { Router } from "express";
import { uploader } from "../utils.js";

const router = Router();
let pets = [];

router.get("/", (req, res) => {
  res.send({ pets });
});

router.post("/", uploader.single("thumbnail"), (req, res) => {
  const filename = req.file.filename;
  if (!filename) {
    return res
      .status(400)
      .send({ status: "Error", error: "No se pudo agregar el archivo" });
  }

  const pet = req.body;
  pet.thumbnail = `http://localhost:8080/images/${filename}`;
  pets.push(pet);
  return res.send({ status: "Success" });
});

export default router;
