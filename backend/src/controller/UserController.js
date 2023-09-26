import passport from "passport";
import NotFoundError from "../errors/NotFoundError.js";
import { uploadToCloudStorage } from "../services/FileService.js";
import {
  createNewUserDetail,
  updateUserDetails,
  getTrainers,
  getUserDetail,
  getUserDetails,
} from "../services/UserDetailService.js";
import { createNewUser } from "../services/UserService.js";

import { createNewTrainerToUser } from "../services/trainerToUserService.js";

const signup = async (req, res, next) => {
  try {
    // add a new user detail
    const userDetailId = await createNewUserDetail(req.body.userDetail);
    // add a new user referencing the user detail
    await createNewUser(req.body, userDetailId);
    await createNewTrainerToUser(userDetailId, req.body.trainerId);
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
    res.status(500).send("Error updating profile.");
  }
};

const login = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      next(err);
    }
    if (!user) {
      next(new Error(info.message));
    } else {
      req.logIn(user, (err) => {
        if (err) {
          next(err);
        }
        res.send("Login Sucessful");
      });
    }
  })(req, res, next);
};

export { signup, showOne, showAll, showTrainers, update, login };
