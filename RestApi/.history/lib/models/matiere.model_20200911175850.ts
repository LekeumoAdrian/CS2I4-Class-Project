export {};
const { Model } = require("sequelize");
export default (sequelize, DataTypes) => {
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
	id: {
		type: DataTypes.INTEGER,
	  primaryKey: true,
	  autoIncrement: true,
	  allowNull: false
	},
	intitule: {
	  type: DataTypes.STRING,
	},
	coef: {
	  type: DataTypes.INTEGER
	}
  }, {
	sequelize,
	modelName: "Matiere",
  });
  return Matiere;
};