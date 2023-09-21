import express from "express";
import { create, index, show } from "../controller/UserController.js";

const userRouter = express.Router();

userRouter.post("/signup", create);
userRouter.get("/", index);
userRouter.get("/:id", show);

export default userRouter;
