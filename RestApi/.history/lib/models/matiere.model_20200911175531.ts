export {};
const {
  Model
} = require("sequelize");
export defqult = (sequelize, DataTypes) => {
  class Matiere extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Matiere.init({
    id: DataTypes.INTEGER,
    intitule: DataTypes.STRING,
    coef: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: "Matiere",
  });
  return Matiere;
};