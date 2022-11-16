const db = require("./../../../models/");
const IncidentReports = db.IncidentReports;

const IncidentReportUpdate = async (req, res) => {
  const body = JSON.parse(req.apiGateway.event.body);
  try {
    const result = await IncidentReports.update(
      {
        status: "SOLVED",
      },
      {
        where: {
          id: body.id,
        },
      }
    );

    return res.status(200).json({
      result,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = IncidentReportUpdate;
