import express from "express";
import UsersRouter from "./routes/users.js";

const app = express();

app.use(express.json());

app.listen(8080, () => {
  console.log("Listening on port 8080");
});

const usersRouter = new UsersRouter();
app.use("/users", usersRouter.getRouter());
