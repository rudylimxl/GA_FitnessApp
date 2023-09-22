
import { uploadToCloudStorage } from "../services/FileService.js";
import {
  createNewUserDetail,
  updateUserDetails,
} from "../services/UserDetailService.js";
import { createNewUser, getUsers, getUser } from "../services/UserService.js";


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

const getUsersData = async (req, res) => {
  try {
    const users = await getUsers();
    res.json(users);
  } catch (err) {
    console.log(err);
  }
};

const getUserData = async (req, res) => {
  try {
    const user = await getUser(req.params.id);
    res.json({ user });
  } catch (err) {
    console.log(err);
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

export { create, getUsersData, getUserData, update };

