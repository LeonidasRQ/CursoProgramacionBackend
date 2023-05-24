import { orderService } from "../services/index.js";

export async function getOrders(req, res) {
  const orders = await orderService.getOrders();
  return res.send({ status: "success", result: orders });
}

export async function getOrderById(req, res) {
  const id = req.params.oid;

  const order = await orderService.getOrderById(id);

  if (!order)
    return res
      .status(404)
      .send({ status: "error", error: "order does not exist" });

  return res.send({ status: "success", payload: order });
}

export async function createOrder(req, res) {
  const { userId, businessId, products } = req.body;

  const order = {
    userId,
    businessId,
    products,
  };

  const result = await orderService.createOrder(order);
  return res.send({ status: "success", result });
}

export async function resolveOrder(req, res) {
  const id = req.params.oid;
  const status = req.body;
  const result = await orderService.resolveOrder(id, status);
  return res.send({ status: "success", result });
}
