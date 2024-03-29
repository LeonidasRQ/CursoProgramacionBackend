import express from "express";
import morgan from "morgan";
import cors from "cors";
import { config } from "./config/config.js";
import { routerApi } from "./routes/index.js";
import { connect } from "./mongo.js";

const app = express();

// middlewares
app.use(express.json());
app.use(
  cors({ origin: "http://127.0.0.1:5500", methods: ["GET", "POST", "PUT"] })
);
app.use(morgan("dev"));

// routes
routerApi(app);
connect();

const port = config.port || 8080;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
