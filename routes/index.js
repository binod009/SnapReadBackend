const express = require("express");
const app_routes = express.Router();
const auth_routes = require("./authRoute");
const readimage_routes = require("./recognizationRoute");
// register all the route below
app_routes.use("/api/v1", auth_routes);
app_routes.use("/api/v1", readimage_routes);

module.exports = app_routes;
