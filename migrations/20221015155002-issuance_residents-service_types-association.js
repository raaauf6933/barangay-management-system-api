"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.addConstraint("Issuance_residents", {
      fields: ["issuance_id"],
      type: "foreign key",
      name: "issuance_residents-service_types-association",
      references: {
        table: "Service_types",
        field: "id",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.removeConstraint(
      "Issuance_residents",
      "issuance_residents-service_types-association"
    );
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
