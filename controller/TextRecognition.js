const { asyncHandler } = require("../Utils/asyncHandler");
const Tesseract = require("tesseract.js");
const TextRecognition = asyncHandler(async (req, res) => {
  if (!req.file) {
    throw new ApiError("image file not uploaded", 400);
  }
  const imageBuffer = req.file.buffer;
  const result = await Tesseract.recognize(imageBuffer, "eng", {
    logger: (info) => console.log(info), // Log progress (optional)
  });

  res.status(201).json({
    msg: "success",
    result: result.data.text,
  });
});
module.exports = TextRecognition;
