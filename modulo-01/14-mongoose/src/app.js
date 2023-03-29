import express from "express";
import usersRouter from "./routes/users.router.js";
import studentRouter from "./routes/student.router.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 8080;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;

const server = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

mongoose.connect(
  `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.1k06imr.mongodb.net/?retryWrites=true&w=majority`
);

app.use("/api/users", usersRouter);
app.use("/api/students", studentRouter);
