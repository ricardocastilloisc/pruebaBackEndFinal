const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

class Mutation extends Model {}

Mutation.init(
  {
    id: {
      type: new DataTypes.INTEGER(),
      primaryKey: true,
      autoIncrement: true,
    },
    dna: {
      type: DataTypes.STRING,
    },
    isMutation: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: "mutation",
    timestamps: false,
  }
);

module.exports = Mutation;
