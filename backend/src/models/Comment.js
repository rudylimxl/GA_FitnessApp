import mongoose from "mongoose";

// TO EDIT

const commentSchema = new mongoose.Schema({
  date: {
    type: Date,
  },
  userId: {
    type: String,
  },
  comment: {
    type: String,
  },
});

const Comments = mongoose.model("Comments", commentSchema);

export default Comments;
