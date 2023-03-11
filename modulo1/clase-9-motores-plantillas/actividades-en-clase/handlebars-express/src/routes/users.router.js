import { Router } from "express";

const router = Router();

let users = [];

router.get("/", (req, res) => {
  return res.send({ users });
});

router.post("/", (req, res) => {
  const user = req.body;

  if (!user) {
    return res.status(400).send({
      status: "Error",
      message: "You must especify an user before uploading",
    });
  }

  users.push(user);
  return res.send({
    status: "OK",
    message: "User added successfully",
    payload: user,
  });
});

export default router;
