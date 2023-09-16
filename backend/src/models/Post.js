import mongoose from "mongoose";

// Comments subdocument schema
const commentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "UserDetail" },
  comment: { type: String, required: true },
  date: { type: Date, default: new Date() },
});

// Posts collection
const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  tags: [String],
  url: {
    type: String,
    required: true,
  },
  date: { type: Date, default: new Date() },
  userType: { type: String, enum: ["user", "trainer"], required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "UserDetail" },
  comments: [commentSchema],
});

const Posts = mongoose.model("Post", postSchema);

export default Posts;
