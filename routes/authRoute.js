const express = require("express");
const {
  signOut,
  signUp,
  testforError,
  testForError,
} = require("../controller/authController");
const auth_route = express.Router();

auth_route.post("/signup", signUp);
auth_route.post("/signout", signOut);
auth_route.post("/test", testForError);

module.exports = auth_route;
