import BusinessRepository from "./businesses.repository.js";
import UserRepository from "./users.repository.js";
import OrderRepository from "./orders.repository.js";

export const businessRepository = new BusinessRepository();
export const userRepository = new UserRepository();
export const orderRepository = new OrderRepository();
