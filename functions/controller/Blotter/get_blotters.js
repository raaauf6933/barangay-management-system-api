const db = require("./../../../models/");
const Blotter = db.Blotter;
const Officials = db.Officials;
const Positions = db.Positions;

const GetBlotters = async (req, res) => {
  try {
    Blotter.belongsTo(Officials, {
      foreignKey: "in_charge",
    });

    Officials.belongsTo(Positions, {
      foreignKey: "position_id",
    });

    const result = await Blotter.findAll({
      include: {
        model: Officials,
        include: {
          model: Positions,
        },
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

module.exports = GetBlotters;
