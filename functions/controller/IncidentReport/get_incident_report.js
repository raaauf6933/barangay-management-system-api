const db = require("./../../../models/");
const IncidentReports = db.IncidentReports;
const Residents = db.Residents;

const GetIncidentReport = async (req, res) => {
  try {
    IncidentReports.belongsTo(Residents, {
      foreignKey: "claimant",
    });

    const result = await IncidentReports.findOne({
      where: {
        id: req.query.id,
      },
      include: {
        model: Residents,
      },
    });

    res.status(200).json({
      incident_report: result,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = GetIncidentReport;
