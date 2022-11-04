const db = require("../../../models");
const Positions = db.Positions;

const GetPositions = async (req, res) => {
  try {
    const positions = await Positions.findAll({
      where: {
        ...(req?.query?.status
          ? { status: req?.query?.status === "1" ? true : false }
          : {}),
      },
    });

    res.status(200).json({ positions });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = GetPositions;
