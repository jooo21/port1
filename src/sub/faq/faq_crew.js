$(document).ready(function(){

    var $box = $("#service");
    var pos2 = $box.offset().top;

    $(window).on("scroll", function(){
        var scroll = $(this).scrollTop(); 
        if( scroll >= pos2-400){
            $box.find(".inner").addClass("on")
        }else{
            $box.find(".inner").removeClass("on");
        }
        
    }); 

 
});