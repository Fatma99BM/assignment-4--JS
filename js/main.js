
var loginEmail = document.getElementById('emailInput');
var loginPassword = document.getElementById('passwordInput');
var loginBtn = document.getElementById('loginBtn');
var userArray = [];

if(localStorage.getItem('Login Data of User') != null){
    userArray = JSON.parse(localStorage.getItem('Login Data of User'))
}

loginBtn.addEventListener('click' , function(){
    login();
})

function login(){
    if (loginEmail.value == ""  || loginPassword.value == "") {
        document.getElementById('myErrorMassage').classList.remove('d-none');
        return false;
    }
    for(var i=0; i < userArray.length; i++){
        if(userArray[i].userEmail.toLowerCase() == loginEmail.value.toLowerCase() 
        && userArray[i].userPassword.toLowerCase() == loginPassword.value.toLowerCase() ){
               localStorage.setItem("User Name" , userArray[i].userName);
               window.location.href = ('home.html');
            //    loginBtn.setAttribute('href' , 'C:\Route\seasion 1\assignment JS 4\home.html')
        }
        else{
            document.getElementById('wrongMassage').classList.remove('d-none');
            document.getElementById('myErrorMassage').classList.add('d-none');
        }
    }
}







