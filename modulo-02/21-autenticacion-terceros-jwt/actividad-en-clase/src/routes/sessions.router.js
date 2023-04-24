import { Router } from "express";
import { generateToken, authToken } from "../utils.js";

const router = Router();

let users = [
  {
    name: "leo",
    email: "leo@correo",
    password: "123",
  },
];

router.post("/register", (req, res) => {
  const { name, email, password, phone } = req.body;
  const userExists = users.find((user) => user.email === email);

  if (userExists)
    return res
      .status(400)
      .send({ status: "error", error: "user already exists" });

  const newUser = {
    name,
    email,
    password,
    phone,
  };

  users.push(newUser);
  return res.send({ status: "sucess" });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const foundUser = users.find(
    (user) => user.email === email && user.password === password
  );
  if (!foundUser)
    return res.status(403).send({ status: "error", error: "Auth Error" });

  const accessToken = generateToken(foundUser);

  return res.send({ status: "sucess", accessToken });
});

router.get("/profile", authToken, (req, res) => {
  return res.send({ status: "sucess", payload: req.user });
});

export default router;
