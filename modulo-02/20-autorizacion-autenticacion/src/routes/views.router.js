import { Router } from "express";
import { checkLogged, checkLogin, checkSession } from "../middlewares/auth.js";

const router = Router();

router.get("/login", checkSession, (req, res) => {
  res.render("login");
});

router.get("/register", checkLogged, (req, res) => {
  res.render("register");
});

router.get("/restore", (req, res) => {
  res.render("restore");
});

router.get("/", checkLogin, (req, res) => {
  res.render("profile", { user: req.session.user });
});

export default router;
