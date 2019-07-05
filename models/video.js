/* eslint-disable prettier/prettier */
module.exports = function(sequelize, DataTypes) {
	var Video = sequelize.define("Video", {
		// this ends up being an 11 digit value (videoID would be more accurate
		// but is already taken as a foreign key on user.js so will not be used
		// to prevent confusion)
		videoUrl: {
			type: DataTypes.STRING,
			allowNull: false
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

	Video.associate = function(models) {
		Video.hasMany(models.coachReview, {
			foreignKey: "videoId"
		});
	};
	Video.associate = function(models) {
		Video.hasMany(models.contributorReview, {
			foreignKey: "videoId"
		});
	};

	return Video;
};
