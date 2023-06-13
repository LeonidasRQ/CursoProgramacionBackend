import express from "express";
import CustomError from "./errors/CustomError.js";
import { errorMiddleware } from "./errors/error.middleware.js";
import { ErrorsName, ErrorsCause, ErrorsMessage } from "./errors/error.enum.js";
const app = express();

app.get("/users", (req, res) => {
  CustomError.generateCustomError({
    name: ErrorsName.PRINCIPAL_ERROR_NAME,
    message: ErrorsMessage.AUTHENTICATION_ERROR_MESSAGE,
    cause: ErrorsCause.AUTHENTICATION_ERROR_CAUSE,
  });
});

app.get("/products", (req, res) => {
  CustomError.generateCustomError({
    name: ErrorsName.PRINCIPAL_ERROR_NAME,
    message: ErrorsMessage.PRODUCT_ERROR_MESSAGE,
    cause: ErrorsCause.PRODUCT_ERROR_CAUSE,
  });
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log("Listening on port 8080");
});
