import { Router } from "express";
import { generateUser } from "../utils.js";

const router = Router();

router.get("/:role", (req, res) => {
  try {
    const role = req.params.role;

    if (role !== "cliente" && role !== "vendedor") {
      return res.send({ status: "error", error: "role is not valid" });
    }

    let users = [];

    for (let i = 0; i < 100; i++) {
      users.push(generateUser(role));
    }

    return res.send({ status: "success", payload: users });
  } catch (error) {
    console.log(error);
  }
});

export default router;
