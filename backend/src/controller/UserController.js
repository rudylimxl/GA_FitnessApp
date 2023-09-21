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
    res.status(201).send("User created sucessfully");
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Error in creating user");
  }
};

const index = async (req, res) => {
  try {
    const userDetails = await getUserDetails();
    res.json(userDetails);
  } catch (err) {
    console.log(err);
    res.status(500).send("Unable to retrieve user details");
  }
};

const show = async (req, res) => {
  try {
    const userDetail = await getUserDetail(req.params.id);
    res.json(userDetail);
  } catch (err) {
    console.log(err);
    res.status(500).send("Unable to retrieve user details");
  }
};

export { create, index, show };
