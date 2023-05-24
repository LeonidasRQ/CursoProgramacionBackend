import mongoose from "mongoose";
import { config } from "./config/config.js";

export function connect() {
  mongoose.connect(config.dbUrl);
}
