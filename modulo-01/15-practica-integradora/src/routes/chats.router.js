import { Router } from "express";
import ChatManager from "../chatsManager.js";

const router = Router();

const chatManager = new ChatManager();

router.get("/", async (req, res) => {
  const chats = await chatManager.getChats();
  return res.send({ status: "success", payload: chats });
});
router.post("/", async (req, res) => {
  const chat = req.body;
  const createdChat = await chatManager.createChat(chat);
  return res.send({ status: "success", payload: createdChat });
});
router.post("/:cid/user/:uid", async (req, res) => {
  const chatId = Number(req.params.cid);
  const userId = Number(req.params.uid);

  const updatedChat = await chatManager.addUser(chatId, userId);
  if (!updatedChat) {
    return res
      .status(400)
      .send({ status: "error", error: "chat o usuario no existen" });
  }
  return res.send({ status: "success", payload: updatedChat });
});

export default router;
