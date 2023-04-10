import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render("home", { title: "Home" });
});

router.post("/cookie", (req, res) => {
  const data = req.body;

  return res
    .cookie("CoderCookie", data, { maxAge: 10000 })
    .send({ status: "success", message: "cookie set" });
});

export default router;
