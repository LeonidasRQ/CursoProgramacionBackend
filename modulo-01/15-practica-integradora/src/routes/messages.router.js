import { Router } from "express";
// import MessageManager from "../dao/fileManagers/messages.js";
import MessageManager from "../dao/dbManagers/messages.js";

const router = Router();

const messageManager = new MessageManager();

router.get("/", async (req, res) => {
  const messages = await messageManager.getMessages();
  return res.send({ status: "success", payload: messages });
});

router.post("/chat/:cid/user/:uid", async (req, res) => {
  const chatId = req.params.cid;
  const userId = req.params.uid;
  const { message } = req.body;

  const messageObj = {
    chat: chatId,
    user: userId,
    message,
  };
  const createdMessage = await messageManager.createMessage(messageObj);
  if (!createdMessage) {
    return res
      .status(400)
      .send({ status: "error", error: "user is not in this chat" });
  }

  return res.send({ status: "success", payload: createdMessage });
});

export default router;
