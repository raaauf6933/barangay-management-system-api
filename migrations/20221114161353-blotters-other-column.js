"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      "Blotters", // table name
      "other_incharge", // new field name
      {
        type: Sequelize.STRING,
        allowNull: true,
        after: "in_charge",
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Blotters", "other_incharge");
  },
};
