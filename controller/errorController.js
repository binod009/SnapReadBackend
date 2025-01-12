module.exports = (error, req, res, next) => {
  if (error.code === 11000) {
    duplicateMongoDbErrorHandler(error);
  }

  error.statusCode = error.statusCode || 500;
  error.status = error.status || "error";

  res.status(error.statusCode).json({
    statusCode: error.statusCode,
    status: error.status,
    message: error.message,
  });
};

// mongodb duplicate error handler
const duplicateMongoDbErrorHandler = (error) => {
  const duplicateField = Object.keys(error.keyValue)[0]; // Field name
  const duplicateValue = error.keyValue[duplicateField]; // Field value
  error.statusCode = 400; // Bad request
  error.status = "fail";
  error.message = `Duplicate value for ${duplicateField}: "${duplicateValue}". Please use a different value.`;
};
