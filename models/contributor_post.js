module.exports = function(sequelize, DataTypes) {
  var contributorPost = sequelize.define("contributorPost", {
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
      type: DataType.STRING,
      allowNull: false
    },
    game_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [
          [5, 1000]
        ]
      }
    },
    
  });
  return Example;
};
