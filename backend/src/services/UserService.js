import { MongoServerError, MongoSystemError } from "mongodb";
import User from "../models/User.js";
import UserDetail from "../models/UserDetail.js";

const createNewUser = async (user, userDetailId) => {
  const newUser = new User(user);
  newUser.userDetail = userDetailId;
  await newUser.save();
  return newUser.id;
};

const getUserDetails = async () => {
  const userDetails = await UserDetail.find({});
  return userDetails;
};

const getUserDetail = async (id) => {
  const user = await UserDetail.findById(id);
  return user;
};

const getTrainers = async () => {
  try {
    const trainers = await UserDetail.find({ userType: "Trainer" });
    return trainers;
  } catch (err) {
    console.log(err);
  }
};
export { createNewUser, getUserDetails, getUserDetail, getTrainers };
