let users = [
  {
    firstName: "Eugenio",
    lastName: "Alvarez",
  },
];

export const usersController = {
  getUsers(req, res) {
    res.send(users);
  },
  createUser(req, res) {
    const user = req.body;
    users.push(user);
    res.send({ status: "success", message: "user created", payload: user });
  },
};
