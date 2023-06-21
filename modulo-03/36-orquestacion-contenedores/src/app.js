import express from "express";
import mongoose from "mongoose";
import handlebars from "express-handlebars";
import { faker } from "@faker-js/faker/locale/es";
import { __dirname } from "./utils.js";
import userModel from "./models/user.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());
app.use("/", express.static(`${__dirname}/public`));

app.engine("handlebars", handlebars.engine());
app.set("views", `${__dirname}/views`);
app.set("view engine", "handlebars");

mongoose.connect(process.env.MONGO_URL);

app.get("/", (req, res) => {
  res.render("register");
});

app.post("/api/users/register", async (req, res) => {
  const { first_name, last_name, age, email, password } = req.body;

  const user = {
    first_name,
    last_name,
    age,
    email,
    password,
  };

  const result = await userModel.create(user);
  return res.send({ status: "success", result });
});

const users = [];

app.get("/api/users/test", (req, res) => {
  let user = {};

  for (let i = 0; i < 5; i++) {
    user.id = faker.database.mongodbObjectId();
    user.firstName = faker.person.firstName();
    user.lastName = faker.person.lastName();
    user.email = faker.internet.email();
    user.age = faker.number.int({ max: 95 });

    users.push(user);
  }

  res.send({ status: "success", payload: users });
});

app.listen(8080, () => {
  console.log("Listening on port 8080");
});
