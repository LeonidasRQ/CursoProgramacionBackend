export async function getBusiness(req, res) {
  res.send({ status: "success", result: "getBusiness" });
}

export async function getBusinessById(req, res) {
  res.send({ status: "success", result: "getBusinessById" });
}

export async function createBusiness(req, res) {
  res.send({ status: "success", result: "createBusiness" });
}

export async function addProduct(req, res) {
  res.send({ status: "success", result: "addProduct" });
}
