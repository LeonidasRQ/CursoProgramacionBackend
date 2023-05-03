import express from "express";
import petsRouter from "./routes/pets.router.js";

const app = express();

app.use(express.json());

app.use("/api/pets", petsRouter);

app.listen(8080, () => {
  console.log("Listening on port 8080");
});
