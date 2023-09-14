import express from "express";
import {
  create,
  getUsersData,
  getUserData,
} from "../controller/UserController.js";

const userRouter = express.Router();

userRouter.post("/signup", create);
userRouter.get("/users", getUsersData);
userRouter.get("/user/:id", getUserData);

export default userRouter;
