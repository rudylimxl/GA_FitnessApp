import Posts from "../models/Post.js";

// Add a new post to DB
async function addPost(postDetails) {
  try {
    await Posts.create(postDetails);
  } catch (error) {
    console.log(error);
  }
}

// Get all posts for a specific user from DB
async function getAllPosts(userId) {
  try {
    let allPosts = await Posts.findById(userId).populate("posts");
    return allPosts;
  } catch (error) {
    console.log(error);
  }
}

// Get one post by the post id from DB
async function getOnePost(id) {
  try {
    let post = await Posts.findById(id);
    return post;
  } catch (error) {
    console.log(error);
  }
}

export { addPost, getAllPosts, getOnePost };
