var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
app.use(express.static(__dirname + '/public'));

io.on('connection', function(socket){
  console.log('Un usuario conectado');
  socket.on('disconnect', function(){
    console.log('Usuario desconectado');
  });
  socket.on('mensaje', function(msg){
    console.log('Un mensaje: ' + msg);
  });
  socket.on('mensaje', function(msg){
  	fecha =  Date();
    io.emit('mensaje', {"fecha":fecha,"mensaje":msg});
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

