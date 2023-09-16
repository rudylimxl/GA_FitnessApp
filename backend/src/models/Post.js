import mongoose from "mongoose";

// TO EDIT

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  tags: [String],
  url: {
    type: String,
    required: true,
  },
  userType: { type: String, enum: ["user", "trainer"], required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "Userdetail" },
});

const Posts = mongoose.model("Post", postSchema);

export default Posts;
