var zh=document.getElementById('username');
var mm=document.getElementById('password');
function login(){
    if(zh.value==""||mm.value==""){
        alert("账号或密码不能为空");
        return false;
    }
    else if(zh.value!="123"||mm.value!="123"){    
        alert("账号或密码错误(可以选择游客登录)");
        return false;
    }
    else if(zh.value=="123"||mm.value=="123"){    
        window.location.href='index.html';
        return false;
    }
}

