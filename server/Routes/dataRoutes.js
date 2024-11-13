// dataRoutes.js

import express from "express";
import {
  instructor,
  instructorById,
  researchById,
  research,
} from "../Controllers/authController.js"; // Named import

const router = express.Router();

router.post("/instructor", instructor);
router.get("/instructor/:id", instructorById);
router.post("/research", research);
router.get("/research/:id", researchById);
export default router;
