'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Issuance_residents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      issuance_id: {
        type: Sequelize.INTEGER
      },
      resident_id: {
        type: Sequelize.INTEGER
      },
      purpose: {
        type: Sequelize.STRING
      },
      remarks: {
        type: Sequelize.STRING
      },
      transaction_id: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Issuance_residents');
  }
};