var request = require("request")
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  
	var url = 'https://www.easports.com/fifa/ultimate-team/api/fut/item?page=1'
	var datos = '';
	request.get(url, function(err, response, data){
		if (err)
			console.log(err)
		else{
			jugadores = JSON.parse(data)
			jugadores.items.forEach(function(elem){
				
				datos += "<li><img src='"+elem.headshotImgUrl+"'/> "+elem.name+"</li>"

			})
			res.send(datos)
		}

	})	

});

app.listen(3000, function () {
  console.log('Escuchando por el puerto 3000!');
});


