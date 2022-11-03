const bcrypt = require("bcrypt");
const db = require("../../../models");
const Users = db.Users;

const UpdateProfile = async (req, res) => {
  const body = JSON.parse(req.apiGateway.event.body);
  const user = req.user;

  try {
    const salt = await bcrypt.genSalt(10);
    const new_password = await bcrypt.hash(body.new_password, salt);

    if (["Admin"].includes(user.role)) {
      const users = await Users.update(
        { password: new_password },
        {
          where: {
            id: user.id,
          },
        }
      );

      return res.status(200).json({ user: users[0] });
    }

    res.status(200).json({ user: "test" });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = UpdateProfile;
