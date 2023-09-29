import UserDetail from "../models/UserDetail.js";

const getUserDetails = async () => {
  const userDetails = await UserDetail.find({});
  return userDetails;
};

const getUserDetail = async (id) => {
  const user = await UserDetail.findById(id).populate("clients");
  return user;
};

const getTrainers = async () => {
  const trainers = await UserDetail.find({ userType: "trainer" });
  return trainers;
};

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

// Adds a user id to the clients field of a specified trainer
const addClient = async (clientId, trainerId) => {
  try {
    //find the trainer document
    const trainer = await UserDetail.findById(trainerId);
    //add the client to the clients field
    trainer.clients.push(clientId);

    await trainer.save();
  } catch (error) {
    throw error;
  }
};

// Get all users from DB where a username matches the input string
async function searchUsername(inputStr) {
  try {
    // let users = await UserDetail.find({
    //   $text: { $search: `\"${inputStr}\"` },
    // });
    let users = await UserDetail.find({
      username: { $regex: new RegExp(inputStr, "i") },
    });
    return users;
  } catch (error) {
    throw error;
  }
}

export {
  createNewUserDetail,
  updateUserDetails,
  searchUsername,
  getUserDetails,
  getUserDetail,
  getTrainers,
  addClient,
};
