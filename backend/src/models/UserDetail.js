import mongoose from "mongoose";

// TO EDIT

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
});

const UserDetail = mongoose.model("UserDetail", userDetailSchema);

export default UserDetail;
