import dotenv from "dotenv";
dotenv.config();

export const config = {
  port: process.env.PORT,
  dbUrl: process.env.DB_URL,
};
