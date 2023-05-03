import { Router } from "express";

const router = Router();

const pets = [];

router.param("pet", (req, res, next, name) => {
  const foundPet = pets.find((pet) => pet.name === name);
  if (!foundPet) {
    req.pet = null;
  } else {
    req.pet = foundPet;
  }
  next();
});

router.post("/", (req, res) => {
  const { name, specie } = req.body;
  const pet = {
    name,
    specie,
  };
  pets.push(pet);
  return res.send({ status: "sucess", message: "pet added", payload: pets });
});

router.get("/:pet([a-zA-Z]+)", (req, res) => {
  return res.send({ payload: req.pet });
});
router.put("/:pet([a-zA-Z]+)", (req, res) => {
  const pet = req.pet;
  if (!pet)
    return res.status(404).send({ status: "error", error: "pet not found" });

  pet.adopted = true;

  const petIndex = pets.findIndex((pet) => pet.name);

  pets.splice(petIndex, 1, pet);

  return res.send({
    status: "sucess",
    message: "pet updated succesfully",
    payload: pets,
  });
});

router.get("*", (req, res) => {
  return res.status(404).send({ status: "error", error: "parameter error" });
});

export default router;
