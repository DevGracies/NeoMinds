import express from "express";
import { handleEnrollment } from "../controllers/enrollController.js";

const router = express.Router();

router.post("/", handleEnrollment);

export default router;
