const db = require("../../../models");
const Positions = db.Positions;

const GetPosition = async (req, res) => {
  try {
    const positions = await Positions.findAll({
      where: {
        id: req.query.id,
      },
    });

    if (positions.length === 0) throw Error("Not Found");
    res.status(200).json({ position: positions[0] });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = GetPosition;
