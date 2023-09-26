import { Strategy } from "passport-local";
import bcrypt from "bcrypt";
import User from "../models/User.js";

const initializePassport = (passport) => {
  const authenticateUser = async (email, password, done) => {
    const user = await User.findOne({ email: email });
    if (user == null) {
      return done(null, false, { message: "Incorrect user or password" });
    }
    try {
      if (await bcrypt.compare(password, user.password)) {
        return done(null, user);
      } else {
        return done(null, false, { message: "Incorrect user or password" });
      }
    } catch (error) {
      return done(error);
    }
  };
  passport.use(new Strategy({ usernameField: "email" }, authenticateUser));

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (err) {
      done(err);
    }
  });
};

export default initializePassport;
