"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      "content_settings", // table name
      "value", // new field name
      {
        type: Sequelize.STRING,
        allowNull: true,
        after: "type",
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Residents", "value");
  },
};
