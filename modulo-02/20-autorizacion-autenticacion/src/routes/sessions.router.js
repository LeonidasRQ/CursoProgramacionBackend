import { Router } from "express";
import userModel from "../models/user.model.js";
import { createHash, isValidPassword } from "../utils.js";

const router = Router();

router.post("/register", async (req, res) => {
  try {
    const { first_name, last_name, email, age, password } = req.body;

    const userExists = await userModel.findOne({ email });
    if (userExists) {
      return res
        .status(400)
        .send({ status: "error", error: "User already exists" });
    }

    const user = {
      first_name,
      last_name,
      email,
      age,
      password: createHash(password),
    };

    await userModel.create(user);
    return res.send({ status: "sucess", message: "user registered" });
  } catch (error) {
    console.log(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel
      .findOne(
        { email },
        { email: 1, first_name: 1, last_name: 1, password: 1 }
      )
      .lean();

    if (!user)
      return res.status(404).send({ status: "error", error: "User not found" });

    if (!isValidPassword(user, password))
      return res.status(401).send({ status: "error", error: "unauthorized" });

    delete user.password;

    req.session.user = user;
    console.log(user);

    res.send({
      status: "sucess",
      message: "Logged In",
      payload: user,
    });
  } catch (error) {
    console.log(error);
  }
});

router.put("/restore", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .send({ status: "error", error: "user does not exist" });
    }

    const hashedPassword = createHash(password);

    await userModel.updateOne({ email }, { password: hashedPassword });

    return res.send({
      status: "sucess",
      message: "succesfully updated password",
    });
  } catch (error) {
    console.log(error);
  }
});

export default router;
