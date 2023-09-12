import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "./src/config/mongoDB.js";
import bodyParser from "body-parser";
import userRouter from "./src/routes/userRouter.js";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use("/", userRouter);

app.listen(() => {
  console.log(`Server running on ${process.env.PORT}`);
});
