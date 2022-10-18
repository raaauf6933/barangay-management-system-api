const db = require("./../../../models/");
const Positions = db.Positions;

const EditPosition = async (req, res) => {
  const body = JSON.parse(req.apiGateway.event.body);

  const newPosition = {
    name: body.name,
    status: body.status,
  };

  try {
    const result = await Positions.update(newPosition, {
      where: {
        id: body.id,
      },
    });

    res.json({ result });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = EditPosition;
