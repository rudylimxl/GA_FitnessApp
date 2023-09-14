import express from "express";
import * as postController from "../controller/postController.js";

const postRouter = express.Router();

// Route to add a post
postRouter.post("/", postController.create);

export default postRouter;
