import { Router } from "express";
import { userModel } from "../models/user.model.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    let users = await userModel.find();
    res.send({ status: "Success", payload: users });
  } catch (error) {
    console.log(`Cannot get users with mongoose ${error}`);
  }
});

router.post("/", async (req, res) => {
  try {
    let { first_name, last_name, email } = req.body;

    if (!first_name || !last_name || !email) {
      return res.send({ status: "Error", error: "Incomplete values" });
    }

    let result = await userModel.create({
      first_name,
      last_name,
      email,
    });

    res.send({ status: "Success", payload: result });
  } catch (error) {
    console.log(error);
  }
});

router.put("/:uid", async (req, res) => {
  try {
    const { uid } = req.params;
    const userToReplace = req.body;

    if (!userToReplace) {
      return res.send({ status: "error", error: "Incomplete values" });
    }

    const result = await userModel.updateOne({ _id: uid }, userToReplace);
    return res.send({ status: "success", payload: result });
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:uid", async (req, res) => {
  try {
    const { uid } = req.params;

    let result = await userModel.deleteOne({ _id: uid });
    if (!result) {
      return res.status(404).send({
        status: "error",
        error: "Could not delete student. No student found in the database",
      });
    }
    res.send({ status: "Success", payload: result });
  } catch (error) {
    console.log(error);
  }
});

export default router;
