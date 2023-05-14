import { Router } from "express";

export const toysRouter = Router();

let toys = [
  {
    id: 1,
    name: "Terreneitor",
  },
];

toysRouter.get("/", (req, res) => {
  res.send(toys);
});
