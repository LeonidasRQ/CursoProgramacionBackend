import ContactService from "../services/contacts.service.js";

const contactService = new ContactService();

export async function getContacts(req, res) {
  const contacts = await contactService.getContacts();
  return res.send({ status: "success", payload: contacts });
}

export async function createContact(req, res) {
  const { first_name, last_name, email, phone } = req.body;

  const contact = {
    first_name,
    last_name,
    email,
    phone,
  };

  const createdContact = await contactService.createContact(contact);

  return res.send({ status: "success", payload: createdContact });
}
