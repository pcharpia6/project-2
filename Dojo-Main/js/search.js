console.log("I'm loaded!")
function genreSearch(){
  var x = document.getElementById("myDropdown");
  console.log("Am i working?")
  console.log(x.style.visibility);
  if (x.style.visibility==="hidden"){
   
    x.style.visibility = "visible";

  }else{
    x.style.visibility = "hidden";
  }

  
}
console.log("I'm loaded!")
function gameSearch(){
  var y = document.getElementById("myDropdown2");
  console.log("Am i working?")
  console.log(y.style.visibility);
  if (y.style.visibility==="hidden"){
   
    y.style.visibility = "visible";

  }else{
    y.style.visibility = "hidden";
  }


};
// module.exports = function(sequelize, DataTypes) {
//   var Example = sequelize.define("Example", {
//     text: DataTypes.STRING,
//     description: DataTypes.TEXT
//   });
//   return Example;
// };

// // Search.like
var path = require ("path");
var Sequelize = require("sequelize");
var env = process.env.NODE_ENV || "development";
var config = require(__dirname +"/../config/config.json")[env];
var db = {};

if(config.use_env_variable){
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
}else{
  var sequelize= new Sequelize(config.database, config.genreSearch, config.gameSearch, config);

}

fs
.readdirSync(__dirname)
.filter(function(choices){
  return(choices.indexOf(".") !==0)&&( choices !==basename) && (choices.slice(-3)===".js");
})
.forEach(function(choices){
  var model = sequelize["import"](path.join(__dirname,choices));
  db[model.name] = model;
})

Object.keys(db).forEach(function(ModelName){
  if(db[ModelName].associate){
    db[ModelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;