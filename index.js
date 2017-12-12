var express = require('express');
var fs  = require('fs');
var app = express();
var bodyParser = require('body-parser')


app.get('/', function(req, res){
	var respuesta = "Pagina inicial"
	console.log("URL: ", respuesta);
	res.send({res:respuesta});
});

app.get('/eventos', function(req, res){
	var respuesta = "Todos los eventos"
	console.log("URL: ",respuesta);
	res.send({res:respuesta});
});

app.get('/eventos/:evento', function(req, res){
	var evento = req.params.evento
	var respuesta = "Detalles de evento " +evento
	console.log("URL: ",respuesta);
	res.send({res:respuesta});
});

app.put('/eventos/:evento', function(req, res){
	var evento = req.params.evento;
	var evento = req.params.evento
	var respuesta = "Actualiza de evento " +evento
	console.log("URL: ",respuesta);
	res.send({res:respuesta});
});

app.delete('/eventos/:evento', function(req, res){
	var evento = req.params.evento;
	var respuesta = "Eliminando de evento " +evento
	console.log("URL: ",respuesta);
	res.send({res:respuesta});
});


app.listen(3000, function(){
  console.log('Escuchando por el puerto localhost:3000');
});

