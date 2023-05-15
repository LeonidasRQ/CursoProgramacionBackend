import { userRepository } from "../repositories/users.respository.js";

class UserService {
  constructor() {}

  getUsers() {
    try {
      const users = userRepository.getUsers();
      return users;
    } catch (error) {
      console.log(error);
    }
  }

  createUser(user) {
    try {
      const userExists = userRepository.getUserByEmail(user.email);
      if (userExists) {
        return null;
      }
      const createdUser = userRepository.createUser(user);
      return createdUser;
    } catch (error) {
      console.log(error);
    }
  }

  getUserByEmail(email) {
    try {
      const user = userRepository.getUserByEmail(email);
      return user;
    } catch (error) {
      console.log(error);
    }
  }
}

export const usersService = new UserService();
