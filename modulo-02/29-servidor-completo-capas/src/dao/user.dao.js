import { userModel } from "./models/user.model.js";

export default class User {
  getUsers = async function () {
    try {
      const users = await userModel.find();
      return users;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  getUserById = async function (id) {
    try {
      const user = await userModel.findOne({ _id: id });
      return user;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  saveUser = async function (user) {
    try {
      const result = await userModel.create(user);
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
}
