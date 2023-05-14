import { Router } from "express";

export const toysRouter = Router();

let toys = [
  {
    name: "Terreneitor",
    price: 250,
  },
];

toysRouter.get("/", (req, res) => {
  res.send(toys);
});

toysRouter.post("/", (req, res) => {
  const toy = req.body;
  toys.push(toy);
  res.send({ status: "success", message: "toy created", payload: toy });
});
