import { Router } from "express";
import { getToys, createToy } from "../controllers/toys.controller.js";

export const toysRouter = Router();

toysRouter.get("/", getToys);

toysRouter.post("/", createToy);
