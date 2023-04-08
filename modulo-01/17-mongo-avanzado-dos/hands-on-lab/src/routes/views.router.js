import { Router } from "express";
import studentsModel from "../models/students.js";

const router = Router();

router.get("/", async (req, res) => {
  const { page = 1 } = req.query;
  const {
    docs: students,
    hasPrevPage,
    hasNextPage,
    nextPage,
    prevPage,
  } = await studentsModel.paginate({}, { limit: 10, page, lean: true });

  return res.render("students", {
    students,
    page,
    hasPrevPage,
    hasNextPage,
    prevPage,
    nextPage,
  });
});

export default router;
