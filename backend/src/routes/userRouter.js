import express from "express";
import { create } from "../controller/userController";

const userRouter = express.Router();

userRouter.post("/signup", create);

export default userRouter;
