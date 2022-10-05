const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const token = req.header("x-auth-token");

  if (!token)
    return res
      .status(401)
      .json({ status: "failed", message: "Access denied. No token provided." });

  try {
    const decoded = jwt.verify(token, "wds");
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).json({ message: "Invalid token." });
  }
};
