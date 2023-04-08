import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const orderCollection = "orders";

const orderSchema = mongoose.Schema({
  flavor: String,
  size: {
    type: String,
    enum: ["small", "medium", "large"],
    default: "medium",
  },
  price: Number,
  quantity: Number,
  date: Date,
});
orderSchema.plugin(mongoosePaginate);

const orderModel = mongoose.model(orderCollection, orderSchema);

export default orderModel;
