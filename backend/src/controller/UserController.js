import NotFoundError from "../errors/NotFoundError.js";
import { uploadToCloudStorage } from "../services/FileService.js";
import {
  createNewUserDetail,
  updateUserDetails,
} from "../services/UserDetailService.js";
import {
  createNewUser,
  getTrainers,
  getUserDetail,
  getUserDetails,
} from "../services/UserService.js";

const create = async (req, res, next) => {
  try {
    // add a new user detail
    const id = await createNewUserDetail(req.body.userDetail);
    // add a new user referencing the user detail
    await createNewUser(req.body, id);
    res.status(201).send("User created sucessfully");
  } catch (error) {
    next(error);
  }
};

const showAll = async (req, res, next) => {
  try {
    const userDetails = await getUserDetails();
    res.json(userDetails);
  } catch (error) {
    next(error);
  }
};

const showOne = async (req, res, next) => {
  try {
    const userDetail = await getUserDetail(req.params.id);
    if (!userDetail) {
      throw NotFoundError();
    }
    res.json(userDetail);
  } catch (error) {
    next(error);
  }
};

const showTrainers = async (req, res) => {
  try {
    const trainers = await getTrainers();
    res.json(trainers);
  } catch (error) {
    console.log(error);
    res.status(500).send("Unable to retrieve trainers");
  }
};

const update = async (req, res) => {
  try {
    if (req.file) {
      //upload profile picture to GCP service if file exists
      const url = await uploadToCloudStorage(req.file, "profile");

      //modify req.body to add url
      req.body.avatarUrl = url;
    }

    //update userdetails collection in userDetailService
    await updateUserDetails(req.params.id, req.body);
    res.status(200).send("Profile successfully updated.");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error updating profile.");
  }
};

export { create, showOne, showAll, showTrainers, update };
