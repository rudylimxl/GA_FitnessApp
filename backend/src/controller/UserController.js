import { createNewUser } from "../services/userService";

const create = (req, res) => {
  if (createNewUser) {
    res.json("User created");
  } else {
    res.json("Error");
  }
};

export { create };
