import { Router } from "express";
// import UserManager from "../dao/fileManagers/users.js";
import UserManager from "../dao/dbManagers/users.js";

const router = Router();
const userManager = new UserManager();

router.get("/", async (req, res) => {
  const users = await userManager.getUsers();
  return res.send({ status: "Success", payload: users });
});

router.post("/", async (req, res) => {
  const user = req.body;
  const createdUser = await userManager.createUser(user);
  if (!createdUser) {
    return res
      .status(400)
      .send({ status: "error", error: "email already exists" });
  }
  return res.send({ status: "success", payload: createdUser });
});

export default router;
