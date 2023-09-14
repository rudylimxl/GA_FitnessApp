import UserDetail from "../models/UserDetail.js";

const createNewUserDetail = async (userDetails) => {
  try {
    const newUserDetail = new UserDetail(userDetails);
    await newUserDetail.save();
  } catch (err) {
    console.log(err);
  }
};

export { createNewUserDetail };
