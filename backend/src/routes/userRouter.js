import express from "express";
import create from "../controller/UserController.js";

const userRouter = express.Router();

userRouter.post("/signup", create);

export default userRouter;
