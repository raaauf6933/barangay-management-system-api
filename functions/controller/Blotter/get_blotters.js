const db = require("./../../../models/");
const Blotter = db.Blotter;

const GetBlotters = async (req, res) => {
  try {
    const result = await Blotter.findAll({});

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
