const db = require("./../../../models/");
const IssuanceResident = db.IssuanceResident;
const ServiceTransaction = db.ServiceTransaction;
const ServiceTypes = db.ServiceTypes;

const CreateResidentIssuance = async (req, res) => {
  const body = JSON.parse(req.apiGateway.event.body);

  const newResidentIssuance = {
    issuance_id: body.issuance_type,
    resident_id: body.resident,
    purpose: body.purpose,
    remarks: body.remarks,
    status: "PENDING",
  };

  try {
    const result = await IssuanceResident.create(newResidentIssuance);

    const service_type = await ServiceTypes.findOne({
      where: {
        id: body.issuance_type,
      },
    });

    await ServiceTransaction.create({
      issuance_resident_id: result.id,
      type: body.issuance_type,
      isPaid: false,
      amount: service_type?.amount,
    });
    res.json({ result });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = CreateResidentIssuance;
