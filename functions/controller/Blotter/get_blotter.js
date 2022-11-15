const db = require("./../../../models/");
const Blotter = db.Blotter;
const Officials = db.Officials;
const Positions = db.Positions;

const GetBlotter = async (req, res) => {
  const id = req.query.id;

  Blotter.belongsTo(Officials, {
    foreignKey: "in_charge",
  });

  Officials.belongsTo(Positions, {
    foreignKey: "position_id",
  });

  try {
    const result = await Blotter.findOne({
      include: {
        model: Officials,
        include: {
          model: Positions,
        },
        required: false,
      },
      where: {
        id,
      },
    });

    res.status(200).json({
      blotter: result,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = GetBlotter;
