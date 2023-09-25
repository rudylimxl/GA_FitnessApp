import express from "express";
import * as postController from "../controller/postController.js";
import multer from "multer";
import { uploadFileFn, getFileList } from "../controller/FilesController.js";

const postRouter = express.Router();
const upload = multer();
//Express can't process multipart/form-data request body.
//multer helps as a middleware to process request body.
//calling req.file will give the file included in the request body
//req.body will contain the rest of the form

postRouter.post("/upload", upload.single("files"), uploadFileFn);
postRouter.get("/files", getFileList);

// Route to add a post
postRouter.post("/", upload.single("files"), postController.create);

// Route to get all posts. Need to receive specific user id inside request body
postRouter.get("/", postController.index);

// Route to get a specific post
postRouter.get("/:id", postController.show);

// Route to delete a specific post
postRouter.delete("/:id", postController.deletePost);

// Route to retrieve all commments for a specific post
postRouter.get("/:id/comments", postController.indexComment);

// Route to create a comment for a specific post
postRouter.post(
  "/:id/comments",
  upload.single("files"),
  postController.createComment
);

export default postRouter;
