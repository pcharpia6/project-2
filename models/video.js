module.exports = function(sequelize, DataTypes) {
  var Video = sequelize.define("video", {
    video_url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isURL: true,
        contains: "youtu.be"
      }
    },
    video_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 256]
      }
    },
    game_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [5, 1000]
      }
    },
    coach_request: {
      type: DataTypes.BOOLEAN
    }
  });

  Video.associate = function(models) {
    Video.belongsTo(models.user, {
      foreignKey: "userId", as: "User"
    });
  };

  return Video;
};
