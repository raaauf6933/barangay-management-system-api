"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      "Residents", // table name
      "password", // new field name
      {
        type: Sequelize.STRING,
        allowNull: true,
        after: "citizenship",
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Residents", "password");
  },
};
