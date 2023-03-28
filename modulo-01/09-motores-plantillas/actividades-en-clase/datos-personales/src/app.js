import express from "express";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`));

app.engine("handlebars", handlebars.engine());
app.set("views", `${__dirname}/views`);
app.set("view engine", "handlebars");

const users = [
  {
    name: "Hilda",
    lastName: "Martinez",
    age: 3,
    email: "hilda@gmail.com",
    phone: "312451454",
  },
  {
    name: "Sofía",
    lastName: "Tiburcia",
    age: 22,
    email: "sof@gmail.com",
    phone: "45166415",
  },
  {
    name: "Bruno",
    lastName: "Diaz",
    age: 30,
    email: "bruno@gmail.com",
    phone: "9515154",
  },
  {
    name: "Kanye",
    lastName: "Oeste",
    age: 39,
    email: "kanye@gmail.com",
    phone: "312451454",
  },
  {
    name: "Andrea",
    lastName: "Lazaro",
    age: 15,
    email: "andrea@gmail.com",
    phone: "312451454",
  },
];

app.get("/", (req, res) => {
  const min = 0;
  const max = users.length - 1;
  const randomUser = Math.floor(Math.random() * (max - min + 1) + min);
  res.render("users", users[randomUser]);
});

app.listen(8080, () => {
  console.log("Listening on port 8080");
});
