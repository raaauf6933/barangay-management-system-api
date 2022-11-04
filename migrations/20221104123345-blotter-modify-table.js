"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      "Blotters", // table name
      "respondent_statement", // new field name
      {
        type: Sequelize.STRING,
        allowNull: true,
        after: "statement",
      }
    );
    await queryInterface.addColumn(
      "Blotters", // table name
      "resolution", // new field name
      {
        type: Sequelize.STRING,
        allowNull: true,
        after: "respondent_statement",
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Blotters", "respondent_statement");
    await queryInterface.removeColumn("Blotters", "resolution");
  },
};
