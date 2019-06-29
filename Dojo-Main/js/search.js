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

  
}
// module.exports = function(sequelize, DataTypes) {
//   var Example = sequelize.define("Example", {
//     text: DataTypes.STRING,
//     description: DataTypes.TEXT
//   });
//   return Example;
// };

// // Search.like