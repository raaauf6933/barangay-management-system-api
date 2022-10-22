const db = require("../../../models");
const Users = db.Users;
const Roles = db.Roles;

const GetUser = async (req, res) => {
  Users.belongsTo(Roles, {
    foreignKey: "role_id",
  });

  try {
    const users = await Users.findAll({
      include: {
        model: Roles,
      },
      where: {
        id: req.query.id,
      },
    });

    res.status(200).json({ user: users[0] });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = GetUser;
