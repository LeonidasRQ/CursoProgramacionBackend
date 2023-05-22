import { Router } from "express";
import { Contact } from "../dao/memory/contacts.memory.js";
// import { Contact } from "../dao/mongo/contacts.mongo.js";

const router = Router();

const contactsService = new Contact();

router.get("/", async (req, res) => {
  const contacts = await contactsService.get();
  return res.send({ status: "success", payload: contacts });
});

export default router;
