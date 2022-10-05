const Auth = (req, res) => {
  console.log(req.user);
  res.status(404).json({
    hello: "test",
  });
};

module.exports = Auth;
