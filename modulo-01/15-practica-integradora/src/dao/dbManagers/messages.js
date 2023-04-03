import { messageModel } from "../models/message.js";

export default class MessagesManager {
  constructor() {}

  getMessages = async () => {
    try {
      const messages = await messageModel.find().lean();
      return messages;
    } catch (error) {
      console.log(error);
    }
  };

  createMessage = async (message) => {
    try {
      const createdMessage = await messageModel.create(message);
      return createdMessage;
    } catch (error) {
      console.log(error);
    }
  };
}
