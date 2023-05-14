import { Router } from "express";
import { toyController } from "../controllers/toys.controller.js";

export const toysRouter = Router();

toysRouter.get("/", toyController.getToys);

toysRouter.post("/", toyController.createToy);
