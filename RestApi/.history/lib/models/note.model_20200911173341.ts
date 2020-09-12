export {};
const { Model } = require("sequelize");
export defqult = (sequelize, DataTypes) => {
  class Note extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Note.init({
    id: DataTypes.INTEGER,
    id_matiere: DataTypes.INTEGER,
    id_eleve: DataTypes.INTEGER,
    note: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: "Note",
  });
  return Note;
};