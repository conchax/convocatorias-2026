function conteo_recurso(idRecurso, idConvo=false){
  var dataSend = { idR : idRecurso, idC : idConvo};
  $.ajax({
    type: 'POST',
    url: 'clics_recursos/guarda_conteo_recurso.php',
    data: dataSend,
    dataType:"html",
    success: function(data){
      // Aqui se enviaria un mensaje, pero al ser un conteo interno NO se muestra al usuario
    },
    error: function(data){
    }
  });
}//end function