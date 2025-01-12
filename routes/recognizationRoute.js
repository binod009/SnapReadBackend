const express = require("express");
const TextRecognition = require("../controller/TextRecognition");
const uploader = require("../middleware/uploadImageMiddleware");

const readimage_route = express.Router();

readimage_route.post("/readimage", uploader.single("image"), TextRecognition);

module.exports = readimage_route;
