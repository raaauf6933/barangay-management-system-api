const db = require("./../../../models/");
const Residents = db.Residents;
const Users = db.Users;
const bcrypt = require("bcrypt");
const moment = require("moment");

const CreateResident = async (req, res) => {
  const body = JSON.parse(req.apiGateway.event.body);

  const salt = await bcrypt.genSalt(10);
  const password_pattern =
    body.first_name[0] +
    body.last_name +
    moment(body.birth_date).format("YYYY");

  const formatPassword = password_pattern
    .toLowerCase()
    .trim()
    .replace(/\s/g, "");

  try {
    const validate_email = await Residents.findAll({
      where: {
        email: body.email,
      },
    });

    const validate_email_users = await Users.findAll({
      where: {
        email: body.email,
      },
    });

    if (validate_email.length > 0 || validate_email_users.length > 0)
      throw Error("Email already taken");

    const password = await bcrypt.hash(formatPassword, salt);

    const result = await Residents.create({
      ...body,
      first_name: body.first_name.trim(),
      last_name: body.last_name.trim(),
      middle_name: body.middle_name.trim(),
      email: body.email.trim(),
      password,
    });
    res.status(200).json({
      resident: result,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = CreateResident;
