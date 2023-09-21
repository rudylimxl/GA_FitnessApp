import express from "express";
import {
  create,
  getUserData,
  getUsersData,
} from "../controller/UserController.js";

const userRouter = express.Router();

userRouter.post("/signup", create);
userRouter.get("/", getUsersData);
userRouter.get("/:id", getUserData);

export default userRouter;
