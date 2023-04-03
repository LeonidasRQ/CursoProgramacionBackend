import { chatModel } from "../models/chat.js";

export default class ChatsManager {
  constructor() {}
  getChats = async () => {
    try {
      const chats = await chatModel.find();
      return chats;
    } catch (error) {
      console.log(error);
    }
  };

  createChat = async (chat) => {
    try {
      const createdChat = await chatModel.create(chat);
      return createdChat;
    } catch (error) {
      console.log(error);
    }
  };

  addUser = async (chatId, userId) => {
    try {
      const updatedChat = await chatModel.updateOne(
        { _id: chatId },
        { $addToSet: { users: [userId] } }
      );
      return updatedChat;
    } catch (error) {
      console.log(error);
    }
  };
}
