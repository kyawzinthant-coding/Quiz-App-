import QuizModel from "../models/QuizModel.js";

export const getQuiz = async (req, res) => {
  const quiz = await QuizModel.find({}, { _id: 1, question: 1, answers: 1 });
  res.status(200).json({
    status: "success",
    // results: quiz.length,
    data: {
      quiz,
    },
  });
};

export const createQuiz = async (req, res) => {
  const quiz = new QuizModel(req.body);
  await quiz.save();
  res.status(200).json(quiz);
};
