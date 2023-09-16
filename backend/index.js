import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "./src/config/mongoDB.js";
import bodyParser from "body-parser";
import userRouter from "./src/routes/userRouter.js";
import postRouter from "./src/routes/postRouter.js";

const app = express();

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use("/", userRouter);
app.use("/posts", postRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`);
});
