// setup variables
const pass = document.getElementById("pass");
const passC = document.getElementById("passC");
const passCError = document.getElementById("passwordC-error");
const form = document.getElementById("signup-form");

// event listeners
passC.addEventListener("input", e => {
    if (passC.value !== pass.value) {
        passCError.textContent = "Passwords do not match";
        passC.setCustomValidity("Invalid field.");
    } else {
        passCError.textContent = "";
        passC.setCustomValidity("");
    }
});