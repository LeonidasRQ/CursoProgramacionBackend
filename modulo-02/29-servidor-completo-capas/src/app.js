import express from "express";
import morgan from "morgan";
import { config } from "./config/config.js";
import { routerApi } from "./routes/index.js";

const app = express();

// middlewares
app.use(express.json());
app.use(morgan("dev"));

// routes
routerApi(app);

const port = config.port || 8080;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
