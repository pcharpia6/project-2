/* eslint-disable prettier/prettier */
module.exports = function(sequelize, DataTypes) {
	var contributorReview = sequelize.define("contributorReview", {
		userName: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Description: {
			type: DataTypes.STRING,
			allowNull: false
		}
	});
	return contributorReview;
};
