import User from "../models/User.js";

const createNewUser = async (user) => {
  try {
    const newUser = new User(user);
    await newUser.save();
  } catch (err) {
    console.log(err);
  }
};

export { createNewUser };
