const db = require("../../../models");
const Users = db.Users;
const Roles = db.Roles;

const GetMyProfile = async (req, res) => {
  const user = req.user;

  Users.belongsTo(Roles, {
    foreignKey: "role_id",
  });

  try {
    if (["Admin"].includes(user.role)) {
      const users = await Users.findAll({
        include: {
          model: Roles,
        },
        where: {
          id: user.id,
        },
      });

      return res.status(200).json({ user: users[0] });
    }

    res.status(200).json({ user: "test" });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = GetMyProfile;
