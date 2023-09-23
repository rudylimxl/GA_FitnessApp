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

// Update profile details of a specific user in DB
const updateUserDetails = async (userId, profileDetails) => {
  try {
    await UserDetail.updateOne({ _id: userId }, profileDetails);
  } catch (error) {
    throw error;
  }
};

export { createNewUserDetail, updateUserDetails };
