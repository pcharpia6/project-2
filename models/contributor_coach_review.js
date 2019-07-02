module.exports = function(sequelize, DataTypes) {
  var contributorCoachReview = sequelize.define("contributorCoachReview", {
    Text: DataTypes.STRING,
    Description: DataTypes.TEXT
  });
  return contributorCoachReview;
}