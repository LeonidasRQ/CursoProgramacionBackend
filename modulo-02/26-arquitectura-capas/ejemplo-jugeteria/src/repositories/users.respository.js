let users = [
  {
    firstName: "Eugenio",
    lastName: "Alvarez",
    email: "eugenio@correo.com",
  },
];

class UsersRepository {
  constructor() {
    this.users = users;
  }

  getUsers() {
    return this.users;
  }

  createUser(user) {
    this.users.push(user);
    return user;
  }

  getUserByEmail(email) {
    const user = this.users.find((user) => user.email === email);
    return user;
  }
}

export const userRepository = new UsersRepository();
