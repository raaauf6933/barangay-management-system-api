const bcrypt = require("bcrypt");
const db = require("./../../../models/");
const Users = db.Users;

const CreateUser = async (req, res) => {
  const body = JSON.parse(req.apiGateway.event.body);

  let verifyEmail = await Users.findOne({ where: { email: body.email } });

  if (verifyEmail)
    return res
      .status(400)
      .send({ status: "failed", message: "Email already registered." });

  try {
    const new_user = {
      role_id: body.role,
      first_name: body.first_name,
      last_name: body.last_name,
      email: body.email,
      password: body.password,
      status: body.status,
    };
    const salt = await bcrypt.genSalt(10);
    new_user.password = await bcrypt.hash(body.password, salt);

    const result = await Users.create(new_user);

    res.status(200).send({ result });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

module.exports = CreateUser;
