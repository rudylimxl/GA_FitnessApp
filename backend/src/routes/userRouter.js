import express from "express";
import multer from "multer";
import {
  signup,
  showAll,
  showOne,
  showTrainers,
  update,
} from "../controller/UserController.js";
import passport from "passport";

const userRouter = express.Router();
const upload = multer();

userRouter.get("/", showAll);
userRouter.post("/signup", signup);
userRouter.post("/login", passport.authenticate("local"));
userRouter.get("/trainers", showTrainers);
userRouter.get("/:id", showOne);

// Route to update user profile details
userRouter.put("/:id", upload.single("files"), update);

export default userRouter;
