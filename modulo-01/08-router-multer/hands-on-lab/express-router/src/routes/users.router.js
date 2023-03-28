import { Router } from "express";

const router = Router();
let users = [];

router.get("/", (req, res) => {
  res.send({ users });
});

router.post("/", (req, res) => {
  const user = req.body;
  users.push(user);
  return res.send({ status: "Success" });
});

export default router;
