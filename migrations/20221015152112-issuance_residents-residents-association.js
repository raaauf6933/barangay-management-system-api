"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.addConstraint("Issuance_residents", {
      fields: ["resident_id"],
      type: "foreign key",
      name: "issuance_residents-residents-association",
      references: {
        table: "Residents",
        field: "id",
      },
    });
    // queryInterface.addConstraint("Residents", {
    //   fields: ["id"],
    //   type: "foreign key",
    //   name: "residents-issuance_residents-association",
    //   references: {
    //     table: "Issuance_residents",
    //     field: "resident_id",
    //   },
    // });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.removeConstraint(
      "Issuance_residents",
      "issuance_residents-residents-association"
    );
    // queryInterface.removeConstraint(
    //   "Residents",
    //   "residents-issuance_residents-association"
    // );
  },
};
