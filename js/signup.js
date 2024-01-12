var nameInput = document.getElementById("nameInput");
var emailInput = document.getElementById("emailInput");
var passwordInput = document.getElementById("passwordInput");
var dataOfuser = [];
var signupBtn = document.getElementById('signupBtn');


function addUserData(){
    if (validationName()&& validationEmail()&& validationPassword()) {
        document.getElementById('errorMassage').classList.add('d-none');
        document.getElementById('successMassage').classList.remove('d-none');
        var userData = {
            userName: nameInput.value,
            userEmail:emailInput.value,
            userPassword:passwordInput.value
        }
        dataOfuser.push(userData);
        clearUserData();
        localStorage.setItem("Login Data of User" , JSON.stringify(dataOfuser))
    }else{
        document.getElementById('errorMassage').classList.remove('d-none');
    }
    
}

function clearUserData(){
    nameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
}
signupBtn.addEventListener('click', function(){
    addUserData()
})

function validationName(){
    var regexName = /^[a-z]{3,12}$/;
    var text = nameInput.value;
    if (regexName.test(text)) {
        return true;
    }
    else{
        return false;
    }
}
function validationEmail(){
    var regexEmail = /^[a-z]{3,7}[0-9]{2,4}@[a-z]{3,7}\.com$/i;
    var text = emailInput.value;
    if (regexEmail.test(text)) {
        return true;
    }
    else{
        return false;
    }
}
function validationPassword(){
    var regexPassword = /^([a-z]{3,}[0-9]{2,}|[0-9]{2,}[a-z]{3,})$/;
    var text = passwordInput.value;
    if (regexPassword.test(text)) {
        return true;
    }
    else{
        return false;
    }
}