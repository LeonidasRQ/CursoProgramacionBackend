import { Router } from "express";
import {
  getUsers,
  createUser,
  getUserByEmail,
} from "../controllers/users.controller.js";

export const usersRouter = Router();

usersRouter.get("/", getUsers);
usersRouter.post("/", createUser);
usersRouter.get("/:email", getUserByEmail);
