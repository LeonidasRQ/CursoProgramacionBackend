import mongoose from "mongoose";

const Schema = mongoose.Schema;

const chatCollection = "Chat";

const chatSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  users: [
    {
      type: Schema.ObjectId,
      ref: "User",
    },
  ],
});

const chatModel = mongoose.model(chatCollection, chatSchema);

export { chatModel };
