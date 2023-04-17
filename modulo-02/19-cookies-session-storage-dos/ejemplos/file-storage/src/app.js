import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";
import FileStorage from "session-file-store";

const app = express();
const fileStorage = FileStorage(session);

app.use(cookieParser());
app.use(
  session({
    store: new fileStorage({ path: "./sessions", ttl: 100, retries: 0 }),
    secret: "añskgn234",
    resave: true,
    saveUninitialized: true,
  })
);

app.get("/", (req, res) => {
  return res.send({ status: "sucess", payload: "Hello" });
});

app.listen(8080, () => {
  console.log("Listening on port 8080");
});
