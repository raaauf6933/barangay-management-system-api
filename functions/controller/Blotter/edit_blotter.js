const db = require("./../../../models/");
const Blotter = db.Blotter;

const EditBlotter = async (req, res) => {
  const body = JSON.parse(req.apiGateway.event.body);

  try {
    const new_data = {
      complainant: body.complainant,
      respondent: body.respondent,
      in_charge: body.incharge,
      statement: body.statement,
      respondent_statement: body.respondent_statement,
      resolution: body.resolution,
      status: body.status,
    };

    await Blotter.update(new_data, {
      where: {
        id: body.id,
      },
      returning: true,
    });

    res.status(200).json({
      blotter: {
        id: body.id,
      },
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = EditBlotter;
