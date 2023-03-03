const express = require("express");

const app = express();

const server = app.listen(8080, () => {
  console.log("Listening on port 8080");
});

app.use(express.json());

let users = [];

app.post("/api/user", (req, res) => {
  let user = req.body;

  if (!user.firstName || !user.secondName) {
    return res
      .status(400)
      .send({ status: "Error", error: "incomplete values" });
  }

  users.length === 0
    ? (user.id = 1)
    : (user.id = users[users.length - 1].id + 1);

  users.push(user);
  return res.status(201).send({ status: "Success", message: "User created" });
});

app.get("/api/user", (req, res) => {
  if (users.length === 0) {
    return res
      .status(404)
      .send({ status: "Error", message: "There are not users registered" });
  }

  return res.status(200).send({ status: "OK", message: users });
});

app.put("/api/user/:id", (req, res) => {
  const userId = req.params.id;
  const changes = req.body;

  const userIndex = users.findIndex((u) => u.id == userId);

  if (userIndex === -1) {
    return res.status(404).send({ status: "Error", message: "User not found" });
  }

  if (changes.id) {
    return res
      .status(400)
      .send({ status: "Error", message: "Cannot update User id" });
  }

  const user = users[userIndex];

  const updatedUser = {
    ...user,
    ...changes,
  };

  users.splice(userIndex, 1, updatedUser);

  return res
    .status(200)
    .send({ status: "OK", message: "User succesfully updated" });
});

app.delete("/api/user/:id", (req, res) => {
  const userId = req.params.id;

  const userIndex = users.findIndex((u) => u.id == userId);

  if (userIndex === -1) {
    return res
      .status(404)
      .send({ status: "Error", message: "User does not exist" });
  }

  users.splice(userIndex, 1);
  return res
    .status(200)
    .send({ status: "Sucess", message: "User succesfully deleted" });
});
