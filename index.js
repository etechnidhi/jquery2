$(document).ready(function(){
    var display=$("#display").val();
    $("#click").click(function(){
        alert("The word is clicked.");
    });
    $("#hover").mouseover(function(){
        alert("The you have hover on the word");
    });
    $("input").focus(function(){
        $("span").css("display","block").fadeOut(5000);
    });
    $("#mouse").mouseover(function(){
      $("#mouse").css("background-color", "red");
    });
    $("#out").mouseover(function(){
        $("#out").css("background-color", "pink");
      });
    $("#out").mouseout(function(){
        $("#out").css("background-color", "red");
      });
      $( "#dbl" ).dblclick(function() {
        alert( "this is the double click." );
      });
});

$(document).ready(function(){
        $("input").focus(function(){
            $("span").css("display","block").fadeOut(5000);    
    });
});

