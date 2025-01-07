const User = require("../model/userModel");
const { UserValidator } = require("../services/userService");

let { asyncHandler } = require("../Utils/asyncHandler");

exports.signUp = asyncHandler(async(req, res) => {
  try {
    let body = req.body;
    // check for username and password match or not in database
    let response = await User.findOne({ email: body.email });
    res.status(200).json({
      result: response,
    });
  } catch (excp) {
    console.log(excp);
  }
})

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
