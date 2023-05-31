import express from "express";
import usersRouter from "./routes/users.router.js";

const app = express();

app.use(express.json());

app.use("/api/v1/users", usersRouter);

app.listen(8080, () => {
  console.log("Listening on port 8080");
});
