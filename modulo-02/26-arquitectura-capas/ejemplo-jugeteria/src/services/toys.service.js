import { toysRepository } from "../repositories/toys.repository.js";

class ToysService {
  constructor() {}

  getToys() {
    const toys = toysRepository.getToys();
    return toys;
  }

  createToy(toy) {
    const createdToy = toysRepository.createToy(toy);
    return createdToy;
  }
}

export const toysService = new ToysService();
