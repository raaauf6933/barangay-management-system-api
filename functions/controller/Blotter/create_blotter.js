const db = require("./../../../models/");
const Blotter = db.Blotter;

const CreateBlotter = async (req, res) => {
  const body = JSON.parse(req.apiGateway.event.body);

  console.log(body);
  try {
    const new_data = {
      complainant: body.complainant,
      respondent: body.respondent,
      in_charge: body.incharge === "OTHER" ? null : body.incharge,
      other_incharge: body.incharge !== "OTHER" ? null : body.other_incharge,
      statement: body.statement,
      respondent_statement: body.respondent_statement,
      resolution: body.resolution,
      status: "PENDING",
    };

    const result = await Blotter.create(new_data);

    res.status(200).json({
      blotter: result,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = CreateBlotter;
