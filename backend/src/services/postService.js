import Posts from "../models/Post.js";

// Add a new post to DB
async function addPost(postDetails) {
  try {
    await Posts.create(postDetails);
  } catch (err) {
    console.log(err);
  }
}

export { addPost };
