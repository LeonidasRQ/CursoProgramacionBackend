import mongoose from "mongoose";

const orderCollection = "Orders";

const orderSchema = new mongoose.Schema({
  number: Number,
  business: {
    type: mongoose.Schema.ObjectId,
    ref: "Businesses",
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "Users",
  },
  products: [],
  status: {
    type: String,
    default: "pending",
  },
});

export const orderModel = mongoose.model(orderCollection, orderSchema);
