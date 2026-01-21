const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const form = document.querySelector("form");

confirmPassword.addEventListener("input", () => {
    confirmPassword.setCustomValidity("");
});

form.addEventListener("submit", (e) => {
    if (confirmPassword.value != password.value) {
        confirmPassword.setCustomValidity("Passwords don't match");
        confirmPassword.reportValidity();
        e.preventDefault();
    }
});