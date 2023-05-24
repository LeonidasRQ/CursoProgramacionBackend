import { userRepository } from "../repositories/index.js";

export default class UserService {
  getUsers = async function () {
    try {
      const users = await userRepository.getUsers();
      return users;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  getUserById = async function (id) {
    try {
      const user = await userRepository.getUserById(id);
      return user;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  createUser = async function (user) {
    try {
      const result = await userRepository.createUser(user);
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
}
