import { createNewUserDetail } from "../services/UserDetailService.js";
import { createNewUser } from "../services/UserService.js";

const create = async (req, res) => {
  try {
    // add a new user detail
    await createNewUserDetail(req.body.userDetail);
    // add a new user referencing the user detail
    await createNewUser(req.body.user);
    res.send("User created");
  } catch (error) {
    console.log(error.message);
    res.send("Unable to create new user, see console");
  }
};

export default create;
