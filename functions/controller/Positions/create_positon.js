const db = require("./../../../models/");
const Positions = db.Positions;

const CreatePosition = async (req, res) => {
  const body = JSON.parse(req.apiGateway.event.body);

  try {
    const result = await Positions.create({
      name: body.name,
      status: body.status,
    });
    res.status(200).json({
      result,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = CreatePosition;
