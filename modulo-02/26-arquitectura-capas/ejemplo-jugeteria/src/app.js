import express from "express";
import { routerApi } from "./routers/index.js";

const app = express();

app.use(express.json());

routerApi(app);

app.listen(8080, () => {
  console.log("Listening on port 8080");
});
