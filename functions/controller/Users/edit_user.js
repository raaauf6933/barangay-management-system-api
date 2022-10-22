const bcrypt = require("bcrypt");
const db = require("./../../../models/");
const Users = db.Users;

const EditUser = async (req, res) => {
  const body = JSON.parse(req.apiGateway.event.body);

  try {
    const new_user = {
      role_id: body.role,
      first_name: body.first_name,
      last_name: body.last_name,
      email: body.email,
      ...(body.password ? { password: body.password } : {}),
      status: body.status,
    };

    if (body.password) {
      const salt = await bcrypt.genSalt(10);
      new_user.password = await bcrypt.hash(body.password, salt);
    }

    const result = await Users.update(new_user, {
      where: {
        id: body.id,
      },
    });

    res.status(200).send({ result });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

module.exports = EditUser;
