'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Issuance_resident extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Issuance_resident.init({
    issuance_id: DataTypes.INTEGER,
    resident_id: DataTypes.INTEGER,
    purpose: DataTypes.STRING,
    remarks: DataTypes.STRING,
    transaction_id: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Issuance_resident',
  });
  return Issuance_resident;
};