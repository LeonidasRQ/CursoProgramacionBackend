import express from "express";
import contactsRouter from "./routes/contacts.router.js";

const app = express();

app.use(express.json());

app.listen(8080, () => {
  console.log("Listening on port 8080");
});

app.use("/api/contacts", contactsRouter);
