import User from "../models/User.js";
import UserDetail from "../models/UserDetail.js";

const createNewUser = async (user, userDetailId) => {
  try {
    const newUser = new User(user);
    newUser.userDetail = userDetailId;
    await newUser.save();
  } catch (err) {
    console.log(err);
  }
};

const getUserDetails = async () => {
  try {
    const userDetails = await UserDetail.find({});
    return userDetails;
  } catch (err) {
    console.log(err);
  }
};

const getUserDetail = async (id) => {
  try {
    const user = await UserDetail.findById(id);
    return user;
  } catch (err) {
    console.log(err);
  }
};

const getTrainers = async () => {
  try {
    const trainers = await UserDetail.find({ userType: "Trainer" });
    console.log(trainers);
    return trainers;
  } catch (err) {
    console.log(err);
  }
};
export { createNewUser, getUserDetails, getUserDetail, getTrainers };
