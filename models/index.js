"use strict";
require("dotenv").config();
const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const env = process.env.SERVERLESS_ENV || "development";
const config = require("../config/config")[env];
const mysql2 = require("mysql2");

let sequelize = new Sequelize(
  process.env.SERVERLESS_DB_NAME,
  process.env.SERVERLESS_DB_USERNAME,
  process.env.SERVERLESS_DB_PASSWORD,
  {
    host: process.env.SERVERLESS_DB_HOST,
    dialect: "mysql",
    logging: false,
    dialectModule: mysql2,
    port: "3306",
  }
);

sequelize
  .authenticate()
  .then(function (err) {
    console.log("Connection has been established successfully.");
  })
  .catch(function (err) {
    console.log("Unable to connect to the database:", err);
  });

const db = {};

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Announcement = require("./announcement")(sequelize, Sequelize.DataTypes);
db.Images = require("./images")(sequelize, Sequelize.DataTypes);
db.IssuanceResident = require("./issuance_resident")(
  sequelize,
  Sequelize.DataTypes
);
db.ServiceTransaction = require("./service_transactions")(
  sequelize,
  Sequelize.DataTypes
);
db.Residents = require("./residents")(sequelize, Sequelize.DataTypes);
db.ServiceTypes = require("./service_types")(sequelize, Sequelize.DataTypes);
db.Positions = require("./positions")(sequelize, Sequelize.DataTypes);
db.Officials = require("./officials")(sequelize, Sequelize.DataTypes);
db.Roles = require("./roles")(sequelize, Sequelize.DataTypes);
db.Users = require("./users")(sequelize, Sequelize.DataTypes);

db.sequelize.sync({ force: false });

module.exports = db;
