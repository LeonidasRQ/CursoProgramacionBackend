import express from "express";
import contactsRouter from "./routes/contacts.router.js";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const app = express();

app.use(express.json());

const connection = mongoose.connect(process.env.DB_URL);

app.listen(8080, () => {
  console.log("Listening on port 8080");
});

app.use("/api/contacts", contactsRouter);
