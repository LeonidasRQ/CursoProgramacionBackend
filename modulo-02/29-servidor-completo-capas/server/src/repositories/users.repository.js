import { userDao } from "../dao/index.js";

export default class UserRepository {
  getUsers = async function () {
    try {
      const users = await userDao.getUsers();
      return users;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  getUserById = async function (id) {
    try {
      const user = await userDao.getUserById(id);
      return user;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  createUser = async function (user) {
    try {
      const result = await userDao.createUser(user);
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
}
