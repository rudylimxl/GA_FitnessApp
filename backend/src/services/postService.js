import Posts from "../models/Post.js";

// Add a new post to DB
async function addPost(postDetails) {
  try {
    await Posts.create(postDetails);
  } catch (err) {
    console.log(err);
  }
}

// Get all posts for a specific user from DB
async function getAllPosts(userId) {
  try {
    let allPosts = await Posts.findById(userId).populate("posts");
    return allPosts;
  } catch (err) {
    console.log(err);
  }
}

export { addPost, getAllPosts };
