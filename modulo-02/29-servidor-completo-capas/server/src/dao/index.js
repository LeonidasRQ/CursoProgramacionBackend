import BusinessDao from "./business.dao.js";
import UserDao from "./user.dao.js";
import OrderDao from "./order.dao.js";

export const businessDao = new BusinessDao();
export const userDao = new UserDao();
export const orderDao = new OrderDao();
