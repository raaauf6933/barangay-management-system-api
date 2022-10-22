const db = require("./../../../models");
const Residents = db.Residents;

const GetResident = async (req, res) => {
  try {
    const resident = await Residents.findAll({
      where: {
        id: req.query?.id,
      },
    });

    if (resident.length === 0) throw Error("Not Found");

    res.status(200).json({ resident: resident[0] });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = GetResident;
