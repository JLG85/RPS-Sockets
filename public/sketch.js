var socket;
var penColor;

function setup() {
  createCanvas(400,400)
  background(222);
penColor= "black";
  
  socket = io.connect('http://localhost:3001');

  //named event
  socket.on('mouse', newDrawing);
}

function newDrawing(data){
    noStroke();
    fill(penColor);
    ellipse(data.x,data.y,5,5)
}


function draw() {
  
}

function mouseDragged() {
  console.log(mouseX + ' ' + mouseY);
  var data={
  	x: mouseX,
  	y: mouseY
  }
  socket.emit('mouse',data);
	noStroke();
  fill(penColor);
  ellipse(mouseX,mouseY,5,5);
}
