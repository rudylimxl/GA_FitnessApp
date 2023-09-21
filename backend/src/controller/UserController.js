import { createNewUserDetail } from "../services/UserDetailService.js";
import { createNewUser, getUser, getUsers } from "../services/UserService.js";

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

export { create, getUserData, getUsersData };
