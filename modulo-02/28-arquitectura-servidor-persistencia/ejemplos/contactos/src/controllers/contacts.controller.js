import ContactDTO from "../dao/dtos/contact.dto.js";
import { contactDao } from "../dao/factory.js";

export async function get(req, res) {
  const contacts = await contactDao.get();
  return res.send({ status: "success", payload: contacts });
}

export async function create(req, res) {
  const { first_name, last_name, email, phone } = req.body;

  const contact = new ContactDTO({ first_name, last_name, email, phone });
  const result = await contactDao.create(contact);
  return res.send({ status: "success", payload: contact });
}
