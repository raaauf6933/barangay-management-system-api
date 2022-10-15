const db = require("./../../../models/");
const IssuanceResident = db.IssuanceResident;
const ServiceTransaction = db.ServiceTransaction;
const ServiceTypes = db.ServiceTypes;

const EditResidentIssuance = async (req, res) => {
  const body = JSON.parse(req.apiGateway.event.body);

  const newResidentIssuance = {
    issuance_id: body.issuance_type,
    resident_id: body.resident,
    purpose: body.purpose,
    remarks: body.remarks,
    status: body.status,
  };

  try {
    const result = await IssuanceResident.update(newResidentIssuance, {
      where: {
        id: req.query.id,
      },
    });

    const service_type = await ServiceTypes.findOne({
      where: {
        id: body.issuance_type,
      },
    });

    await ServiceTransaction.update(
      {
        issuance_resident_id: result.id,
        type: body.issuance_type,
        isPaid: body.payment_status,
        amount: service_type?.amount,
      },
      {
        where: {
          issuance_resident_id: req.query.id,
        },
      }
    );
    res.json({ result });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = EditResidentIssuance;
