
const express = require('express');
const app_routes = express.Router();
const auth_routes = require('./authRoute');
// register all the route below
app_routes.use("/api/v1",auth_routes)






module.exports = app_routes;