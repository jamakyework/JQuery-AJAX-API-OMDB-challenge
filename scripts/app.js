
console.log("javascript is here!!!");
$(document).ready(function(){
console.log("jquery is here");

//begin
$(document).on("click", "#clickMe",function(){
 var movieTitle = $("#title").val();
 console.log("Movie Title:", movieTitle);
 var movieYear = $("#year").val();
console.log("Year:", movieYear);
var movieURL= "http://www.omdbapi.com/?s=" + movieTitle + movieYear;
console.log("Movie URL: ", movieURL);
$.ajax({
  url: movieURL,
  dataType: "JSON",
  success: function(info){
    console.log("ajax success data:", info.Search);
    // startObject=info.Search);
    displayOnDOM(info.Search);
  },
  statusCode:{
    404: function(){
      alert("error connecting to resources");
    }
  }
});
});
});

var displayOnDOM = function(display){
  $("#showMe").empty();
  for( var i = 0 ; i < display.length; i++ ){
    $( "#showMe").append( "<p><b>" + display[ i ].Title + "</b> (" + display[ i ].Year + ")</p>");
    $( "#showMe").append( "<img src=" + display[ i ].Poster +  ">");
}
};
