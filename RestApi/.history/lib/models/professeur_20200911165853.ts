export {};
const { Model } = require("sequelize");
export default0 = (sequelize, DataTypes) => {
  class Professeur extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Professeur.init({
    id: DataTypes.INTEGER,
    nom: DataTypes.STRING,
    prenom: DataTypes.STRING,
    date_naiss: DataTypes.DATE,
    id_matiere: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: "Professeur",
  });
  return Professeur;
};