import fs from "fs";
import __dirname from "./utils.js";
import ChatManager from "./chatsManager.js";
import UserManager from "./usersManager.js";

const chatManager = new ChatManager();
const userManager = new UserManager();

export default class MessageManager {
  constructor() {
    this.path = `${__dirname}/files/Messages.json`;
  }

  getMessages = async () => {
    try {
      if (fs.existsSync(this.path)) {
        const messagesString = await fs.promises.readFile(this.path, "utf-8");
        const messages = JSON.parse(messagesString);
        return messages;
      } else {
        return [];
      }
    } catch (error) {
      console.log(error);
    }
  };

  createMessage = async (chatId, userId, message) => {
    try {
      const messages = await this.getMessages();
      const chat = await chatManager.getChatById(chatId);
      const user = await userManager.getUserById(userId);
      const userInChat = chatManager.checkUserInChat(chatId, userId);
      if (!chat || !user || !userInChat) throw new Error();

      message.id =
        messages.length === 0 ? 1 : messages[messages.length - 1].id + 1;
      message.chatId = chatId;
      message.userId = userId;

      messages.push(message);

      await fs.promises.writeFile(
        this.path,
        JSON.stringify(messages, null, "\t")
      );

      return message;
    } catch (error) {
      console.log(error);
    }
  };
}
