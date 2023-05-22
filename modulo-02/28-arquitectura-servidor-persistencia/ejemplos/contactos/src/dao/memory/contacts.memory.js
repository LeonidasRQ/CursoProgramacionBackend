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

  get = () => {
    return this.data;
  };
}

export const contactMemory = new Contact();
