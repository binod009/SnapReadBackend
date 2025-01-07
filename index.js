const express = require("express");
const ApiError = require("./Utils/ApiError");
const globalErrorHandler = require("./controller/errorController");
const app = express();
const db = require("./db");
const bodyParser = require("body-parser");

const app_routes = require("./routes");
const PORT = 3000;

// Body Parser
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());

app.use(app_routes);

// app.use("*", (req, res, next) => {
//   const err = new ApiError(`cannot find ${req.originalUrl} on the server`, 404);
//   next(err);
// });

app.use(globalErrorHandler);

const server = app.listen(PORT, () => {
  console.log("server is running on port", PORT);
});
