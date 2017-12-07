
    var socket = io();

   $(document).ready(function(){
     
     $('form').submit(function(){
       socket.emit('mensaje', $('#m').val());
       $('#m').val('');
       return false;
    });

    socket.on('mensaje', function(datos){
      fecha = new Date().toISOString();;
      $('#mensajes').append('<li><span title="'+fecha+'" class="timeago">s</span>    -    '+datos.mensaje+'</li>');
      $("span.timeago").timeago();
    });

   });