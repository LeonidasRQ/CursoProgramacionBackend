import { usersService } from "../services/index.js";

export async function getUsers(req, res) {
  const users = await usersService.getUsers();
  return res.send({ status: "success", payload: users });
}

export async function getUserById(req, res) {
  const id = req.params.uid;

  const user = await usersService.getUserById(id);

  if (!user)
    return res
      .status(404)
      .send({ status: "error", error: "user does not exist" });

  return res.send({ status: "success", payload: user });
}

export async function createUser(req, res) {
  const { name, email, role } = req.body;

  const user = {
    name,
    email,
    role,
  };

  const result = await usersService.createUser(user);

  return res.send({ status: "success", result });
}
