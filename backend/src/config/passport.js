import { Strategy } from "passport-local";
import User from "../models/User";
import bcrypt from "bcrypt";

export const LocalStrategy = new Strategy(async (username, password, done) => {
  try {
    const user = await User.findOne({ username: username });
    if (!user) {
      console.log("Username not found");
      return done(null, false, { message: "Incorrect username" });
    }
    bcrypt.compare(password, user.password, (err, res) => {
      if (res) {
        // passwords match! log user in
        console.log("You are logged in!");
        return done(null, user);
      } else {
        // passwords do not match!
        console.log("Incorrect password");
        return done(null, false, { message: "Incorrect password" });
      }
    });
  } catch (err) {
    return done(err);
  }
});
