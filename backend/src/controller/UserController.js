import {
  createNewUserDetail,
  getTrainers,
  getUserDetail,
  getUserDetails,
} from "../services/UserDetailService.js";
import { createNewUser } from "../services/UserService.js";

const create = async (req, res) => {
  try {
    // add a new user detail
    const id = await createNewUserDetail(req.body.userDetail);
    // add a new user referencing the user detail
    await createNewUser(req.body, id);
    res.status(201).send("User created sucessfully");
  } catch (error) {
    res.status(500).send("Error in creating user");
  }
};

const showAll = async (req, res) => {
  try {
    const userDetails = await getUserDetails();
    res.json(userDetails);
  } catch (err) {
    console.log(err);
    res.status(500).send("Unable to retrieve user details");
  }
};

const showOne = async (req, res) => {
  try {
    const userDetail = await getUserDetail(req.params.id);
    res.json(userDetail);
  } catch (err) {
    console.log(err);
    res.status(500).send("Unable to retrieve user details");
  }
};

const showTrainers = async (req, res) => {
  try {
    const trainers = await getTrainers();
    res.json(trainers);
  } catch (err) {
    console.log(err);
    res.status(500).send("Unable to retrieve trainers");
  }
};

export { create, showOne, showAll, showTrainers };
