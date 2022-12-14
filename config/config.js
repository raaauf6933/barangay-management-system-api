require("dotenv").config();

module.exports = {
  development: {
    username: process.env.SERVERLESS_DB_USERNAME,
    password: process.env.SERVERLESS_DB_PASSWORD,
    database: process.env.SERVERLESS_DB_NAME,
    host: process.env.SERVERLESS_DB_HOST,
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: process.env.SERVERLESS_DB_USERNAME,
    password: process.env.SERVERLESS_DB_PASSWORD,
    database: process.env.SERVERLESS_DB_NAME,
    host: process.env.SERVERLESS_DB_HOST,
    dialect: "mysql",
  },
};
