const db = require("./../../../models/");
const Blotter = db.Blotter;
const Residents = db.Residents;

const GetBlotters = async (req, res) => {
  Blotter.belongsTo(Residents, {
    foreignKey: "complainant",
  });

  try {
    const result = await Blotter.findAll({
      include: {
        model: Residents,
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
