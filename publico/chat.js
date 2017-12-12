
    var socket = io();

   $(document).ready(function(){
     
     $('form').submit(function(){
     	var mensaje = $("#m").val();
     	var fecha = new Date();
     	var data = {mensaje:mensaje, fecha:fecha}
     	socket.emit('mensaje', data);
     	$("#m").val('');
       return false;
    });


     socket.on('mensaje', function(msg){
     	var fecha = new Date(msg.fecha).toISOString();
     	var linea = "<li><span title='"+fecha+
     	            "' class='timeago'></span><br/>"+msg.mensaje+"</li>";
     	$("#mensajes").append(linea)
     	$('span.timeago').timeago();
     })


   });