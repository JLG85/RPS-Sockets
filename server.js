//creating webserver
var express = require('express');

var app = express();
var server = app.listen(3001);

app.use(express.static('public'));

console.log("We're running!  Hello World!!!!!!!!!");

//WebSocket server
var socket = require('socket.io');
var io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket) {
	console.log("New connection Socket id: " + socket.id);
	
	socket.on('mouse',mouseMsg);
	
	function mouseMsg(data){
		console.log(data);
        //Send it to all OTHER clients
        socket.broadcast.emit('mouse',data);
        //Send it to EVERYONE (including self)
        //io.sockets.emit('mouse', data); 
        console.log(data);
	}
    //socket.on('disconnect', disconnected)
    
    
	
}
