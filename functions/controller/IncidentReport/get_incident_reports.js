const db = require("./../../../models/");
const IncidentReports = db.IncidentReports;
const Residents = db.Residents;

const GetIncidentReports = async (req, res) => {
  try {
    IncidentReports.belongsTo(Residents, {
      foreignKey: "claimant",
    });

    const result = await IncidentReports.findAll({
      include: {
        model: Residents,
      },
      where: {
        ...(req.query?.id
          ? {
              claimant: req.query?.id,
            }
          : {}),
      },
    });

    res.status(200).json({
      incident_reports: result,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = GetIncidentReports;
