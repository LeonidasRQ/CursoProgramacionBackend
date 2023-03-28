import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render("chat", { title: "chat" });
});

export default router;
