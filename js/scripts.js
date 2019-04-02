$(document).ready(function(){
  $("form#stress_test").submit(function(event){
    event.preventDefault();
    $("#response").show();
    $("input:checkbox[name=warning-signs]:checked").each(function(){
      var workTransportationMode = $(this).val();
      $('#response').append(workTransportationMode + "<br>");
    });
    $("#response").show();
    $("input:checkbox[name=health-symptoms]:checked").each(function(){
      var funTransportationMode = $(this).val();
      $('#response').append(funTransportationMode + "<br>");
    });
    $('#stress_test').hide();
  });
});
