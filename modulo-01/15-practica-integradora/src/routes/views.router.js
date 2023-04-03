import { Router } from "express";
import MessagesManager from "../dao/dbManagers/messages.js";

const messagesManager = new MessagesManager();
const router = Router();

router.get("/", async (req, res) => {
  const messages = await messagesManager.getMessages();
  console.log(messages);
  res.render("chat", { title: "chat app", messages });
});

export default router;
