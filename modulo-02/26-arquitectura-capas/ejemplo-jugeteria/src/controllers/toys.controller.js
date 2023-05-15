import { toysService } from "../services/toys.service.js";

export function getToys(req, res) {
  const toys = toysService.getToys();
  return res.send({ status: "success", payload: toys });
}

export function createToy(req, res) {
  const toy = req.body;
  const createdToy = toysService.createToy(toy);
  return res.send({
    status: "success",
    message: "toy created",
    payload: createdToy,
  });
}
