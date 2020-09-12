export {};
const { Model } = require("sequelize");
export default (sequelize, DataTypes) => {
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
    id: {
      type: DataTypes.INTEGER,
    },
    id_matiere: {
      type: DataTypes.INTEGER,
    },
    id_eleve: {
      type: DataTypes.INTEGER,
    },
    note: {
      type: DataTypes.DOUBLE
    }
  }, {
    sequelize,
    modelName: "Note",
  });
  return Note;
};