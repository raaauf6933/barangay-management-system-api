const db = require("./../../../models/");
const IncidentReports = db.IncidentReports;
const moment = require("moment-timezone");
const { SendEmail } = require("../../utils/mailer");

const CreateIncidentReport = async (req, res) => {
  const body = JSON.parse(req.apiGateway.event.body);
  try {
    const result = await IncidentReports.create({
      ...body,
      incident_date_time: moment(body.incident_date_time)
        .tz("Asia/Manila")
        .toISOString(),
      status: "PENDING",
    });

    SendEmail({
      to: "brgy.845.pandacan@gmail.com",
      subject: `INCIDENT REPORT | ${body.subject}`,
      html: `<html> 
      <p>Hello,</p>

      <p>New Incident Report has been submited.</p>

      <p>Details: </p>
      <p>${body.description}</p>
      </html>
      `,
    });

    return res.status(200).json({
      result,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = CreateIncidentReport;
