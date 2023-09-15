import Posts from "../models/Post.js";

// Add a new post to DB
async function addPost(postDetails) {
  try {
    await Posts.create(postDetails);
  } catch (error) {
    throw error;
  }
}

// Get all posts for a specific user from DB
async function getAllPosts(userId) {
  try {
    let allPosts = await Posts.findById(userId).populate("posts");
    return allPosts;
  } catch (error) {
    throw error;
  }
}

// Get one post by the post id from DB
async function getOnePost(id) {
  try {
    let post = await Posts.findById(id);
    return post;
  } catch (error) {
    throw error;
  }
}

// Delete a specific post from DB
async function deleteOnePost(id) {
  try {
    await Posts.findByIdAndDelete(id);
  } catch (error) {
    throw error;
  }
}

// Add a new comment for a specific post to DB
async function addNewComment(id, commentInfo) {
  try {
    const post = await Posts.findById(id);
    post.comments.push(commentInfo);
    await post.save();
  } catch (error) {
    throw error;
  }
}

export { addPost, getAllPosts, getOnePost, deleteOnePost, addNewComment };
