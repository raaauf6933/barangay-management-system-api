const db = require("./../../../models/");
const Blotter = db.Blotter;

const GetBlotter = async (req, res) => {
  const id = req.query.id;

  try {
    const result = await Blotter.findOne({
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
