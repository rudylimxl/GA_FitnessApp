import bodyParser from "body-parser";
import cors from "cors";
import "dotenv/config";
import express from "express";
import connectToDatabase from "./src/config/mongoDB.js";
import postRouter from "./src/routes/postRouter.js";
import userRouter from "./src/routes/userRouter.js";
import passport from "passport";

const app = express();
connectToDatabase();

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
//Routes
app.use("/users", userRouter);
app.use("/posts", postRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`);
});
