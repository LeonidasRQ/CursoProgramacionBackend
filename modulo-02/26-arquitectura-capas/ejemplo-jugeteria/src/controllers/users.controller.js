let users = [
  {
    firstName: "Eugenio",
    lastName: "Alvarez",
  },
];

export function getUsers(req, res) {
  res.send(users);
}

export function createUser(req, res) {
  const user = req.body;
  users.push(user);
  res.send({ status: "success", message: "user created", payload: user });
}
