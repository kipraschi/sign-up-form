const password1 = document.querySelector("#password");
const password2 = document.querySelector("#password-conf");
const inputs = document.querySelectorAll("input");
const passwordError = document.querySelector("#password-conf + div.error-message");

Array.from(inputs).forEach((field) =>
	field.addEventListener("focusout", validate)
);

function validatePasswords() {
	if (password1.value == password2.value && !password1.validity.valueMissing) {
		password1.setCustomValidity("");
		password1.className = "filled";
		password2.setCustomValidity("");
		password2.className = "filled";
        passwordError.textContent = "";

	} else {
        let errorMessage = "* Passwords do not match";
		password1.setCustomValidity(errorMessage);
		password1.className = "error";
		password2.setCustomValidity(errorMessage);
		password2.className = "error";
        passwordError.textContent = errorMessage;
	}
}

function validate() {
	if (this.type == "password") validatePasswords();

	this.validity.valid
		? (this.className = "filled")
		: (this.className = "error");
}
