import express from "express";
import {
  create,
  showAll,
  showOne,
  showTrainers,
} from "../controller/UserController.js";

const userRouter = express.Router();

userRouter.get("/", showAll);
userRouter.post("/signup", create);
userRouter.get("/trainers", showTrainers);
userRouter.get("/:id", showOne);

export default userRouter;
