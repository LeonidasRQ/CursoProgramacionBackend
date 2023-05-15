import { usersService } from "../services/users.service.js";

export function getUsers(req, res) {
  const users = usersService.getUsers();
  return res.send({ status: "success", payload: users });
}

export function createUser(req, res) {
  const user = req.body;
  const createdUser = usersService.createUser(user);

  if (!createdUser) {
    return res
      .status(400)
      .send({ status: "error", error: "email already exists" });
  }

  return res.send({
    status: "success",
    message: "user created",
    payload: createdUser,
  });
}

export function getUserByEmail(req, res) {
  const { email } = req.params;

  const user = usersService.getUserByEmail(email);

  if (!user) {
    return res
      .status(404)
      .send({ status: "error", error: "user does not exists" });
  }

  return res.send({ status: "success", message: "user found", payload: user });
}
