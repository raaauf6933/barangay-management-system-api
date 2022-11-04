"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      "Residents", // table name
      "is_voter", // new field name
      {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        after: "citizenship",
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Residents", "is_voter");
  },
};
