"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class incident_report extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  incident_report.init(
    {
      claimant: DataTypes.INTEGER,
      other_claimant: DataTypes.STRING,
      subject: DataTypes.STRING,
      description: DataTypes.STRING,
      incident_date_time: DataTypes.DATE,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "incident_report",
    }
  );
  return incident_report;
};
