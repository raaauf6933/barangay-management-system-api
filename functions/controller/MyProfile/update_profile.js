const bcrypt = require("bcrypt");
const db = require("../../../models");
const Users = db.Users;
const Residents = db.Residents;

const UpdateProfile = async (req, res) => {
  const body = JSON.parse(req.apiGateway.event.body);
  const user = req.user;

  try {
    const salt = await bcrypt.genSalt(10);
    const new_password = await bcrypt.hash(body.new_password, salt);

    if (["Admin", "Super_Admin"].includes(user.role)) {
      const user_ = await Users.findOne({
        where: {
          id: user.id,
        },
      });
      // validate current password
      console.log(user_.toJSON());
      const check_no_email_change = user_.toJSON().email === body.email;

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

      if (
        (validate_email.length > 0 && !check_no_email_change) ||
        validate_email_users.length > 0
      )
        throw Error("Email already taken");

      const validPassword = await bcrypt.compare(
        body.current_password,
        user_.password
      );

      if (!validPassword)
        return res
          .status(400)
          .send({ status: "failed", message: "Invalid Current Password" });

      const users = await Users.update(
        {
          password: new_password,
          first_name: body.first_name,
          last_name: body.last_name,
          email: body.email,
        },
        {
          where: {
            id: user.id,
          },
        }
      );

      return res.status(200).json({ user: users[0] });
    }

    if (user.role === "Resident") {
      const user_ = await Residents.findOne({
        where: {
          id: user.id,
        },
      });

      const check_no_email_change = user_.toJSON().email === body.email;

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

      if (
        (validate_email.length > 0 && !check_no_email_change) ||
        validate_email_users.length > 0
      )
        throw Error("Email already taken");
      // validate current password

      const validPassword = await bcrypt.compare(
        body.current_password,
        user_.password
      );

      if (!validPassword)
        return res
          .status(400)
          .send({ status: "failed", message: "Invalid Current Password" });

      const users = await Residents.update(
        {
          password: new_password,
          first_name: body.first_name,
          last_name: body.last_name,
          email: body.email,
        },
        {
          where: {
            id: user.id,
          },
        }
      );

      return res.status(200).json({ user: users[0] });
    }
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = UpdateProfile;
