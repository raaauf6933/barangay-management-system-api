const jwt = require("jsonwebtoken");
require("dotenv").config();

const GenerateAuthToken = (data) => {
  const token = jwt.sign(data, process.env.jwtPrivateKey);

  return token;
};

module.exports = GenerateAuthToken;
