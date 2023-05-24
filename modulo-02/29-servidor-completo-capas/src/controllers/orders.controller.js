export async function getOrders(req, res) {
  res.send({ status: "success", result: "getOrders" });
}

export async function getOrderById(req, res) {
  res.send({ status: "success", result: "getOrderById" });
}

export async function createOrder(req, res) {
  res.send({ status: "success", result: "createOrder" });
}

export async function resolveOrder(req, res) {
  res.send({ status: "success", result: "resolveOrder" });
}
