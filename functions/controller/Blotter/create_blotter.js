const db = require("./../../../models/");
const Blotter = db.Blotter;

const CreateBlotter = async (req, res) => {
  const body = JSON.parse(req.apiGateway.event.body);

  console.log(body);
  try {
    const new_data = {
      complainant: body.resident.value,
      respondent: body.respondent,
      in_charge: body.incharge,
      statement: body.statement,
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
