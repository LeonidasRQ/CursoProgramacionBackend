import { contactRepository } from "../repositories/index.js";
import ContactDTO from "../daos/dtos/contact.dto.js";

export default class ContactService {
  constructor() {}

  getContacts = async () => {
    const contacts = await contactRepository.getContacts();
    return contacts;
  };

  createContact = async (contact) => {
    const contactToSave = new ContactDTO(contact);
    const result = await contactRepository.createContact(contactToSave);
    return result;
  };
}
