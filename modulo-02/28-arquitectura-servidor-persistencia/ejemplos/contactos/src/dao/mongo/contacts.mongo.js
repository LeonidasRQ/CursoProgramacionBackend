import { contactModel } from "./models/contacts.js";

export class Contact {
  constructor() {}

  get = async () => {
    const contacts = await contactModel.find();
    return contacts;
  };
}
