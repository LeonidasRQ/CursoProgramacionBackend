import mongoose from "mongoose";

const userCollection = "User";

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
  },
});

const userModel = mongoose.model(userCollection, userSchema);

export { userModel };
