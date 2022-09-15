import express from "express";
import dotenv from "dotenv";
import QuizRouter from "./routes/QuizRoute.js";
import mongoose from "mongoose";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());

const port = process.env.PORT;
const DBclient = process.env.DB;

app.use(express.json());

app.use("/api/quiz", QuizRouter);

app.listen(port, (e) => {
  if (e) return console.log(e);
  console.log(`server running on ${port}`);

  mongoose.connect(DBclient, (e) => {
    if (e) return console.log(e);
    console.log("DB connect successful");
  });
});
