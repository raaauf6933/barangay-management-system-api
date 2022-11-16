const db = require("../../../models");
const Users = db.Users;
const Roles = db.Roles;

const GetUsers = async (req, res) => {
  Users.belongsTo(Roles, {
    foreignKey: "role_id",
  });

  try {
    const users = await Users.findAll({
      include: {
        model: Roles,
      },
      where: {
        ...(req?.query?.status
          ? { status: req?.query?.status === "true" ? true : false }
          : {}),
        role_id: 1,
      },
    });

    res.status(200).json({ users });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = GetUsers;
