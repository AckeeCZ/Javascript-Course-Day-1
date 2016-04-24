//DOM and manipulation
var body = document.getElementById("main");
body.style.textAlign = "center";
//h1.parentNode.removeChild(h1);


//jQUERY
$(document).ready(function(){
   $("#main h1").css({"font-size": "15px"});
});


//ARRAYS
var squares = Array(5);
for (var i = 0; i < squares.length; i++) {
  squares[i] = i * i;
}
//console.log(squares.indexOf(4));


//SET


//MAP


//MATH



//TIME



//EVENTS
//register event listeners
var myButton = document.getElementById("button");
myButton.addEventListener('click', function(){
    alert('Hello world');
}, false);



//EVENT WITH JQUERY
$("#button").click(function(e){
    e.preventDefault();
    alert("clicked with jquery");
});




//AJAX
$("#weatherBtn").click(function(e){
    e.preventDefault();
    $.ajax({
         url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22prague%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
         success: function( data ) {
           console.log(data);
         }
    });
});


//JQUERYUI
$( "#datepicker" ).datepicker();






















