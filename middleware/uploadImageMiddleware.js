const express = require("express");
const multer = require("multer");
const storage = multer.memoryStorage();

const imageFilter = (req, file, next) => {
  let allowed = [, "jpeg", "jpg", "webp"];
  let fileparts = file.originalname.split(".");
  let ext = fileparts.pop();
  if (allowed.includes(ext.toLowerCase())) {
    next(null, true); //passing true for acceptance for file if you want to reject pass false
  } else {
    next({ status: 400, msg: "Image file type not supported" });
  }
};

const uploader = multer({
  storage,
  fileFilter: imageFilter,
  limits: {
    fieldSize: 5000000,
  },
});

module.exports = uploader;
