import mongoose from "mongoose";

const orderCollection = "Orders";

const orderSchema = mongoose.Schema({
  number: Number,
  business: {
    type: mongoose.SchemaType.ObjectId,
    ref: "Businesses",
  },
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Users",
  },
  products: [],
  totalPrice: Number,
});

export const orderModel = mongoose.model(orderCollection, orderSchema);
