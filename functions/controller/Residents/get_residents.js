const db = require("./../../../models");
const { Op } = require("sequelize");
const Residents = db.Residents;

const GetResidents = async (req, res) => {
  const limit = req.query?.limit;
  const name = req.query?.name;
  console.log(req.query?.name);
  try {
    const residents = await Residents.findAll({
      limit: limit,
      where: {
        [Op.or]: [
          {
            first_name: {
              [Op.substring]: `${name}`,
            },
          },
          {
            last_name: {
              [Op.substring]: `${name}`,
            },
          },
        ],
      },
    });

    res.status(200).json({ residents });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = GetResidents;
