"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.addConstraint("Images", {
      fields: ["fk_id"],
      type: "foreign key",
      name: "announcement-images-association",
      references: {
        table: "Announcements",
        field: "id",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.removeConstraint(
      "Images",
      "announcement-images-association"
    );
  },
};
