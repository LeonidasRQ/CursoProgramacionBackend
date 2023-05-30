import express from "express";
import nodemailer from "nodemailer";
import twilio from "twilio";
import __dirname from "./utils.js";
import config from "./config.js";

const app = express();

const {
  nodemailerConfig: { service, port, user, password },
  twilioConfig: { accountSid, authToken, phoneNumber },
} = config;

// NODEMAILER
const transport = nodemailer.createTransport({
  service,
  port,
  auth: {
    user,
    password,
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

/////////////////////////////////////////////////////////
// TWILIO
const client = twilio(accountSid, authToken);

app.get("/sms", async (req, res) => {
  await client.messages.create({
    body: "Esto es un mensaje SMS",
    from: phoneNumber,
    to: "+573166845456",
  });
  res.send({ status: "success", message: "message sent" });
});

app.listen(8080, () => {
  console.log("Listening on port 8080");
});
