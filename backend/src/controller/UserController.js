import { createNewUser } from "../services/UserService.js";

const create = (req, res) => {
  if (createNewUser) {
    res.json("User created");
  } else {
    res.json("Error");
  }
};

export default create;
