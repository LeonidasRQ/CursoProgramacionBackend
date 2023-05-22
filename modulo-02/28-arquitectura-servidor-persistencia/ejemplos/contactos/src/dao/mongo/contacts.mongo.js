import { contactModel } from "./models/contacts.js";

class Contact {
  constructor() {}

  get = async () => {
    const contacts = await contactModel.find();
    return contacts;
  };

  create = async (contact) => {
    const createdContact = await contactModel.create();
    return createdContact;
  };
}

export const contactMongo = new Contact();
