$(document).ready(function(){
    $("input[type=submit]").on("click",function(e){ 
        if(!isCheck("check")) e.preventDefault();
        if(!isTxt("id") || !isSelect("id")) e.preventDefault();
        if(!isPwd("pwd1","pwd2")) e.preventDefault();  
        if(!isTxt("name")) e.preventDefault();
        if(!isTxt("birth")) e.preventDefault();     
        if(!isSelect("gender")) e.preventDefault();
        if(!isTxt("phone")) e.preventDefault();
        if(!isSelect("marriage")) e.preventDefault();
        if(!isTxt("anniver")) e.preventDefault();
        if(!isCheck("route")) e.preventDefault();
        
    });    
    // $("#셀렉트박스ID option:selected").val();
    // $("span[name=셀렉트박스name]").text();
    $("select[name=id]").on("change",function(){
        var idval = $(this).val();
        $(".idMail").text(idval);
         
    })
    
    //Txt
    function isTxt(name, len){        
        if(len == undefined) len=5;      
       var abc =$($("[name = '"+name+"']"))[0];
        console.log(abc);
        var result = $(abc).is("textarea");
        console.log(result);
        var txt = $("[name='"+name+"']").val();  
        var msg = $("[name='"+name+"']").attr("placeholder");     

        if(txt ==""){
            // alert(msg);
            $("[name='"+name+"']").addClass("error");
            $(".alert").addClass("error");
            return false;                                   
        }else{ 
            if(txt.length < len ){
                alert("최소 "+len+"글자 이상 입력하세요");
                $("[name='"+name+"']").addClass("error");
                $(".alert").addClass("error");
                return false;  
            }else{
                $("[name='"+name+"']").removeClass("error");
                $(".alert").removeClass("error");       
                return true; 
            }                     
        }
    }
 
    //pwd
    function isPwd(name1, name2, len){
        if(len==undefined) len=5;
        var pwd1 = $("input[name='"+name1+"']").val(); 
        var pwd2 = $("input[name='"+name2+"']").val();

        var num = /[0-9]/;
        var eng = /[a-zA-Z]/;
        var spc = /[~!@#$%^&*()_+|{}<>?;:=-\]\[]/;           
        
        var i=0;  

        if(pwd1 === pwd2){           
            (pwd1.length >= len ) ? i++ : alert("비밀번호는 "+len+"자리 이상 입력하세요");
            // (spc.test(pwd1)) ? i++ : alert("비밀번호에 특수문자를 포함하세요");
            // (num.test(pwd1)) ? i++ : alert("비밀번호에 숫자를 포함하세요");
            // (eng.test(pwd1)) ? i++ : alert("비밀번호에 문자를 포함하세요");  

            if(i!=4){               
                $("input[name='"+name1+"']").addClass("error");
                $("input[name='"+name2+"']").addClass("error");       
            }else{
                $("input[name='"+name1+"']").removeClass("error");
                $("input[name='"+name2+"']").removeClass("error");
            }
        }else{
            // alert("두개의 비밀번호를 동일하게 입력해주세요");
            $("input[name='"+name1+"']").addClass("error");
            $("input[name='"+name2+"']").addClass("error");
        } 
    }
    //check radio 
    function isCheck(name){
        var isCheck = $("input[name='"+name+"']").is(":checked");
        var msg = $("input[name='"+name+"']").parent().siblings(".alert").text();

        if(isCheck){
            $("input[name='"+name+"']").parent().siblings(".alert").removeClass("error");
            return true;
        }else {
            // alert(msg);
            $("input[name='"+name+"']").parent().siblings(".alert").addClass("error");
            return false;
        }        
    }
    //select
    function isSelect(name){
        var sel = $("select[name='"+name+"']").children("option:selected").val();
        var msg = $("select[name='"+name+"']").children("option").eq(0).text();
        
        if(sel == ""){
            // alert(msg);
            $("select[name='"+name+"']").addClass("error");       
            return false;
        }else{
            $("select[name='"+name+"']").removeClass("error");
            return true;
        }
    }


});