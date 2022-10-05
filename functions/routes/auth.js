const app = require("express");
const router = app.Router();

const Authentication = require("../controller/authentication");

module.exports = function () {
  router.get("/auth", Authentication);
};
