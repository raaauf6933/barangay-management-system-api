"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class content_settings_images extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  content_settings_images.init(
    {
      fk_id: DataTypes.INTEGER,
      type: DataTypes.STRING,
      url: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "content_settings_images",
    }
  );
  return content_settings_images;
};
