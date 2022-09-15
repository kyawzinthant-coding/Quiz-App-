import express from "express";
import { getQuiz, createQuiz } from "../controllers/QuizController.js";

const router = express.Router();

router.get("/", getQuiz);

router.post("/", createQuiz);

export default router;
