import { Router } from "express";
import { studentModel } from "../models/student.model.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const students = await studentModel.find();
    return res.send({ status: "Sucess", payload: students });
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const { nombre, apellido, curso, edad, correo, sexo } = req.body;

    if (!nombre || !apellido || !curso || !edad || !correo || !sexo) {
      return res.status(400).send({ status: "error", error: "missing fields" });
    }

    const student = {
      nombre,
      apellido,
      curso,
      edad,
      correo,
      sexo,
    };

    const result = await studentModel.create(student);
    return res.send({ status: "Success", payload: result });
  } catch (error) {
    console.log(error);
  }
});

router.put("/:sid", async (req, res) => {
  try {
    const { sid } = req.params;
    const studentUpdate = req.body;

    if (!studentUpdate) {
      return res
        .status(400)
        .send({ status: "error", error: "You must specify the updated data" });
    }
    const result = await studentModel.updateOne({ _id: sid }, studentUpdate);
    return res.send({ status: "success", payload: result });
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:sid", async (req, res) => {
  try {
    const { sid } = req.params;

    const result = await studentModel.deleteOne({ _id: sid });
    return res.send({ status: "success", payload: result });
  } catch (error) {
    console.log(error);
  }
});

export default router;
