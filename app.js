/* Fill your code*/
function formValidate(){
    var name=document.forms["RegForm"]["Name"];
    var email=document.forms["RegForm"]["Email"];
    var phone=document.forms["RegForm"]["phone"];
    var password=document.forms["RegForm"]["Password"];
    var cpassword =document.forms["RegForm"]["cPassword"];
    var address=document.forms["RegForm"]["Address"];

var errname=document.getElementById("name");
var erremail=document.getElementById("email");
var errphone=document.getElementById("phone");
var erraddress=document.getElementById("address");
var errpwd=document.getElementById("pwd");
var errcpwd=document.getElementById("cpwd")

if(name.value.length<4){
    errname.innerText="atleast 8 characters required";
    name.focus();
    return false;
}else{
    errname.innerText="";
}

if(address.value==""){
    erraddress.innerText="address cannot be empty";
    address.focus();
    return false;
}else{
   erraddress.innerText="";
}

if(email.value==""){
    erremail.innerText="email cannot be empty";
    email.focus();
    return false;
}

else{
    erremail.innerText="";
    
}

if(password.value==""){
    errpwd.innerText="Password cannot be empty"
    password.focus();
    return false ;
}else{
    errpwd.innerText="";
}

if(cpassword.value==""){
    errcpwd.innerText="Password cannot be empty"
    cpassword.focus();
    return false ;
}else{
    errcpwd.innerText="";
}
if(phone.value==""){
    errphone.innerText="phone feild cannot be empty"
    phone.focus();
    return false;
}else{
    errphone.innerText="";
    
}
return true;



}