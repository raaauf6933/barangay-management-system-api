const bcrypt = require("bcrypt");
const GenerateAuthToken = require("../../utils/generateAuthToken");
const db = require("./../../../models/");
const Users = db.Users;
const Roles = db.Roles;
const Residents = db.Residents;

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

  let resident = await Residents.findOne({
    where: {
      email: body.email,
    },
  });

  if (!user && !resident)
    return res
      .status(400)
      .send({ status: "failed", message: "Invalid email or password." });

  if (user) {
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
    return res.status(200).send({ status: "success", token });
  } else {
    const validPassword = await bcrypt.compare(
      body.password,
      resident.password
    );

    if (!validPassword)
      return res
        .status(400)
        .send({ status: "failed", message: "Invalid email or password." });

    const token = GenerateAuthToken({
      id: resident.id,
      email: resident.email,
      first_name: resident.first_name,
      last_name: resident.last_name,
      role: "Resident",
    });
    return res.status(200).send({ status: "success", token });
  }
};

module.exports = Login;
