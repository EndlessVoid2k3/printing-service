var user = {
    username:"User123",
    password:"123456789",
}
var error=document.getElementById('error');

function validateLogin(){
    var username=document.getElementById('username').value;
    var password=document.getElementById('password').value;
    if(username==''||password==''){
        error.innerHTML="Chưa nhập tên đăng nhập hoặc mật khẩu";
        return false;
    }
    if(!(username==user.username&&password==user.password)){
        error.innerHTML="Sai tên đăng nhập hoặc mật khẩu";
        return false;
    }
    return true;
}
function deleteLogin(){
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}