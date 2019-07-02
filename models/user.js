module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8, 32]
      }
    },
    Description: {
      type: DataTypes.TEXT,
      validate: {
        len: [12, 1000]
      }
    }
  });

  // User.associate = function(models) {
  //   User.hasMany(models.Video, {
  //     foreignKey: "userId"
  //   })
  // };

  return User;
};
