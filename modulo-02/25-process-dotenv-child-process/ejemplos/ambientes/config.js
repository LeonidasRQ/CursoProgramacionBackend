import dotenv from "dotenv";

const environment = "PRODUCTION";

dotenv.config({
  path:
    environment === "PRODUCTION" ? "./.env.production" : "./.env.development",
});

const config = {
  port: process.env.PORT,
  dbUrl: process.env.DB_URL,
  adminUser: process.env.ADMIN_USER,
  adminPassword: process.env.ADMIN_PASSWORD,
};

export default config;
