import fs from "fs";
import __dirname from "../../utils.js";

export default class UserManager {
  constructor() {
    this.path = `${__dirname}/files/Users.json`;
  }

  getUsers = async () => {
    try {
      if (fs.existsSync(this.path)) {
        const usersString = await fs.promises.readFile(this.path, "utf-8");
        const users = JSON.parse(usersString);
        return users;
      } else {
        return [];
      }
    } catch (error) {
      console.log(error);
    }
  };

  getUserById = async (id) => {
    try {
      const users = await this.getUsers();
      const user = users.find((user) => user.id == id);
      if (!user) throw new Error("user does not exists");
      return user;
    } catch (error) {
      console.log(error);
    }
  };

  createUser = async (user) => {
    try {
      const users = await this.getUsers();
      user.id = users.length === 0 ? 1 : users[users.length - 1].id + 1;
      users.push(user);
      await fs.promises.writeFile(this.path, JSON.stringify(users, null, "\t"));
      return user;
    } catch (error) {
      console.log(error);
    }
  };
}
