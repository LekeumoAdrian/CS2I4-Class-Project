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
	static getClass() {
		const classname = this.toString().split("(" || /s+/)[0].split(" " || /s+/)[1];

		return classname;
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