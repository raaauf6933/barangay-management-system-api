"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("incident_reports", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      claimant: {
        type: Sequelize.INTEGER,
      },
      other_claimant: {
        type: Sequelize.STRING,
      },
      subject: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      incident_date_time: {
        type: Sequelize.DATE,
      },
      status: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("incident_reports");
  },
};
