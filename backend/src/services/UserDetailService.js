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

// Get all users from DB where a username matches the input string
async function searchUsername(inputStr) {
  try {
    let users = await UserDetail.find({ $text: { $search: inputStr } });
    return users;
  } catch (error) {
    throw error;
  }
}

export { createNewUserDetail, updateUserDetails, searchUsername };
