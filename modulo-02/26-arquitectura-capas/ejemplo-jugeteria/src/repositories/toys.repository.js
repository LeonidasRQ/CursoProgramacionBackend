const toys = [
  {
    name: "terreneitor",
    price: 250,
  },
];

class ToysRepository {
  constructor() {
    this.toys = toys;
  }

  getToys() {
    return this.toys;
  }

  createToy(toy) {
    this.toys.push(toy);
    return toy;
  }
}

export const toysRepository = new ToysRepository();
