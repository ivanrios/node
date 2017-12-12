'use strict';
var express = require('express');
var fs  = require('fs');
var app = express();
var bodyParser = require('body-parser')

var db = JSON.parse(fs.readFileSync("db.json").toString());



app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function(req, res){
	console.log("Index");
	res.send({res:"Ok"});
});

app.get('/eventos', function(req, res){
	console.log("Todos los eventos");
	res.send(db.eventos);
});

app.get('/eventos/:evento', function(req, res){
	var evento = req.params.evento
	console.log("Detalles de evento");
	var busqueda= db.eventos.filter(function(elem){return (elem.id==evento)})
	res.send(busqueda);
});

app.put('/eventos/:evento', function(req, res){
	var evento = req.params.evento;
	var nombre = req.body.evento;
	var autor = req.body.autor;

	console.log("Actualiza el evento");
	db.eventos = db.eventos.map(function(elem){
		if (elem.id==evento){
			elem.evento = nombre;
			elem.autor  = autor;
		}
		return elem;
	});
	var busqueda= db.eventos.filter(function(elem){return (elem.id==evento)})
	res.send(busqueda);
});

app.delete('/eventos/:evento', function(req, res){
	var evento = req.params.evento;
	console.log("Elimina el evento");
	db.eventos = db.eventos.filter(function(elem, i, object){
		if (elem.id!=evento)
			return elem;
	});
	var busqueda= db.eventos.filter(function(elem){return (elem.id==evento)})
	res.send(busqueda);
});


app.post('/eventos', function(req, res){
	var id = db.eventos.length + 1;
	var nombre = req.body.evento;
	var autor = req.body.autor;
	var evento = {id:id, nombre:nombre, autor:autor};
	db.eventos.push(evento)
	var respuesta = "Agregar el evento"
	console.log("URL: ",respuesta);
	res.send(evento);
});


app.listen(3000, function(){
  console.log('Escuchando por el puerto localhost:3000');
});

