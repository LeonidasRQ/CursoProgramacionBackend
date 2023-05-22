import dotenv from "dotenv";
dotenv.config();

export default {
  persistence: process.env.PERSISTENCE,
  dbUrl: process.env.DB_URL,
};
