  let fullname = document.getElementById("fullname");
let password = document.getElementById("password");
let email = document.getElementById("email");
let flag = 1;
function validateFrom(){
   if(fullname.value == ""){
    flag = 0;
    document.getElementById("userError").innerHTML = "User Name is empty"
   }
   else if(fullname.value.length < 3){
    flag = 0;
    document.getElementById("userError").innerHTML = "User Name required min 3 character"
   }
   else {
    flag = 1;
    document.getElementById("userError").innerHTML = "";
   }
   if(password.value == ""){
    flag = 0;
    document.getElementById("passError").innerHTML = "Password is empty";
   }
   else {
    flag = 1;
    document.getElementById("passError").innerHTML = "";
   }
   if(flag) return true;
   else
   return false;
}
