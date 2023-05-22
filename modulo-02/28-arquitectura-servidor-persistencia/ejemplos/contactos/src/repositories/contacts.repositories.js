import ContactDTO from "../dao/dtos/contact.dto.js";

export default class ContactRepository {
  constructor(dao) {
    this.dao = dao;
  }

  get = async () => {
    const contacts = await this.dao.get();
    return contacts;
  };

  create = async (contact) => {
    const contactToInsert = new ContactDTO(contact);
    const createdContact = await this.dao.create(contactToInsert);
    return createdContact;
  };
}
