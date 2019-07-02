module.exports = function(sequelize, DataTypes) {
  var coachReview = sequelize.define("coachReview", {
    Text: DataTypes.STRING,
    Description: DataTypes.TEXT
  });
  return coachReview;
};
