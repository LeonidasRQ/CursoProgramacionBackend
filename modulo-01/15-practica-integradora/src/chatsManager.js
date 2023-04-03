import fs from "fs";
import __dirname from "./utils.js";
import UserManager from "./usersManager.js";

const userManager = new UserManager();

export default class ChatManager {
  constructor() {
    this.path = `${__dirname}/files/Chats.json`;
  }

  getChats = async () => {
    try {
      if (fs.existsSync(this.path)) {
        const chatsString = await fs.promises.readFile(this.path, "utf-8");
        const chats = JSON.parse(chatsString);
        return chats;
      } else {
        return [];
      }
    } catch (error) {
      console.log(error);
    }
  };

  createChat = async (chat) => {
    try {
      const chats = await this.getChats();

      chat.id = chats.length === 0 ? 1 : chats[chats.length - 1].id + 1;
      chat.users = [];

      chats.push(chat);

      await fs.promises.writeFile(this.path, JSON.stringify(chats, null, "\t"));

      return chat;
    } catch (error) {
      console.log(error);
    }
  };

  getChatById = async (id) => {
    try {
      const chats = await this.getChats();
      const chat = chats.find((chat) => chat.id === id);
      if (!chat) throw new Error("chat does not exist");
      return chat;
    } catch (error) {
      console.log(error);
    }
  };

  checkUserInChat = async (chatId, userId) => {
    try {
      const chat = await this.getChatById(chatId);
      const userIndex = chat.users.findIndex((id) => id === userId);
      return userIndex !== -1;
    } catch (error) {
      console.log(error);
    }
  };

  addUser = async (chatId, userId) => {
    try {
      const chats = await this.getChats();
      const chatIndex = chats.findIndex((chat) => chat.id === chatId);
      const chat = await this.getChatById(chatId);
      const user = await userManager.getUserById(userId);
      if (!user || !chat) {
        throw new Error();
      }
      const isUserInChat = await this.checkUserInChat(chatId, userId);

      if (isUserInChat) throw new Error("User is already in this chat");

      chat.users.push(userId);
      chats.splice(chatIndex, 1, chat);
      await fs.promises.writeFile(this.path, JSON.stringify(chats, null, "\t"));
      return chat;
    } catch (error) {
      console.log(error);
    }
  };
}
