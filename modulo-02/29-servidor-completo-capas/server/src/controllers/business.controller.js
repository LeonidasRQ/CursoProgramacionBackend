import { businessService } from "../services/index.js";

export async function getBusiness(req, res) {
  const businesses = await businessService.getBusinesses();
  return res.send({ status: "success", result: businesses });
}

export async function getBusinessById(req, res) {
  const id = req.params.bid;

  const business = await businessService.getBusinessById(id);

  if (!business)
    return res
      .status(404)
      .send({ status: "error", error: "business does not exist" });

  return res.send({ status: "success", payload: business });
}

export async function createBusiness(req, res) {
  const { name, products } = req.body;

  const business = {
    name,
    products,
  };

  const result = await businessService.createBusiness(business);
  return res.send({ status: "success", result });
}

export async function addProduct(req, res) {
  const businessId = req.params.bid;
  const { product } = req.body;

  const result = await businessService.addProduct(businessId, product);

  if (!result)
    return res
      .status(404)
      .send({ status: "error", error: "business was not found" });

  return res.send({ status: "success", result });
}
