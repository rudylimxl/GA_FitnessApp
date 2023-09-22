import express from "express";
import multer from "multer";
import {
  create,
  showAll,
  showOne,
  showTrainers,
  update,
} from "../controller/UserController.js";

const userRouter = express.Router();
const upload = multer();

userRouter.get("/", showAll);
userRouter.post("/signup", create);
userRouter.get("/trainers", showTrainers);
userRouter.get("/:id", showOne);

// Route to update user profile details
userRouter.put("/:id", upload.single("files"), update);

export default userRouter;
