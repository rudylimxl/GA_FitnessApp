import express from "express";
import * as postController from "../controller/postController.js";
import multer from "multer";
import { uploadFileFn, getFileList } from "../controller/FilesController.js";

const postRouter = express.Router();
const upload = multer();

postRouter.post("/upload", upload.single("files"), uploadFileFn);
postRouter.get("/files", getFileList);

// Route to add a post
postRouter.post("/", postController.create);

// Route to get all posts. Need to receive specific user id inside request body
postRouter.get("/", postController.index);

// Route to get a specific post
postRouter.get("/:id", postController.show);

// Route to delete a specific post
postRouter.delete("/:id", postController.deletePost);

// Route to retrieve all commments for a specific post
postRouter.get("/:id/comments", postController.indexComment);

// Route to create a comment for a specific post
postRouter.post("/:id/comments", postController.createComment);

export default postRouter;
