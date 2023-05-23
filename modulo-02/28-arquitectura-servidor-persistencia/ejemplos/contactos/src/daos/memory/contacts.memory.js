class Contact {
  constructor() {
    this.data = [
      {
        first_name: "el",
        last_name: "barto",
        email: "elbarto@correo.com",
      },
    ];
  }

  getContacts = () => {
    return this.data;
  };

  createContact = (contact) => {
    this.data.push(contact);
    return contact;
  };
}

export const contactMemory = new Contact();
