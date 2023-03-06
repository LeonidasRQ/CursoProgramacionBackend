import { Router } from "express";

const router = Router();
let pets = [];

router.get("/", (req, res) => {
  res.send({ pets });
});

router.post("/", (req, res) => {
  const pet = req.body;
  pets.push(pet);
  return res.send({ status: "Success" });
});

export default router;
