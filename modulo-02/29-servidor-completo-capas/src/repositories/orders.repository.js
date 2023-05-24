import { orderDao } from "../dao/index.js";

export default class OrderRepository {
  getOrders = async function () {
    try {
      const orders = await orderDao.getOrders();
      return orders;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  getOrderById = async function (id) {
    try {
      const order = await orderDao.getOrderById(id);
      return order;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  createOrder = async function (order) {
    try {
      const result = await orderDao.createOrder(order);
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  resolveOrder = async function (id, status) {
    try {
      const result = await orderDao.resolveOrder(id, status);
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
}
