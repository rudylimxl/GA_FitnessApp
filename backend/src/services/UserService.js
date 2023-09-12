import User from "../models/User.js";

const createNewUser = async (req, res) => {
  try {
    const newUser = new User({
      email: req.email,
      username: req.username,
      password: req.password,
      createdAt: Date.now(),
      userDetailId: {
        name: req.name,
        age: req.age,
        gender: req.gender,
        userType: req.userType,
      },
    });

    await newUser.save();
  } catch (err) {
    console.log(err);
  }
};

export { createNewUser };
