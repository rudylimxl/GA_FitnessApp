import {
  addPost,
  getAllPosts,
  getOnePost,
  deleteOnePost,
  addNewComment,
  getAllComments,
} from "../services/postService.js";

async function create(req, res, next) {
  try {
    await addPost(req.body);
    res.status(201).send("Post successfully uploaded.");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error uploading post.");
  }
}

async function index(req, res, next) {
  try {
    //call service that will return all posts
    let allposts = await getAllPosts(req.body.userId);
    res.json(allposts);
  } catch (error) {
    console.error(error);
    res.status(500).send("Unable to retrieve posts.");
  }
}

async function show(req, res, next) {
  try {
    let onePost = await getOnePost(req.params.id);
    res.json(onePost);
  } catch (error) {
    console.error(error);
    res.status(500).send("Unable to retrieve post.");
  }
}

async function deletePost(req, res, next) {
  try {
    await deleteOnePost(req.params.id);
    res.send("Post successfully deleted.");
  } catch (error) {
    console.error(error);
    res.status(500).send("Unable to delete post.");
  }
}

async function createComment(req, res, next) {
  try {
    await addNewComment(req.params.id, req.body);
    res.status(201).send("Comment added.");
  } catch (error) {
    console.error(error);
    res.status(500).send("Unable to add comment.");
  }
}

async function indexComment(req, res, next) {
  try {
    let allComments = await getAllComments(req.params.id);
    res.json(allComments);
  } catch (error) {
    console.error(error);
    res.status(500).send("Unable to get comments.");
  }
}

export { create, index, show, deletePost, createComment, indexComment };
