import CustomRouter from "./router.js";

export default class UsersRouter extends CustomRouter {
  init() {
    this.get("/", ["PUBLIC"], (req, res) => {
      res.sendSucess("Hola, coders");
    });

    this.get("/currentUser", ["USER", "USER_PREMIUM"], (req, res) => {
      res.sendSucess(req.user);
    });
  }
}
