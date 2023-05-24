export async function getUsers(req, res) {
  res.send({ status: "success", result: "getUsers" });
}

export async function getUserById(req, res) {
  res.send({ status: "success", result: "getUserById" });
}

export async function createUser(req, res) {
  res.send({ status: "success", result: "createUser" });
}
