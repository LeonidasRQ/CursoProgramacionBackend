import BusinessService from "./businesses.service.js";
import UserService from "./users.service.js";
import OrderService from "./orders.service.js";

export const businessService = new BusinessService();
export const usersService = new UserService();
export const orderService = new OrderService();
