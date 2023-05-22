import { Router } from "express";
import { get } from "../controllers/contacts.controller.js";

const router = Router();

router.get("/", get);

export default router;
