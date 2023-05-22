import { contactDao } from "../dao/factory.js";
import ContactRepository from "./contacts.repositories.js";

export const contactService = new ContactRepository(contactDao);
