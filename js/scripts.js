$(document).ready(function(){
  $("form#stress_test").submit(function(event){
    event.preventDefault();
    var answer1 = [];
    var answer2 = [];

    $("#response").show();


    $("input:checkbox[name=warning-signs]:checked").each(function(){
      var val = $(this).val();
      val = parseInt(val);
      answer1.push(val);
    });


    $("input:checkbox[name=health-symptoms]:checked").each(function(){
      var val1 = $(this).val();
      val1 = parseInt(val1);
      answer2.push(val1);
    });
    var total = 0;


    for(var i = 0; i < answer1.length; i++){
            total += answer1[i];
    };
    console.log(total);
    if(total > 0){
      $('#response').append("<li>Pet a cat</li>");
    };
    if(total >= 10){
      $('#response').append("<li>Meditate</li>");
    };
    if (total >= 20 ){
      $('#response').append("<li>Take A Walk</li>");
    };
    if(total >= 30){
      $('#response').append("<li>See a Therapist</li>");
    };
    if(total >= 40){
      $('#response').append("<li>Take Medication</li>");
    };
    if(total >= 50){
      $('#response').append("<li>Destroy Everything</li>");
    };
    // <li id ="list1">Petting a cat</li>
    // <li id ="list2">Meditating</li>
    // <li id ="list3">Taking a walk</li>
    // <li id ="list4">Seeing a therapist</li>
    // <li id ="list5">Taking medication</li>
    // <li id ="list6">Destroy things</li>





      console.log(answer1);
      console.log(answer2);






    // $("input:checkbox[name=warning-signs]:checked").each(function(){
    //   var workTransportationMode = $(this).val();
    //   $('#response').append(workTransportationMode + "<br>");
    // });
    // $("#response").show();
    // $("input:checkbox[name=health-symptoms]:checked").each(function(){
    //   var funTransportationMode = $(this).val();
    //   $('#response').append(funTransportationMode + "<br>");
    // });
    $('#stress_test').hide();
  });
});
