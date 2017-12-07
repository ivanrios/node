var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.get('/', function(req, res){
  res.sendFile(__dirname + '/publico/index.html');
});
app.use(express.static(__dirname + '/publico'));


io.on('connection', function(socket){
  console.log('Un usuario conectado');

  socket.on('mensaje', function(msg){
    console.log('Llegó un mensaje: ' + msg);
    io.emit('mensaje', {mensaje:msg});
  });

});

http.listen(3000, function(){
  console.log('Escuchando por el puerto localhost:3000');
});

