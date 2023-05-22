import { Router } from "express";
import { create, get } from "../controllers/contacts.controller.js";

const router = Router();

router.get("/", get);
router.post("/", create);

export default router;
