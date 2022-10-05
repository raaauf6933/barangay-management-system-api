const express = require("express");
const serverless = require("serverless-http");
const app = express();
const router = express.Router();

// controller
const Authentication = require("./controller/authentication");

// middleware
const auth = require("./middleware/auth");

router.get("/auth", Authentication);

app.use("/", router);

module.exports.handler = serverless(app);
