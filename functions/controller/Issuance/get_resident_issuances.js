const db = require("../../../models");
const IssuanceResident = db.IssuanceResident;
const ServiceTransaction = db.ServiceTransaction;

const GetResidentIssuances = async (req, res) => {
  IssuanceResident.hasOne(ServiceTransaction, {
    foreignKey: "issuance_resident_id",
  });

  try {
    const issuance_residents = await IssuanceResident.findAll({
      include: {
        model: ServiceTransaction,
      },
    });

    res.status(200).json({ issuance_residents });
  } catch (error) {
    res.status(200).json({
      message: error.message,
    });
  }
};

module.exports = GetResidentIssuances;
