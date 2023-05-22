import { Schema, mongoose } from "mongoose";

const contactCollection = "Contacts";

const contactsSchema = new Schema({
  first_name: String,
  last_name: String,
  email: String,
  phone: String,
});

export const contactModel = mongoose.model(contactCollection, contactsSchema);
