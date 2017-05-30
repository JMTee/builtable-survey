(function () { 


$( "form" ).submit(function( el ) {
    writeJson($( this ).serializeArray());
 
});


function writeJson(pushData){
   



$.ajax
    ({
        type: "post",
        dataType : 'json',
        async: false,
        url: window.location.protocol + "//" + window.location.host +':3000/Surveys',
        data: pushData,
        success: function () {alert("Thanks for your feedback!"); },
        failure: function() {alert("Something went wrong! Please talk to your nearest Builtable attendant.");}
    });


}


}());