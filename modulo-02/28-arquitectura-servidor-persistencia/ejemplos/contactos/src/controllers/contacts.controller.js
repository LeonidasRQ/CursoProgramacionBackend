import { contactService } from "../repositories/index.js";

export async function get(req, res) {
  const contacts = await contactService.get();
  return res.send({ status: "success", payload: contacts });
}

export async function create(req, res) {
  const { first_name, last_name, email, phone } = req.body;

  const contact = {
    first_name,
    last_name,
    email,
    phone,
  };

  const result = await contactService.create(contact);
  return res.send({ status: "success", payload: result });
}
