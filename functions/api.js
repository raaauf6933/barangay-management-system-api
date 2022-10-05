const express = require("express");
const serverless = require("serverless-http");
const app = express();
const router = express.Router();

// controller
const Authentication = require("./controller/authentication");

// middleware
// const auth = require("./middleware/auth");

router.get("/auth", Authentication);

router.get("/test_endpoint", (_req, res) => {
  res.json({
    message: "API is live!",
  });
});

app.use("/", router);

module.exports.handler = serverless(app);
