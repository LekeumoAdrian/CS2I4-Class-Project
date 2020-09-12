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
	static getClass() {
		const classname = this.toString().split("(" || /s+/)[0].split(" " || /s+/)[1];

		return classname;
	}
}
Classe.init({
	id: {
		type: DataTypes.INTEGER,
	},
	nom_classe: {
		type: DataTypes.STRING(30),
	},
	capacite: {
		type: DataTypes.INTEGER
	}
}, {
	sequelize,
	modelName: "Classe",
});
return Classe;
};