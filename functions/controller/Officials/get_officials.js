const db = require("../../../models");
const Officials = db.Officials;
const Positions = db.Positions;

const GetOfficials = async (req, res) => {
  Officials.belongsTo(Positions, {
    foreignKey: "position_id",
  });

  try {
    const officials = await Officials.findAll({
      include: {
        model: Positions,
      },
    });

    res.status(200).json({ officials });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = GetOfficials;
