/* eslint-disable prettier/prettier */
module.exports = function(sequelize, DataTypes) {
	var coachReview = sequelize.define("coachReview", {
		userName: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Description: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Value: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
	});
	return coachReview;
};
