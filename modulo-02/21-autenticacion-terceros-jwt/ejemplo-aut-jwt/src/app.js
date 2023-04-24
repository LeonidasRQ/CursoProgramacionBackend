import express from "express";
import { generateToken, authToken } from "./utils.js";

// Initialization
const app = express();

app.listen(8080, (req, res) => {
  console.log("Listening on port 8080");
});

app.use(express.json());

const users = [];

// Routes
app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  const userExists = users.find((user) => user.email === email);

  if (userExists)
    return res
      .status(400)
      .send({ status: "error", error: "user already exists" });

  const newUser = {
    name,
    email,
    password,
  };

  users.push(newUser);

  const accessToken = generateToken(newUser);
  return res.send({ status: "sucess", accessToken });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find(
    (user) => user.email === email && user.password === password
  );
  if (!user)
    return res
      .status(400)
      .send({ status: "error", error: "Authentication Error" });

  const accessToken = generateToken(user);
  return res.send({ status: "sucess", accessToken });
});

app.get("/get", authToken, (req, res) => {
  res.send({ status: "sucess", payload: req.user });
});
