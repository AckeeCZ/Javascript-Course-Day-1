//DOM and manipulation
var body = document.getElementById("main");
body.style.textAlign = "left";
//body.style.color = "red";
//h1.parentNode.removeChild(h1);


//jQUERY
$(document).ready(function(){
   $("#main h1").css({"font-size": "15px"});
   $("#main").css({"color": "red"});

   var titles = document.getElementsByTagName("h3");
   var l = titles.length;
   for(var i = 0; i < l; i++){
      //console.log(titles[i].cloneNode(true));
      body.appendChild(titles[i]);
   }

   // $("h3").each(function(i, item){
   //    $("#main").append(item);
   // });

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
    console.log('Hello world');
}, false);


//EVENT WITH JQUERY
$("#button").click(function(e){
    e.preventDefault(); e.stopPropagation();
    
    var d = new Date();

    d = d.toISOString().substr(0, 10).split("-");
    console.log(d);

    var newD = [];
    for(var i = 0; i < d.length; i++){
        newD.unshift(d[i]);
    }
    newD = newD.join(". ");

    var dateElement = document.getElementById("date");
    dateElement.innerHTML = newD;

    //$("#date").text(newD);
});


//AJAX
$("#weatherBtn").click(function(e){
    e.preventDefault();
    $.ajax({
         url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22london%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
         success: function( data ) {
           data = "Sunny";
           $("#weather").text(data);
           //data.query.results.channel.item.condition.text
         }
    });
});


//JQUERYUI
$( "#datepicker" ).datepicker({ minDate: -10, maxDate: "+2M +20D" });


$("#tags").autocomplete({
  source: ["Hello", "Java", "Script"]
});



















