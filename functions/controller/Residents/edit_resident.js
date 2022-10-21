const db = require("./../../../models/");
const Residents = db.Residents;

const EditResident = async (req, res) => {
  const body = JSON.parse(req.apiGateway.event.body);

  try {
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
