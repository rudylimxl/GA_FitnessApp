import { addPost } from "../services/postService.js";

async function create(req, res, next) {
  try {
    await addPost(req.body);
    res.send("Post successfully uploaded.");
  } catch (err) {
    console.log(err.message);
    res.send("Error uploading post...");
  }
}

export { create };
