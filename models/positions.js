'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Positions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Positions.init({
    name: DataTypes.STRING,
    isDeleted: DataTypes.BOOLEAN,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Positions',
  });
  return Positions;
};