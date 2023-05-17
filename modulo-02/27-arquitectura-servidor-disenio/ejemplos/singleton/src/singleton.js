import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export class MongoConnection {
  static #instance;
  constructor() {
    this.mongoDb = mongoose.connect(process.env.DB_URL);
  }

  static getInstance() {
    if (this.#instance) {
      console.log("You're already connected to the database");
      return this.#instance;
    }
    this.#instance = new MongoConnection();
    console.log("Connected");
    return this.#instance;
  }
}
