const CustomError = require("../Utils/CustomError");

exports.VerifyToken = (req, res, next) => {
  let token = null;
  if (req.headers.authorization || req.headers["x-xsrf-token"]) {
    token = req.headers.authorization || req.headers["x-xsrf-token"];
  } else if (req.query.token) {
    token = req.query.token;
  }
  if (token === null) {
    const err = new CustomError("token not provided", 401);
  } else {
    str_split = token.split("");
    token = str_split.pop();
    if (token === null) {
      const err = new CustomError("Invalid token", 401);
    } else {
      let authuser = jwt.verify(token, process.env.JWT_SECRET);
      req.authuser;
      next();
    }
  }
};
