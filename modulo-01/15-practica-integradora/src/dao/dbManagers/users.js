import { userModel } from "../models/user.js";

export default class UserManager {
  constructor() {}
  getUsers = async () => {
    try {
      const users = await userModel.find();
      return users;
    } catch (error) {
      console.log(error);
    }
  };

  createUser = async (user) => {
    try {
      const userCreated = await userModel.create(user);
      return userCreated;
    } catch (error) {
      console.log(error);
    }
  };
}
