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

export { createNewUser };
