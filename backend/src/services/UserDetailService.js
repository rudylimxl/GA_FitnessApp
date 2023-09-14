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

export { createNewUserDetail };
