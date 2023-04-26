import express from "express";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import initializePassport from "./passport.js";
import passport from "passport";

const app = express();

app.use(express.json());
app.use(express.static("./src/public"));
app.use(cookieParser());
initializePassport();
app.use(passport.initialize());

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "leo@correo" && password === "123") {
    let token = jwt.sign({ email, password }, "coderKey", { expiresIn: "24h" });
    return res
      .cookie("tokenCookie", token, { httpOnly: true })
      .send({ status: "sucess", token });
  }
});

app.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.send(req.user);
  }
);

app.listen(8080, () => {
  console.log("Listening on port 8080");
});
