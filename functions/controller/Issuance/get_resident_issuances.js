const db = require("../../../models");
const IssuanceResident = db.IssuanceResident;
const ServiceTransaction = db.ServiceTransaction;
const Residents = db.Residents;
const ServiceTypes = db.ServiceTypes;

const GetResidentIssuances = async (req, res) => {
  IssuanceResident.hasOne(ServiceTransaction, {
    foreignKey: "issuance_resident_id",
  });

  IssuanceResident.belongsTo(Residents, {
    foreignKey: "resident_id",
  });

  IssuanceResident.belongsTo(ServiceTypes, {
    foreignKey: "issuance_id",
  });

  try {
    const issuance_residents = await IssuanceResident.findAll({
      include: [
        {
          model: ServiceTransaction,
        },
        {
          model: Residents,
        },
        {
          model: ServiceTypes,
        },
      ],
    });

    res.status(200).json({ issuance_residents });
  } catch (error) {
    res.status(200).json({
      message: error.message,
    });
  }
};

module.exports = GetResidentIssuances;
