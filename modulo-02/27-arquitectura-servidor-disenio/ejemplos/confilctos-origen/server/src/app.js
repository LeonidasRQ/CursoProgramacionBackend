import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(8080, () => {
  console.log("Listening on port 8080");
});

app.get("/test", (req, res) => {
  return res.send({ payload: "respuesta!" });
});
