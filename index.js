var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.get('/', function(req, res){
  res.sendFile(__dirname + '/publico/index.html');
});

app.use(express.static(__dirname + '/publico'));


io.on('connection', function(socket){
	console.log("Un usuario conectado")

	socket.on('disconnect', function(){
		console.log("Un usuario desconectado")
	});

	socket.on('mensaje', function(msg){
		console.log("Un nuevo mensaje: ", msg);
		io.emit('mensaje', msg);
	})

});

http.listen(3000, function(){
  console.log('Escuchando por el puerto localhost:3000');
});

