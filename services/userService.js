const Joi = require("joi");
const ApiError = require("../Utils/ApiError");

exports.UserValidator = (data) => {
  const userSchema = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string()
      .pattern(
        new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/)
      )
      .required()
      .messages({
        "string.pattern.base":
          "Password must be at least 6 characters long, include a number, and a special character.",
      }),
  });
  let response = userSchema.validate(data, { abortEarly: false });
  if (response.error) {
    const error = response.error.details.map((err) => {
      return {
        field: err.context.key,
        message: err.message,
      };
    });
    const errorMessage = error.map((err) => err.message).join(", ");
    throw new ApiError(errorMessage, 400);
  } else {
    return response.value;
  }
};
