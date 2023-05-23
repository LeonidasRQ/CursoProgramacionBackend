export default class ContactRepository {
  constructor(dao) {
    this.dao = dao;
  }

  getContacts = async () => {
    const contacts = await this.dao.getContacts();
    return contacts;
  };

  createContact = async (contact) => {
    const createdContact = await this.dao.createContact(contact);
    return createdContact;
  };
}
