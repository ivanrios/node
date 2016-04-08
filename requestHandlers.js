var exec = require("child_process").exec;

function iniciar(response) {
  console.log("Controlador de petición 'iniciar' fue llamado.");

  exec("find /",
    { timeout: 10000, maxBuffer: 2000*1024 },
    function (error, stdout, stderr) {
      response.writeHead(200, {"Content-Type": "text/html"});
      response.write(stdout);
      response.end();
    });
}

function subir(response) {
  console.log("Controlador de petición 'subir' fue llamado.");
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("Hola Subir");
  response.end();
}

exports.iniciar = iniciar;
exports.subir = subir;