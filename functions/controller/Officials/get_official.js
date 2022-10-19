const db = require("../../../models");
const Officials = db.Officials;
const Positions = db.Positions;

const GetOfficial = async (req, res) => {
  Officials.belongsTo(Positions, {
    foreignKey: "position_id",
  });

  try {
    const official = await Officials.findAll({
      include: {
        model: Positions,
      },
      where: {
        id: req.query.id,
      },
    });

    if (official.length === 0) throw Error("Not Found");
    res.status(200).json({ official: official[0] });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = GetOfficial;
