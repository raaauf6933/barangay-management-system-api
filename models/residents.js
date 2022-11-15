"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Residents extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Residents.init(
    {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      middle_name: DataTypes.STRING,
      gender: DataTypes.STRING,
      birth_date: DataTypes.DATEONLY,
      house_no: DataTypes.STRING,
      street_address: DataTypes.STRING,
      apartment: DataTypes.STRING,
      address: DataTypes.STRING,
      email: DataTypes.STRING,
      contact_number: DataTypes.STRING,
      civil_status: DataTypes.STRING,
      citizenship: DataTypes.STRING,
      is_voter: DataTypes.BOOLEAN,
      password: DataTypes.STRING,
      isDeleted: DataTypes.BOOLEAN,
      status: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Residents",
    }
  );
  return Residents;
};
