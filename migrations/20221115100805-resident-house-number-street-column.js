"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      "Residents", // table name
      "house_no", // new field name
      {
        type: Sequelize.STRING,
        allowNull: true,
        after: "birth_date",
      }
    );
    await queryInterface.addColumn(
      "Residents", // table name
      "street_address", // new field name
      {
        type: Sequelize.STRING,
        allowNull: true,
        after: "house_no",
      }
    );
    await queryInterface.addColumn(
      "Residents", // table name
      "apartment", // new field name
      {
        type: Sequelize.STRING,
        allowNull: true,
        after: "street_address",
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Residents", "house_no");
    await queryInterface.removeColumn("Residents", "street_address");
    await queryInterface.removeColumn("Residents", "apartment");
  },
};
