import { contactDao } from "../dao/factory.js";

export async function get(req, res) {
  const contacts = await contactDao.get();
  return res.send({ status: "success", payload: contacts });
}
