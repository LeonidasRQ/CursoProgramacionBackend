import { Router } from "express";

export const usersRouter = Router();

let users = [
  {
    id: 1,
    firstName: "Eugenio",
    lastName: "Alvarez",
  },
];

usersRouter.get("/", (req, res) => {
  res.send(users);
});
