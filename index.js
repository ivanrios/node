var request = require("request")
var url = 'https://www.easports.com/fifa/ultimate-team/api/fut/item?page=1'
request.get(url, function(err, response, data){
	if (err)
		console.log(err)
	else{
		jugadores = JSON.parse(data)
		jugadores.items.forEach(function(elem){
			console.log(elem.name, elem.positionFull)	
		})
	}

})