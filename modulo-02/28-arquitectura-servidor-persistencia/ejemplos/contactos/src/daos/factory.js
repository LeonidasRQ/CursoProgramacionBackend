import mongoose from "mongoose";
import config from "../config/config.js";

export let contactDAO;

switch (config.persistence) {
  case "MONGO":
    mongoose.connect(config.dbUrl);
    const { contactMongo } = await import("./mongo/contacts.mongo.js");
    contactDAO = contactMongo;
    break;

  case "MEMORY":
    const { contactMemory } = await import("./memory/contacts.memory.js");
    contactDAO = contactMemory;
    break;
}
