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
	static getClass() {
		const classname = this.toString().split("(" || /s+/)[0].split(" " || /s+/)[1];

		return classname;
	}
}
Eleve.init({
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
		allowNull: false
	},
	nom: {
		type: DataTypes.STRING(30),
	},
	prenom: {
		type: DataTypes.STRING(20),
	},
	date_naiss: {
		type: DataTypes.DATE,
	},
	sexe: {
		type: DataTypes.ENUM,
		values: ["Men", "Woman"],
		default: "Men"
	},
	id_class: {
		type: DataTypes.INTEGER
	}
}, {
	sequelize,
	modelName: "Eleve",
});
return Eleve;
};