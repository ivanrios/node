var querystring = require("querystring");

function iniciar(response, postData) {
  console.log("Controlador de peticion 'inicio' fue llamado.");

  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/subir" method="post">'+
    '<textarea name="text" rows="5" cols="40"></textarea><br />'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

function subir(response, dataPosteada) {
    console.log("Controlador de peticion 'subir' fue llamado.");
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("Tu enviaste el texto: : " +
    querystring.parse(dataPosteada)["text"]);
    response.end();
}

exports.iniciar = iniciar;
exports.subir = subir;
