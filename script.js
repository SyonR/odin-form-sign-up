const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm_password");
const form = document.querySelector("form");


form.addEventListener("submit", (e) => {
    if (confirmPassword.value != password.value) {
        confirmPassword.setCustomValidity("Passwords don't match");
        confirmPassword.reportValidity();
        e.preventDefault();
    }
});
