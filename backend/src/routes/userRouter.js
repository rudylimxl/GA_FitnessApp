import express from "express";
import multer from "multer";
import {
  create,
  getUserData,
  update,
  getUsersData,
} from "../controller/UserController.js";

const userRouter = express.Router();
const upload = multer();

userRouter.post("/signup", create);
userRouter.get("/", getUsersData);
userRouter.get("/:id", getUserData);

// Route to update user profile details
userRouter.put("/user/:id", upload.single("files"), update);

export default userRouter;
