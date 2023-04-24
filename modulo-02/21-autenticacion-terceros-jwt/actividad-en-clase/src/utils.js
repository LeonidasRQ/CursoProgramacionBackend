import { fileURLToPath } from "url";
import { dirname } from "path";
import jwt from "jsonwebtoken";
import config from "./config.js";

const { privateKey } = config;

const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

export const generateToken = (user) => {
  const token = jwt.sign({ user }, privateKey, { expiresIn: 60 });
  return token;
};

export const authToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader)
    return res
      .status(403)
      .send({ status: "error", error: "Authorization Error" });

  const token = authHeader.split(" ")[1];
  jwt.verify(token, privateKey, (error, credentials) => {
    if (error)
      res.status(403).send({ status: "error", error: "Authentication Error" });

    req.user = credentials.user;
    next();
  });
};
