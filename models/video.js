module.exports = function(sequelize, DataTypes) {
  var Video = sequelize.define("video", {
    videoName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 64]
      }
    },
    gameName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 64]
      }
    },
    videoType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  Video.associate = function(models) {
    Video.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Video;
};
