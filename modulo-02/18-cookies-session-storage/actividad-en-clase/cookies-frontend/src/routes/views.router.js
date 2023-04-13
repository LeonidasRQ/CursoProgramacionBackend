import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render("home", { title: "Home" });
});

router.post("/cookie", (req, res) => {
  const { name, email } = req.body;

  return res
    .cookie(name, email, { maxAge: 10000 })
    .send({ status: "success", message: "cookie set" });
});

export default router;
