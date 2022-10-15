const db = require("../../../models");
const IssuanceResident = db.IssuanceResident;
const ServiceTransaction = db.ServiceTransaction;

const GetResidentIssuance = async (req, res) => {
  IssuanceResident.hasOne(ServiceTransaction, {
    foreignKey: "issuance_resident_id",
  });

  try {
    const issuance_resident = await IssuanceResident.findOne({
      where: {
        id: req.query.id,
      },
      include: {
        model: ServiceTransaction,
      },
    });

    res.status(200).json({ issuance_resident });
  } catch (error) {
    res.status(200).json({
      message: error.message,
    });
  }
};

module.exports = GetResidentIssuance;
