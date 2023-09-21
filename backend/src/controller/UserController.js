import { createNewUserDetail } from "../services/UserDetailService.js";
import {
  createNewUser,
  getUserDetail,
  getUserDetails,
} from "../services/UserService.js";

const create = async (req, res) => {
  try {
    // add a new user detail
    const id = await createNewUserDetail(req.body.userDetail);
    // add a new user referencing the user detail
    await createNewUser(req.body, id);
    res.send("User created");
  } catch (error) {
    console.log(error.message);
    res.send("Unable to create new user, see console");
  }
};

const index = async (req, res) => {
  try {
    const userDetails = await getUserDetails();
    res.json(userDetails);
  } catch (err) {
    console.log(err);
  }
};

const show = async (req, res) => {
  try {
    const userDetail = await getUserDetail(req.params.id);
    res.json(userDetail);
  } catch (err) {
    console.log(err);
  }
};

export { create, index, show };
