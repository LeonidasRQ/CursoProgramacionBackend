import { contactModel } from "./models/contacts.js";

class Contact {
  constructor() {}

  get = async () => {
    const contacts = await contactModel.find();
    return contacts;
  };
}

export const contactMongo = new Contact();
