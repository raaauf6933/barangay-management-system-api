'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Service_types extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Service_types.init({
    name: DataTypes.STRING,
    amount: DataTypes.FLOAT,
    isDeleted: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Service_types',
  });
  return Service_types;
};