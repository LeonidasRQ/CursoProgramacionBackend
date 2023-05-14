import { Router } from "express";
import { usersController } from "../controllers/users.controller.js";

export const usersRouter = Router();

usersRouter.get("/", usersController.getUsers);
usersRouter.post("/", usersController.createUser);
