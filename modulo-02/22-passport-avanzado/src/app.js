import express from "express";
import jwt from "jsonwebtoken";

const app = express();

app.use(express.json());
app.use(express.static("./src/public"));

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "leo@correo" && password === "123") {
    let token = jwt.sign({ email, password }, "coderKey", { expiresIn: "24h" });
    return res.send({ status: "sucess", token });
  }
});

app.listen(8080, () => {
  console.log("Listening on port 8080");
});
