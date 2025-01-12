const User = require("../model/userModel");
const { UserValidator } = require("../services/userService");
const ApiError = require("../Utils/ApiError");
let { asyncHandler } = require("../Utils/asyncHandler");
const bcrypt = require("bcryptjs");

exports.signUp = asyncHandler(async (req, res) => {
  let body = req.body;
  // incoming userdata validation
  UserValidator(body);
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  body.password = hashedPassword;
  let newUser = await User.create(body);
  let result = await newUser.save();
  res.status(201).json({
    status: "success",
    data: {
      user: result,
    },
  });
});

exports.testForError = asyncHandler(async (req, res) => {
  let body = req.body;
  const response = await UserValidator(body);
  res.status(200).json({
    result: body,
  });
});

exports.signOut = async (req, res, next) => {
  res.status(200).json({
    msg: "signOut successfully",
  });
};
