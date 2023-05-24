import { orderModel } from "./models/order.model.js";

export default class Order {
  getOrders = async function () {
    try {
      const orders = await orderModel.find();
      return orders;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  getOrderById = async function (id) {
    try {
      const order = await orderModel.findOne({ _id: id });
      return order;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  saveOrder = async function (order) {
    try {
      const result = await orderModel.create(order);
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
}
