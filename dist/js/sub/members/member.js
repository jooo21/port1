$(document).ready(function(){
    
    //전송 버튼 클릭시
    $("input[type=submit]").on("click",function(e){  

        if(!isAgree("agree_1","agree_2")) e.preventDefault();
        if(!isName("userName")) e.preventDefault();
        if(!isTxt("userId",5)) e.preventDefault();
        if(!isPwd("pwd1","pwd2")) e.preventDefault();
        if(!isSelect("mobileCarrier") && !isTel("userTel","userTel1","userTel2")) e.preventDefault();
        if(!isEmail("email","email1") && !isSelect("emailaddr")) e.preventDefault();
        if(!isCheck("gender")) e.preventDefault();
        //if(!isDate("birthday")) e.preventDefault();
        
    });

    //check박스 인증함수    
    function isAgree(name1,name2){

        var isAgree1 = $("input[name='"+name1+"']").is(":checked");
        var isAgree2 = $("input[name='"+name2+"']").is(":checked");

        if(isAgree1 && isAgree2){
            $("input[name='"+name1+"']").parent().find("label").removeClass("error");
            $("input[name='"+name1+"']").parent().siblings("textarea").removeClass("error");
            $("input[name='"+name2+"']").parent().find("label").removeClass("error");
            $("input[name='"+name2+"']").parent().siblings("textarea").removeClass("error");
            return true;
        }else {
            alert("이용약관 및 개인정보 이용에 관한 동의가 필요합니다.");
            $("input[name='"+name1+"']").parent().find("label").addClass("error");
            $("input[name='"+name1+"']").parent().siblings("textarea").addClass("error");
            $("input[name='"+name2+"']").parent().find("label").addClass("error");
            $("input[name='"+name2+"']").parent().siblings("textarea").addClass("error");
            return false;
        }        
    }

    //radio 인증함수
    function isCheck(name){

        var isCheck = $("input[name='"+name+"']").is(":checked");

        if(isCheck){
            $("input[name='"+name+"']").parent().find("label").removeClass("error");
            $("input[name='"+name+"']").parent().find("span").removeClass("error");
            return true;
        }else{
            //alert("선택사항입니다. 둘 중 하나를 선택해주세요.");
            $("input[name='"+name+"']").parent().find("span").addClass("error");
            $("input[name='"+name+"']").parent().find("label").addClass("error");
            $("input[name='"+name+"']").parent().find("span").addClass("error");
            return false;
        }  
    }

    //userName 인증함수
    function isName(name){
        var num = /[0-9]/;
        var spc = /[~!@#$%^&*()_+|{}<>?;:=-\]\[]/; 
        var isName = $("input[name='"+name+"']").val();
        var msg = $("input[name='"+name+"']").attr("placeholder");   

        if(isName == ""){
            //alert(msg);
            $("input[name='"+name+"']").parent().find("span").addClass("error");
            $("input[name='"+name+"']").addClass("error");
            return false; 
        }else{
            if (num.test(name) || spc.test(name)){
                //alert("이름에 숫자, 특수문자를 입력할 수 없습니다.");
                $("input[name='"+name+"']").parent().find("span").addClass("error");
                $("input[name='"+name+"']").addClass("error");
                return false;
            }else{
                $("input[name='"+name+"']").removeClass("error");       
                return true; 
            }
        }
    }

    //텍스트 인증함수
    function isTxt(name, len){        
        if(len == undefined) len=5;      

        var txt = $("input[name='"+name+"']").val();  
        //var msg = $("input[name='"+name+"']").attr("placeholder");     

        if(txt ==""){
            //alert(msg);
            $("input[name='"+name+"']").parent().find("span").addClass("error");
            $("input[name='"+name+"']").addClass("error");
            return false;                                   
        }else{ 
            if(txt.length < len ){
                //alert("최소 "+len+"글자 이상 입력하세요");
                $("input[name='"+name+"']").parent().find("span").addClass("error");
                $("input[name='"+name+"']").addClass("error");
                return false;  
            }else{
                $("input[name='"+name+"']").removeClass("error");       
                return true; 
            }                     
        }
    }

    //비밀번호 인증 전용함수 (리턴값 있음 : true, false)
    function isPwd(name1, name2, len){
        if(len==undefined) len=5;
        var pwd1 = $("input[name='"+name1+"']").val(); 
        var pwd2 = $("input[name='"+name2+"']").val();

        var num = /[0-9]/;
        var eng = /[a-zA-Z]/;
        var spc = /[~!@#$%^&*()_+|{}<>?;:=-\]\[]/; 

        var isValidate = false;
        var i=0;

        if(pwd1 === pwd2){
            //삼항연산자
            //조건비교식 ? 조건식이 참일떄 실행할 구간 : 조건식이 거짓일때 실행할 구간;
            // (pwd1.length >= len ) ? i++ : alert("비밀번호는 "+len+"자리 이상 입력하세요"); 
            // (spc.test(pwd1)) ? i++ : alert("비밀번호에 특수문자를 포함하세요");
            // (num.test(pwd1)) ? i++ : alert("비밀번호에 숫자를 포함하세요");
            // (eng.test(pwd1)) ? i++ : alert("비밀번호에 문자를 포함하세요");
            //전체 인증 통과
            // if(i!=4){
            //     $("input[name='"+name1+"']").addClass("error");
            //     $("input[name='"+name2+"']").addClass("error");
            // }else{
            //     $("input[name='"+name1+"']").removeClass("error");
            //     $("input[name='"+name2+"']").removeClass("error");
            //     isValidate = true;
            //     return isValidate; //만약 비밀번호 인증을 통과하면 true값을 반환
            // }

            //전체 인증 통과
            if((pwd1.length >= len ) && (spc.test(pwd1)) && (num.test(pwd1)) && (eng.test(pwd1))){
                $("input[name='"+name1+"']").removeClass("error");
                $("input[name='"+name2+"']").removeClass("error");
                return true;
            }else{
                $("input[name='"+name1+"']").siblings("ul").children("li").addClass("error");
                $("input[name='"+name1+"']").addClass("error");
                $("input[name='"+name2+"']").addClass("error");
                return false;
            }
        }else{
            //alert("두개의 비밀번호를 동일하게 입력해주세요");
            $("input[name='"+name2+"']").parent().find("span").addClass("error");
            $("input[name='"+name1+"']").siblings("ul").children("li").addClass("error");
            $("input[name='"+name1+"']").addClass("error");
            $("input[name='"+name2+"']").addClass("error");
            return isValidate;
        }  
    }

    //휴대폰번호 인증 함수
    function isTel(name1,name2,name3){

        var userTel = $("input[name='"+name1+"']").val(); 
        var userTel1 = $("input[name='"+name2+"']").val(); 
        var userTel2 = $("input[name='"+name3+"']").val(); 

        var num = /[0-9]/;
        var i=0;
      
        // (userTel == "") ? alert("휴대폰 번호를 입력해주세요.") : i++;
        // (userTel.length == 3 && userTel1.length == 4 && userTel2.length == 4) ? i++ : alert("유효한 번호가 아닙니다.");
        // (num.test(userTel) && num.test(userTel1) && num.test(userTel2)) ? i++ : alert("숫자만 입력해주세요.");

        (userTel == "") ? $("input[name='"+name1+"']").parent().find("span").addClass("error") : i++;
        (userTel.length == 3 && userTel1.length == 4 && userTel2.length == 4) ? i++ : $("input[name='"+name1+"']").parent().find("span").addClass("error");
        (num.test(userTel) && num.test(userTel1) && num.test(userTel2)) ? i++ : $("input[name='"+name1+"']").parent().find("span").addClass("error");

        if(i!=3){
            $("input[name='"+name1+"']").parent().find("span").addClass("error");
            $("input[name='"+name1+"']").addClass("error");
            $("input[name='"+name2+"']").addClass("error");
            $("input[name='"+name3+"']").addClass("error");
            return false;
        }else{
            $("input[name='"+name1+"']").removeClass("error");
            $("input[name='"+name2+"']").removeClass("error");
            $("input[name='"+name3+"']").removeClass("error");
            return true;
        }
    }

    //선택박스 인증함수
    function isSelect(name){
        var sel = $("select[name='"+name+"']").children("option:selected").val();
        //var msg = $("select[name='"+name+"']").children("option").eq(0).text();
        
        if(sel == ""){
            //alert(msg);
            $("input[name='"+name+"']").parent().find("span").addClass("error");
            $("select[name='"+name+"']").addClass("error");       
            return false;
        }else{
            $("select[name='"+name+"']").removeClass("error");
            return true;
        }
    }
    
    //이메일 인증함수
    function isEmail(name1,name2){     

        var isEmail1 = $("input[name='"+name1+"']").val(); 
        var isEmail2 = $("input[name='"+name2+"']").val();    

        if(isEmail1 ==""){
            //alert("이메일 아이디를 입력해주세요.");
            $("input[name='"+name1+"']").parent().find("span").addClass("error");
            $("input[name='"+name1+"']").addClass("error");
            $("input[name='"+name2+"']").addClass("error");
            return false;                                   
        }else{
            if(isEmail2 ==""){
                //alert("이메일 주소를 입력해주세요.");
                $("input[name='"+name1+"']").parent().find("span").addClass("error");
                $("input[name='"+name2+"']").addClass("error");
                return false;                                   
            }else{
                $("input[name='"+name1+"']").removeClass("error"); 
                $("input[name='"+name2+"']").removeClass("error");      
                return true; 
            }     
        }                        
    }
/*  
    //생년월일 인증함수
    function isDate(name){

        var date = $("input[name='"+name+"']").is(":checked");

        if(date){
            $("input[name='"+name+"']").removeClass("error");
            return true;
        }else{
            alert("생년월일을 입력해주세요.");
            $("input[name='"+name+"']").addClass("error");
            return false;
        }
    }
*/


});