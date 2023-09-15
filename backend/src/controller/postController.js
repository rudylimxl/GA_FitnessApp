import { addPost, getAllPosts } from "../services/postService.js";

async function create(req, res, next) {
  try {
    await addPost(req.body);
    res.send("Post successfully uploaded.");
  } catch (err) {
    console.log(err.message);
    res.send("Error uploading post...");
  }
}

async function index(req, res, next) {
  try {
    //call service that will return all posts
    let allposts = await getAllPosts(req.body.userId);
    res.json(allposts);
  } catch (err) {
    console.log(err.message);
    res.send("Unable to retrieve posts.");
  }
}

export { create, index };
