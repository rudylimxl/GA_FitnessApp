import User from "../models/User.js";

const createNewUser = async (user, userDetailId) => {
  try {
    const newUser = new User(user);
    newUser.userDetail = userDetailId;
    await newUser.save();
  } catch (err) {
    console.log(err);
  }
};

const getUsers = async () => {
  try {
    const users = await User.find({});
    return users;
  } catch (err) {
    console.log(err);
  }
};

const getUser = async (id) => {
  try {
    const user = await User.findById(id).populate("userDetail");
    return user;
  } catch (err) {
    console.log(err);
  }
};

export { createNewUser, getUser, getUsers };
