const bcrypt = require("bcrypt");
const GenerateAuthToken = require("../../utils/generateAuthToken");
const db = require("./../../../models/");
const Users = db.Users;
const Roles = db.Roles;

const Login = async (req, res) => {
  const body = JSON.parse(req.apiGateway.event.body);

  Users.belongsTo(Roles, {
    foreignKey: "role_id",
  });

  let user = await Users.findOne({
    include: {
      model: Roles,
    },
    where: {
      email: body.email,
    },
  });
  if (!user)
    return res
      .status(400)
      .send({ status: "failed", message: "Invalid email or password." });

  const validPassword = await bcrypt.compare(body.password, user.password);
  if (!validPassword)
    return res
      .status(400)
      .send({ status: "failed", message: "Invalid email or password." });

  const token = GenerateAuthToken({
    id: user.id,
    email: user.email,
    first_name: user.first_name,
    last_name: user.last_name,
    role: user.Role.name,
  });
  res.status(200).send({ status: "success", token });
};

module.exports = Login;
