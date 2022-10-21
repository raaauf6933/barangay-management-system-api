const db = require("./../../../models/");
const Residents = db.Residents;

const CreateResident = async (req, res) => {
  const body = JSON.parse(req.apiGateway.event.body);

  try {
    const result = await Residents.create({
      ...body,
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
