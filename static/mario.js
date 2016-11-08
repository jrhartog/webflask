// Event Handlers
$(".go").on("click", drawScene );
$(".stop").on("click", stopMario );
$(".action").on("click", changeDirection );

// global animation ID
var animationID;

// mario's directions
var x = 200, y =0;
var direction = 1;
 
// step through the animation cels
var cel = 0;
function moveMario() {
  cel = (cel+1)%7;
  $(".mario").css("background-position", cel*-60 +"px 0");
 // console.log( direction )
  x+=10*direction;
  
 $(".mario").css("left", x + "px");
}

function stopMario() {
    window.cancelAnimationFrame( animationID );
}


function changeDirection() {
  console.log("click!");
  direction = -direction;
   $(".mario").css("transform", "scaleX(" + direction + ")");
}


// infinite drawing loop
function drawScene() {
  moveMario();
  animationID = window.requestAnimationFrame( drawScene );
}
