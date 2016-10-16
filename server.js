var Settings = {
	port : 8080
}

/* =====================================================================
	@: Game
===================================================================== */


var app    = require('express')();
var	http   = require('http').Server(app);
var	io     = require('socket.io')(http);
var Ref    = require('./html/engine/util/reference.js');

console.log(Ref.Con);
app.get('/', function(req, res){res.sendFile(__dirname + '/html/index.html');});

io.on("connection", function(socket){
	console.log("connected");
	
	io.on("_SERVERHELLO_", function(data){
		console.log(data);
	});
});

http.listen(Settings.port, function(){
	console.log("Game Port : "+Settings.port);
});
