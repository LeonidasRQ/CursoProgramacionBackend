import { Router } from "express";

export const usersRouter = Router();

let users = [
  {
    firstName: "Eugenio",
    lastName: "Alvarez",
  },
];

usersRouter.get("/", (req, res) => {
  res.send(users);
});

usersRouter.post("/", (req, res) => {
  const user = req.body;
  users.push(user);
  res.send({ status: "success", message: "user created", payload: user });
});
