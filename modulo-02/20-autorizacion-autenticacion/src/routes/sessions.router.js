import { Router } from "express";
import userModel from "../models/user.model.js";
import { createHash, isValidPassword } from "../utils.js";
import passport from "passport";

const router = Router();

router.post(
  "/register",
  passport.authenticate("register", { failureRedirect: "/failRegister" }),
  async (req, res) => {
    return res.send({ status: "sucess", message: "user registered" });
  }
);

router.get("/failRegister", (req, res) => {
  console.log("Failed Register");
  return res.send({ status: "error", error: "authentication error" });
});

router.post(
  "/login",
  passport.authenticate("login", { failureRedirect: "/failLogin" }),
  async (req, res) => {
    if (!req.user)
      return res.status(401).send({ status: "error", error: "Unauthorized" });

    req.session.user = {
      first_name: req.user.first_name,
      last_name: req.user.last_name,
      age: req.user.age,
      email: req.user.email,
    };
    res.send({ status: "sucess", payload: req.user });
  }
);

router.get("/failLogin", (req, res) => {
  res.send({ status: "error", error: "failed login" });
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
