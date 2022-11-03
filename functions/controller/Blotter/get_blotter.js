const db = require("./../../../models/");
const Blotter = db.Blotter;
const Residents = db.Residents;

const GetBlotter = async (req, res) => {
  const id = req.query.id;

  Blotter.belongsTo(Residents, {
    foreignKey: "complainant",
  });

  try {
    const result = await Blotter.findOne({
      include: {
        model: Residents,
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
