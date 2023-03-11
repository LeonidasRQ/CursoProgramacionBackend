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

let testUser = {
  name: "Hilda",
  lastName: "Martinez",
};

app.get("/", (req, res) => {
  res.render("index", testUser);
});

app.listen(8080, () => {
  console.log("listening on port 8080");
});
