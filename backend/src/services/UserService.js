import { MongoServerError, MongoSystemError } from "mongodb";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import UserDetail from "../models/UserDetail.js";

const createNewUser = async (user, userDetailId) => {
  const { username, password, email } = user;

  const salt = await bcrypt.genSalt(10);
  bcrypt.hash(password, salt, async (err, hashedPassword) => {
    if (err) {
      next(err);
    } else {
      const newUser = new User({
        username: username,
        email: email,
        password: hashedPassword,
        userDetail: userDetailId,
      });
      console.log(newUser);
      await newUser.save();
    }
  });
};

export { createNewUser };
