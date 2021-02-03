$(document).ready(function(){
     //초기 필요한 변수값 설정
     var pos2 = $(".intro .sub").offset().top;
     var base = -1100;
 
     $(window).on("scroll", function(){
         var scroll = $(this).scrollTop();
 
         if( scroll >= pos2+base ){
             //기존 스크롤값에서 box2위치값을 뺴서 다시 0부터 시작되게 설정
             //이때 해당값을 4배로 빨리 증가시킴
             scroll = (scroll-(pos2+base))*4;
 
             var result = 2820 - scroll;
            
             //해당 값보다 작아지면 0으로 고정
             if(result < 0 ) result = 0;  
            console.log(result);

            var bg = scroll/6000;            
 
             if(bg > 0.3 ) bg = 0.3;
 
            //  $(".sub ul li").eq(0).find("path").css({ 
            //      strokeDashoffset :  result1 ,
            //      fill : "rgba(0,0,0,"+bg+")"
            //  });
             $(".sub li").find("path").css({ 
                strokeDashoffset :  result,
                // fill : "rgba(0,0,0,"+bg+")"
            });
            // $(".sub ul li").eq(2).find("path").css({ 
            //      strokeDashoffset :  result3,
            //      fill : "rgba(0,0,0,"+bg+")"
            //  });
            //  $(".sub ul li").eq(3).find("path").css({ 
            //     strokeDashoffset :  result4 ,
            //     fill : "rgba(0,0,0,"+bg+")"
            // });
         }
     })
})