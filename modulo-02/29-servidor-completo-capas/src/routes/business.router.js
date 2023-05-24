import { Router } from "express";
import {
  getBusiness,
  getBusinessById,
  createBusiness,
  addProduct,
} from "../controllers/business.controller.js";

const router = Router();

router.get("/", getBusiness);
router.get("/:bid", getBusinessById);
router.post("/", createBusiness);
router.post("/:bid/product", createBusiness);

export default router;
