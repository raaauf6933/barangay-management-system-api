"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Blotters extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Blotters.init(
    {
      complainant: DataTypes.STRING,
      respondent: DataTypes.STRING,
      in_charge: DataTypes.STRING,
      statement: DataTypes.STRING,
      respondent_statement: DataTypes.STRING,
      resolution: DataTypes.STRING,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Blotters",
    }
  );
  return Blotters;
};
