var hiMassage = document.getElementById('welcomMassage');
var logoutBtn = document.getElementById('logoutBtn');



if(localStorage.getItem('User Name') != null){
    hiMassage.innerHTML = `Welcom ${localStorage.getItem('User Name')}`
}

logoutBtn.addEventListener('click', function(){
    window.location.href = ('index.html');
    
})