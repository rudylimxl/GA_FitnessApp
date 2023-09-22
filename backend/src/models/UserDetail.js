import mongoose from "mongoose";

const userDetailSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  gender: {
    type: String,
  },
  userType: {
    type: String,
    required: [true, "Select a user type"],
  },
  bio: {
    type: String,
  },
  avatarUrl: {
    type: String,
  },
});

const UserDetail = mongoose.model("UserDetail", userDetailSchema);

export default UserDetail;
