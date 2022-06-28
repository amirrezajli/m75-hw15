var counter = 0;
   
$(document).ready(function() {

    $(document).keydown(function(e){
        if(e.keyCode===13)
        counter++;

        $("#theCount").text(counter);
    });

});
