import User from "../models/User.js";

const createNewUser = async (userDetails) => {
  try {
    const newUser = new User(userDetails);
    await newUser.save();
  } catch (err) {
    console.log(err);
  }
};

export { createNewUser };
