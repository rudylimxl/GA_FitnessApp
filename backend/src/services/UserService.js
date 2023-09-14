import User from "../models/User.js";

const createNewUser = async (userDetails) => {
  try {
    const newUser = new User(userDetails);
    await newUser.save();
  } catch (err) {
    console.log(err);
  }
};

export { createNewUser, getAllUser, getUser };

const getAllUser = async () => {
  try {
    const allUser = await User.find({});
    return allUser;
  } catch (err) {
    console.log(err);
  }
};

const getUser = async (id) => {
  try {
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
  }
};
