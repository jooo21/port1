$(document).ready(function(){
    var $header = $("#header_sub");
    var $gnb_li = $("#gnb>li");
    var $sub = $gnb_li.children(".sub");
    var speed =300;


    //gnb_multi
    $gnb_li.on("mouseenter focusin",function(){
        openSub(this);
    });

    $gnb_li.on("mouseleave focusout",function(){
        closeSub(this);
    });

    function openSub(el){
        var ht= $(el).children(".sub").outerHeight(); 
        var bg = $sub.css("background-color");
        var posY = $header.outerHeight();
        var isBgGnb = $(".bgGnb").length;
        var isMedia = $(el).children(".sub").find("a").eq(0).text();
        if(isMedia =="Log in") {
            $(el).children(".sub").find("video").get(0).play();
        }
        if(!isBgGnb) {     
            $header.prepend(
                $("<div class='bgGnb'>")
                    .css({
                        width:"100%", height:ht, backgroundColor:bg, 
                        position:"absolute", left:0, top:posY, display:"none",overflow:"hidden", borderBottom:"1px solid #e9e4dc"
                    })
            )
        }
        // console.log(getMax());
        $(el).children(".sub").stop().slideDown(speed);
        $(".bgGnb").stop().slideDown(speed);
    }

    function closeSub(el){
        var isMedia = $(el).children(".sub").find("a").eq(0).text();
        if(isMedia =="Log in") {
            $(el).children(".sub").find("video").get(0).pause();
        }

        $(el).children(".sub").stop().slideUp(0);
        $(".bgGnb").slideUp(0,function(){
            $(this).remove();
        });
    }
});