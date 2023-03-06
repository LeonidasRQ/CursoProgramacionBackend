import express from "express";
import usersRouter from "./routes/users.router.js";
import petsRouter from "./routes/pets.router.js";

const app = express();

app.use(express.json());
app.use(express.static("public"));

app.listen(8080, () => {
  console.log("Listening on port 8080");
});

app.use("/api/pets", petsRouter);
app.use("/api/users", usersRouter);
