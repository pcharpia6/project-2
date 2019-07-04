/* eslint-disable prettier/prettier */
module.exports = function(sequelize, DataTypes) {
	var Video = sequelize.define("Video", {
		videoUrl: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				isURL: true,
				contains: "youtu.be"
			}
		},
		videoName: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [2, 256]
			}
		},
		gameName: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Genre: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Description: {
			type: DataTypes.TEXT,
			allowNull: false,
			validate: {
				len: [5, 1000]
			}
		},
		coachRequest: {
			type: DataTypes.BOOLEAN
		},
		dontBeLikeMe: {
			type: DataTypes.BOOLEAN
		},
		Brag: {
			type: DataTypes.BOOLEAN
		},
		contributorFeedback: {
			type: DataTypes.BOOLEAN
		}
	});

	// This doesn't seem to impact anything on the database build via JAWSDB
	// I beleive the user association portion covers this, leaving for now
	// Video.associate = function(models) {
	//   Video.belongsTo(models.User, {
	//     foreignKey: "userId", as: "User"
	//   });
	// };

	return Video;
};
