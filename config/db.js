const Sequelize = require("sequelize");
const sequelize = new Sequelize("db", "user", "password", {
  dialect: "sqlite",
  host: "./db.sqlite",
});

module.exports = sequelize;