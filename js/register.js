$(document).ready(function(){
    AOS.init({
      duration: 1200,
    })
  });

var letters = /^[A-Za-z ]+$/;
var re = /\S+@\S+\.\S+/;
var name;
var email;
var password;
var address;
var country;
var chkd;

function count(str) { 
    return str.split(" ").length;
}

function valform(){
    var checkboxs = document.getElementsByName("package");
    var okay=false;
    for(var i=0,l=checkboxs.length;i<l;i++)
    {
        if(checkboxs[i].checked)
        {
            okay=true;
            break;
        }
    }
}

function validation(){
    name = document.getElementById('name').value;
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;
    address = document.getElementById('address').value;
    country = document.getElementById('country');
    chkd = document.formm.painting.checked || document.formm.drawing.checked||document.formm.photograph.checked|| document.formm.craft.checked || document.formm.other.checked
    if(name.length < 5){
        document.getElementById("alert").innerHTML = 'Name Must be More Than 5 Character Length';
        return false;
    }
    else if(!letters.test(name)){
        document.getElementById("alert").innerHTML = 'Name Must be all Alphabet';
        return false;
    }
    else if(!re.test(email)){
        document.getElementById("alert").innerHTML = 'Please Provide a Correct Email';
        return false;
    }
    else if(password.length < 8){
        document.getElementById("alert").innerHTML = 'Password Must be More Than 8 Characters Length';
        return false;
    }
    else if(country.selectedIndex == 0){
        document.getElementById("alert").innerHTML = 'Please Select a Country';
        return false;
    }
    else if(count(address) < 5){
        document.getElementById("alert").innerHTML = 'Address Must be Minimal 5 Words';
        return false;
    }
    else if(!chkd){
        document.getElementById("alert").innerHTML = 'You Must At Least Check One Checkbox';
        return false;
    }
    else{
        alert("Your account has been created");
        return true;
    }
}