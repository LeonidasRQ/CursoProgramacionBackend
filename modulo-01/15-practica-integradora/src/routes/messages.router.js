import { Router } from "express";
import MessageManager from "../messagesManager.js";

const router = Router();

const messageManager = new MessageManager();

router.get("/", async (req, res) => {
  const messages = await messageManager.getMessages();
  return res.send({ status: "success", payload: messages });
});
router.post("/chat/:cid/user/:uid", async (req, res) => {
  const chatId = Number(req.params.cid);
  const userId = Number(req.params.uid);
  const message = req.body;
  const createdMessage = await messageManager.createMessage(
    chatId,
    userId,
    message
  );
  if (!createdMessage) {
    return res
      .status(400)
      .send({ status: "error", error: "user is not in this chat" });
  }

  return res.send({ status: "success", payload: createdMessage });
});

export default router;
