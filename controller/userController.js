const user = require("../model/userModel");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const ApiError = require("../Utils/ApiError");
const bcrypt = require("bcryptjs");
const { UserValidator } = require("../services/userService");
const asyncHandler = require("../Utils/asyncHandler");

const createUser = asyncHandler(async (req, res) => {
  let body = req.body;
  // incoming userdata validation
  let response = UserValidator(body);
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  response.password = hashedPassword;
  let result = await user(response).save();
  res.status(201).json({
    status: "success",
    data: {
      user: result,
    },
  });
});

const getCurrentUser = async (req, res) => {
  res.status(201).json({
    status: "success",
    result: [
      {
        id: 1,
        username: "binodkhatri",
        role: "Admin",
      },
    ],
  });
};

module.exports = {
  createUser,
  getCurrentUser,
};
