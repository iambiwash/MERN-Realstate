import User from "../models/user_model.js";
import bcryptjs from "bcryptjs";
import errorhandler from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json("User created Successfully !");
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    //check if valid user on database
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorhandler(404, "User not Found"));
    //compare password with one inside db
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorhandler(401, "Wrong Credentials"));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    //avoid sharing password to user even if its hashed. so get everything beside password of a user.
    const { password: pass, ...rest } = validUser._doc;
    res
      .cookie("access_token", token, { httpOnly: true }) //"expires: new Date(Date.now() + 24*60*60*1000" --> add this to provide expiration time if needed..
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};
