"use strict";
const { faker } = require("@faker-js/faker");

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    let data = [];

    for (let i = 0; i < 20; i++) {
      const seedData = {
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        middle_name: faker.name.middleName(),
        gender: faker.name.sex(),
        birth_date: faker.date.birthdate(),
        address: faker.address.streetAddress(),
        email: faker.internet.email(),
        contact_number: faker.phone.number("09#########"),
        civil_status: "SINGLE",
        citizenship: "filipino",
        isDeleted:false,
        status:true,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      data.push(seedData);
    }

    return queryInterface.bulkInsert("Residents", data);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Residents", null, {});
  },
};
