function iniciar() {
  console.log("Controlador de peticion 'iniciar' fue llamado.");
  return "Hola Iniciar";
}

function subir() {
  console.log("Controlador de peticion 'subir' fue llamado.");
  return "Hola Subir";
}

exports.iniciar = iniciar;
exports.subir = subir;