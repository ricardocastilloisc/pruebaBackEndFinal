const express = require("express");
const routeApi = express.Router();

const {mutation,stats } = require("../controllers/mutationController");


routeApi.route("/mutation/").post(mutation)
routeApi.route("/stats/").get(stats)


module.exports = routeApi;






