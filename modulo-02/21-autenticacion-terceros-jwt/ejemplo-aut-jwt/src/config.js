import dotenv from "dotenv";
dotenv.config();

const config = {
  privateKey: process.env.PRIVATE_KEY,
};

export default config;
