import { contactModel } from "./models/contact.js";

class Contact {
  constructor() {}

  getContacts = async () => {
    const contacts = await contactModel.find();
    return contacts;
  };

  createContact = async (contact) => {
    const createdContact = await contactModel.create(contact);
    return createdContact;
  };
}

export const contactMongo = new Contact();
