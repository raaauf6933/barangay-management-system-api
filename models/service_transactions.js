"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Service_transactions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Service_transactions.init(
    {
      issuance_resident_id: DataTypes.INTEGER,
      type: DataTypes.STRING,
      isPaid: DataTypes.BOOLEAN,
      amount: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "Service_transactions",
    }
  );
  return Service_transactions;
};
