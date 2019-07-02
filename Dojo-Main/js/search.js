

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


};
  

console.log("I'm loaded!")
function gameSearch(){
  var page2 = document.getElementById("myDropdown2");
  console.log("Am i working?")
  console.log(page2.style.visibility);
  if (page2.style.visibility==="hidden"){
   
    page2.style.visibility = "visible";

  }else{
    page2.style.visibility = "hidden";
  }


};
$("#myDropdown2 option").on("click", function(event){
console.log( $(this).val(), "yello!");
 
$("#myDropdown select").css({"display":"none"});
  // $("#myDropdown select").prop("disabled", "disabled");

  $.ajax("/api/videos/byName/"+$(this).val()).done(function(res){
    
  });

});
$(function() {
  $("#myDropdown").change(function() {
      if ($(this).val() == true) {
          $("#myDropdown2").prop("disabled", true);
      }
      else
          $("#myDropdown2").prop("disabled", false);
  });
});

$(function(){
  $("#myDropdown2").change(function(){
    if($(this).val()===true){
      $("myDropdown").prop("disabled", true);
    }
    else
    $("#myDropdown").prop("disabled",false);
  });
});

$("#myDropdown2 option").on("click", function(event){
  console.log( $(this).val());
    $(this).val();
    $.ajax("/api/genre/:genre/"+$(this).val()).done(function(res){
      
    });
  
  });
  $("myDropdown option").on("click", function(event){
    console.log($(this).val());
    $(this).val();
    $.ajax("/api/gameName/:gameName"+$(this).val()).done(function(res){
      
    })
  })
// Search.like
