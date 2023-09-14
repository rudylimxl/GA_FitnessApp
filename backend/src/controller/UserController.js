import { createNewUser, getAllUser, getUser } from "../services/UserService.js";

const create = async (req, res) => {
  try {
    //add a new user
    await createNewUser(req.body);
    res.send("User created");
  } catch (error) {
    console.log(error.message);
    res.send("Unable to create new user, see console");
  }
};

const getAllUserData = async (req, res) => {
  try {
    const allUser = await getAllUser();
    res.json({ allUser });
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

export { create, getAllUserData, getUserData };
