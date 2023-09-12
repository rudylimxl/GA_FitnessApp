import mongoose from "mongoose";

// TO EDIT

const postSchema = new mongoose.Schema({
  type: {
    type: String,
  },
  url: {
    type: String,
  },
  userId: {
    type: String,
  },
});

const Posts = mongoose.model("Posts", postSchema);

export default Posts;
