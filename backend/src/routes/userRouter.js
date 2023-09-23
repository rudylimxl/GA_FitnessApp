import express from "express";
import {
  signup,
  showAll,
  showOne,
  showTrainers,
} from "../controller/UserController.js";
import passport from "passport";

const userRouter = express.Router();

userRouter.get("/", showAll);
userRouter.post("/signup", signup);
userRouter.post("/login", passport.authenticate("local"));
userRouter.get("/trainers", showTrainers);
userRouter.get("/:id", showOne);

export default userRouter;
