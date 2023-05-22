import config from "../config/config.js";
import mongoose from "mongoose";

let contactDao;

switch (config.persistence) {
  case "MONGO":
    const connection = mongoose.connect(config.dbUrl);
    const { contactMongo } = await import("./mongo/contacts.mongo.js");
    contactDao = contactMongo;
    break;

  case "MEMORY":
    const { contactMemory } = await import("./memory/contacts.memory.js");
    contactDao = contactMemory;
    break;
}

export { contactDao };
