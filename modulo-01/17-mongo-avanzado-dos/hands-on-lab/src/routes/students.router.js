import { Router } from "express";
import studentModel from "../models/students.js";

const router = Router();

router.get("/", async (req, res) => {
  const { page } = req.query;
  const students = await studentModel.paginate({}, { limit: 5, page: page });
  return res.send({ status: "success", payload: students });
});

export default router;
