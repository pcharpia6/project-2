/* eslint-disable prettier/prettier */
module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define("User", {
		userName: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [8, 32]
			}
		},
		beltColor: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: "White",
		},
		Description: {
			type: DataTypes.TEXT,
			validate: {
				len: [12, 1000]
			}
		},
		createdAt: {
			type: DataTypes.DATE
		},
		userRole: {
			type: DataTypes.STRING,
			defaultValue: "contributor"
		},
		dingBucks: {
			type: DataTypes.INTEGER
		}
	});

	User.associate = function(models) {
		User.hasMany(models.Video, {
			foreignKey: "userId"
		});
	};

	return User;
};
