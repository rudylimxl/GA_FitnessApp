import express from "express";
import {
  create,
  getAllUserData,
  getUserData,
} from "../controller/UserController.js";

const userRouter = express.Router();

userRouter.post("/signup", create);
userRouter.get("/allUser", getAllUserData);
userRouter.get("/user/:id", getUserData);

export default userRouter;
