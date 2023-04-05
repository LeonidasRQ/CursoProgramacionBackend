import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import { userModel } from "./models/users.js";

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;

const environment = async () => {
  await mongoose.connect(
    `mongodb+srv://${dbUser}:${dbPassword}@cluster0.1k06imr.mongodb.net/${dbName}?retryWrites=true&w=majority`
  );
  let response = await userModel
    .find({ first_name: "Celia" })
    .explain("executionStats");
  console.log(response);
};

environment();
