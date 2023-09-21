import bodyParser from "body-parser";
import cors from "cors";
import "dotenv/config";
import express from "express";
import postRouter from "./src/routes/postRouter.js";
import userRouter from "./src/routes/userRouter.js";

const app = express();

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use("/users", userRouter);
app.use("/posts", postRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`);
});
