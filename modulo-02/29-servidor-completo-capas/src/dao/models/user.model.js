import mongoose from "mongoose";

const userCollection = "Users";

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  role: String,
  orders: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Orders",
    },
  ],
});

export const userModel = mongoose.model(userCollection, userSchema);
