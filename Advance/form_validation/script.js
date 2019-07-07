function validate() {
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    var repassword = document.getElementById("repassword");
    var valid = true;
    if(username.value.length == 0) {
        username.nextElementSibling.innerHTML = "Username cannot be empty";
        valid =  false;
    }
    if(password.value.length < 8) {
        password.nextElementSibling.innerHTML = "Password must be of 8 characters";
        valid = false;
    }
    if(password.value != repassword.value) {
        repassword.nextElementSibling.innerHTML = "Password must be same";
        valid = false;
    }
    return valid;
}; 