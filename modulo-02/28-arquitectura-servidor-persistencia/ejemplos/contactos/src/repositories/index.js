import { contactDAO } from "../daos/factory.js";
import ContactRepository from "./contacts.repository.js";

export const contactRepository = new ContactRepository(contactDAO);
