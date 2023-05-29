import express from "express";
import nodemailer from "nodemailer";
import __dirname from "./utils.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const transport = nodemailer.createTransport({
  service: process.env.SERVICE,
  port: process.env.PORT,
  auth: {
    user: process.env.USER,
    pass: process.env.PASSWORD,
  },
});

app.get("/mail", async (req, res) => {
  let result = await transport.sendMail({
    from: process.env.USER,
    to: "leonidas.aws@gmail.com",
    subject: "test email with image",
    html: `
    <div>
      <h1>This is a new test with an image!</h1>
    </div>
    `,
    attachments: [
      {
        filename: "esponja.jpg",
        path: `${__dirname}/images/esponja.jpg`,
        cid: "esponja",
      },
    ],
  });

  res.send({ status: "success", result: "Email sent" });
});

app.listen(8080, () => {
  console.log("Listening on port 8080");
});
