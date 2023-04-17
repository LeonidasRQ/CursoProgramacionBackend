import { Router } from "express";
import { checkLogged, checkLogin } from "../middlewares/auth.js";

const router = Router();

router.get("/login", checkLogged, (req, res) => {
  res.render("login");
});

router.get("/register", checkLogged, (req, res) => {
  res.render("register");
});

router.get("/", checkLogin, (req, res) => {
  res.render("profile", { user: req.session.user });
});

export default router;
