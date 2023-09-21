import UserDetail from "../models/UserDetail.js";

const createNewUserDetail = async (userDetails) => {
  try {
    const newUserDetail = new UserDetail(userDetails);
    await newUserDetail.save();
    return newUserDetail.id;
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
    return trainers;
  } catch (err) {
    console.log(err);
  }
};

export { createNewUserDetail, getUserDetail, getUserDetails, getTrainers };
