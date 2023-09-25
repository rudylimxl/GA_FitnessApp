import UserDetail from "../models/UserDetail.js";

const createNewUserDetail = async (userDetails) => {
  const newUserDetail = new UserDetail(userDetails);
  await newUserDetail.save();
  return newUserDetail.id;
};

// Update profile details of a specific user in DB
const updateUserDetails = async (userId, profileDetails, next) => {
  try {
    await UserDetail.updateOne({ _id: userId }, profileDetails);
  } catch (error) {
    throw error;
  }
};

export { createNewUserDetail, updateUserDetails };
