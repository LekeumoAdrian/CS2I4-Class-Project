export {};
const { Model } = require("sequelize");
export default (sequelize, DataTypes) => {
	class Classe extends Model {
	/**
	 * Helper method for defining associations.
	 * This method is not a part of Sequelize lifecycle.
	 * The `models/index` file will call this method automatically.
	 */
	static associate(models) {
		// define association here
	}
}
Classe.init({
	id: {DataTypes.INTEGER,
	nom_classe: DataTypes.STRING,
	capacite: DataTypes.INTEGER
}, {
	sequelize,
	modelName: "Classe",
});
return Classe;
};