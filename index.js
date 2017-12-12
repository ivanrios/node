'use strict';
var express = require('express');
var fs  = require('fs');
var app = express();
var bodyParser = require('body-parser')
var sql = require ('mssql');
var utils = require ('./utils');

var db = JSON.parse(fs.readFileSync("db.json").toString());

var sqlConfig = {
      "server"   : "sincronizacion1.salesup.com.mx",
      "database" : "eventos",
      "user"     : "admin",
      "password" : "@DevPerSa16",
      "port"     : 1433,
      "options"   : {"useUTC":false }
    };

var consultas = {
	eventosLista   :'select * from eventos',
	eventosDetalle :'select * from eventos where idevento = {0}',
	eventosInserta :"insert into eventos (idusuarioCreacion, evento) values(1,'{0}') ",
	eventosElimina :'delete from eventos where idevento = {0}',
}


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function(req, res){
	console.log("Index");
	res.send({res:"Ok"});
});

app.get('/eventos', function(req, res){
	var dbConn = new sql.Connection (sqlConfig);
	 dbConn.connect().then (function () {
	 	var sqlRequest = new sql.Request (dbConn);
	 	var SQLText = consultas['eventosLista']
	 	sqlRequest.query(SQLText).then ( function (recordSet) {
	 		console.log(recordSet)
	 		res.send(recordSet);
	 	});
	 });
	
});

app.get('/eventos/:evento', function(req, res){
	var evento = req.params.evento
	console.log("Detalles de evento");
	var dbConn = new sql.Connection (sqlConfig);
	 dbConn.connect().then (function () {
	 	var sqlRequest = new sql.Request (dbConn);
	 	var SQLText = consultas['eventosDetalle'].format(evento)
	 	sqlRequest.query(SQLText).then ( function (recordSet) {
	 		console.log(recordSet)
	 		res.send(recordSet);
	 	});
	 });
});



app.delete('/eventos/:evento', function(req, res){
	var evento = req.params.evento
	console.log("Eliminar de evento");
	var dbConn = new sql.Connection (sqlConfig);
	 dbConn.connect().then (function () {
	 	var sqlRequest = new sql.Request (dbConn);
	 	var SQLText = consultas['eventosElimina'].format(evento)
	 	sqlRequest.query(SQLText).then ( function (recordSet) {
	 		console.log(recordSet)
	 		res.send(recordSet);
	 	});
	 });
});


app.post('/eventos', function(req, res){
	var evento = req.body.evento
	console.log("Inserta de evento");
	var dbConn = new sql.Connection (sqlConfig);
	 dbConn.connect().then (function () {
	 	var sqlRequest = new sql.Request (dbConn);
	 	var SQLText = consultas['eventosInserta'].format(evento)
	 	console.log(SQLText)
	 	sqlRequest.query(SQLText).then ( function (recordSet) {
	 		res.send(recordSet);
	 	});
	 });
});


app.listen(3000, function(){
  console.log('Escuchando por el puerto localhost:3000');
});

