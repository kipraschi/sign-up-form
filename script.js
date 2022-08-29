const password1 = document.querySelector('#password');
const password2 = document.querySelector('#password-conf');

password2.addEventListener("input", validatePasswords);
password1.addEventListener("input", validatePasswords);


function validatePasswords() {
    if (password1.value == password2.value) {
        password1.setCustomValidity("");
        password2.setCustomValidity("");
    }
    else {
        password1.setCustomValidity("Error");
        password2.setCustomValidity("Error");
    }
}