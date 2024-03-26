function addUser(){
    var username = document.getElementById("user_name").value;
var password = document.getElementById("password").value;
    if(username === 'PVPL' && password === 'HPCL'){
 window.location = 'index.html'

    }else{
        alert('Invalid Username or Password');
    }
}

addUser();