import { Router } from "express";
import UserManager from "../usersManager.js";

const router = Router();
const userManager = new UserManager();

router.get("/", async (req, res) => {
  const users = await userManager.getUsers();
  return res.send({ status: "Success", payload: users });
});
router.post("/", async (req, res) => {
  const user = req.body;
  const createdUser = await userManager.createUser(user);
  return res.send({ status: "success", payload: createdUser });
});

export default router;
