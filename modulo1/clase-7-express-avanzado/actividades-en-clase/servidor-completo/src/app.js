const express = require("express");

const app = express();

const server = app.listen(8080, (req, res) => {
  console.log("Listening on port 8080");
});

app.use(express.json());
