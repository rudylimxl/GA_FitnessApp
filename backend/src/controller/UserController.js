import { createNewUser } from "../services/UserService.js";

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

export default create;
