const bcrypt = require("bcrypt");
const db = require("./../../../models/");
const Users = db.Users;
const Residents = db.Residents;

const EditUser = async (req, res) => {
  const body = JSON.parse(req.apiGateway.event.body);

  try {
    const validate_email = await Users.findAll({
      where: {
        email: body.email,
      },
    });

    const fetch_data = await Users.findOne({
      where: {
        id: body.id,
      },
    });

    const check_no_email_change = fetch_data.toJSON().email === body.email;

    const validate_email_residents = await Residents.findAll({
      where: {
        email: body.email,
      },
    });

    if (
      (validate_email.length > 0 && !check_no_email_change) ||
      validate_email_residents.length > 0
    )
      throw Error("Email already taken");

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
