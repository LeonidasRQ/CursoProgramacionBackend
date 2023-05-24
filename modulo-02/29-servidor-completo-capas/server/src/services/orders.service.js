import CreateOrderDto from "../dao/dtos/create-order.dto.js";
import {
  orderRepository,
  userRepository,
  businessRepository,
} from "../repositories/index.js";

export default class OrderService {
  getOrders = async function () {
    try {
      const orders = await orderRepository.getOrders();
      return orders;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  getOrderById = async function (id) {
    try {
      const order = await orderRepository.getOrderById(id);
      return order;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  createOrder = async function (order) {
    try {
      const { userId, businessId, products } = order;

      const business = await businessRepository.getBusinessById(businessId);
      if (!business) throw new Error("business does not exist");

      const user = await userRepository.getUserById(userId);
      if (!user) throw new Error("user does not exist");

      const businessHasProduct = products.every((product) =>
        business.products.includes(product)
      );

      if (!businessHasProduct)
        throw new Error("business does not have one of the specified products");

      const orderToCreate = new CreateOrderDto(order);
      const result = await orderRepository.createOrder(orderToCreate);
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  resolveOrder = async function (id, status) {
    try {
      const orderExists = await orderRepository.getOrderById(id);

      if (!orderExists) throw new Error("Order does not exist");

      const result = await orderRepository.resolveOrder(id, status);
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
}
