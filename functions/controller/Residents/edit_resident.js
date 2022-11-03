const db = require("./../../../models/");
const Users = db.Users;
const Residents = db.Residents;

const EditResident = async (req, res) => {
  const body = JSON.parse(req.apiGateway.event.body);

  try {
    const fetch_data = await Residents.findOne({
      where: {
        id: body.id,
      },
    });

    const check_no_email_change = fetch_data.toJSON().email === body.email;

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

    const result = await Residents.update(
      {
        ...body,
      },
      {
        where: {
          id: body.id,
        },
      }
    );

    res.status(200).json({
      resident: result,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = EditResident;
