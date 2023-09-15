import {
  addPost,
  getAllPosts,
  getOnePost,
  deleteOnePost,
} from "../services/postService.js";

async function create(req, res, next) {
  try {
    await addPost(req.body);
    res.status(201).send("Post successfully uploaded.");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error uploading post.");
  }
}

async function index(req, res, next) {
  try {
    //call service that will return all posts
    let allposts = await getAllPosts(req.body.userId);
    res.json(allposts);
  } catch (err) {
    console.error(err);
    res.status(500).send("Unable to retrieve posts.");
  }
}

async function show(req, res, next) {
  try {
    let onePost = await getOnePost(req.params.id);
    res.json(onePost);
  } catch (err) {
    console.error(err);
    res.status(500).send("Unable to retrieve post.");
  }
}

async function deletePost(req, res, next) {
  try {
    await deleteOnePost(req.params.id);
    res.send("Post successfully deleted.");
  } catch (err) {
    console.error(err);
    res.status(500).send("Unable to delete post.");
  }
}

export { create, index, show, deletePost };
