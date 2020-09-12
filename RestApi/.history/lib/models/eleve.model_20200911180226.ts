export {};
const { Model } = require("sequelize");
export default (sequelize, DataTypes) => {
	class Eleve extends Model {
	/**
	 * Helper method for defining associations.
	 * This method is not a part of Sequelize lifecycle.
	 * The `models/index` file will call this method automatically.
	 */
	static associate(models) {
		// define association here
	}
}
Eleve.init({
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true 
	}
	nom: DataTypes.STRING,
	prenom: DataTypes.STRING,
	date_naiss: DataTypes.DATE,
	sexe: DataTypes.ENUM,
	id_class: DataTypes.INTEGER
}, {
	sequelize,
	modelName: "Eleve",
});
return Eleve;
};