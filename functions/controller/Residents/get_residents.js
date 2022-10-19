const db = require("./../../../models");
const { Op } = require("sequelize");
const Residents = db.Residents;

const GetResidents = async (req, res) => {
  const limit = req.query?.limit;
  const name = req.query?.name;

  try {
    const residents = await Residents.findAll({
      ...(limit ? { limit: limit } : {}),
      ...(name
        ? {
            where: {
              [Op.or]: [
                {
                  ...(name
                    ? {
                        first_name: {
                          [Op.substring]: `${name}`,
                        },
                      }
                    : {}),
                },
                {
                  ...(name
                    ? {
                        first_name: {
                          [Op.last_name]: `${name}`,
                        },
                      }
                    : {}),
                },
              ],
            },
          }
        : {}),
    });

    res.status(200).json({ residents });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = GetResidents;
