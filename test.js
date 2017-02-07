function isEmailEmpty () {
    console.log("test");
    var emailField = document.getElementById('email');
    if (emailField.value === '') {
        return true;
    } else {
        return false;
    }
}

var emailEmptyAlert = isEmailEmpty();
console.log(emailEmptyAlert);
if (emailEmptyAlert === true) {
    alert("Please enter your email");
    document.getElementById('email').focus();
};