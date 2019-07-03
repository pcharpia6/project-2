/* eslint-disable prettier/prettier */
module.exports = function(sequelize, DataTypes) {
	var contributorResponseCoachReview = sequelize.define(
		"contributorCoachReview",
		{
			userName: {
				type: DataTypes.STRING,
				allowNull: false
			},
			Text: {
				type: DataTypes.STRING,
				allowNull: false
			},
			Value: {
				type: DataTypes.INTEGER,
				allowNull: false
			}
		}
	);
	return contributorResponseCoachReview;
};
