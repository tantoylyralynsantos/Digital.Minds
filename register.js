
document.addEventListener("DOMContentLoaded", function () {

    const registerForm = document.getElementById("registerForm");
    const formMessage = document.getElementById("formMessage");
    const registerButton = document.getElementById("registerButton");

    const fullName = document.getElementById("fullName");
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const agreeTerms = document.getElementById("agreeTerms");

    // Show / Hide Password
    document.querySelectorAll(".toggle-password").forEach(function (button) {

        button.addEventListener("click", function () {

            const target = document.getElementById(button.dataset.target);

            if (target.type === "password") {
                target.type = "text";
                button.setAttribute("aria-label", "Hide password");
            } else {
                target.type = "password";
                button.setAttribute("aria-label", "Show password");
            }

        });

    });

    // Register Account
    registerForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const nameValue = fullName.value.trim();
        const usernameValue = username.value.trim();
        const emailValue = email.value.trim().toLowerCase();
        const passwordValue = password.value;
        const confirmValue = confirmPassword.value;

        formMessage.textContent = "";
        formMessage.style.color = "#d64545";

        if (!nameValue || !usernameValue || !emailValue || !passwordValue || !confirmValue) {
            formMessage.textContent = "Please complete all fields.";
            return;
        }

        if (usernameValue.length < 4) {
            formMessage.textContent = "Username must be at least 4 characters.";
            return;
        }

        if (passwordValue.length < 6) {
            formMessage.textContent = "Password must be at least 6 characters.";
            return;
        }

        if (passwordValue !== confirmValue) {
            formMessage.textContent = "Passwords do not match.";
            return;
        }

        if (!agreeTerms.checked) {
            formMessage.textContent = "Please agree to the registration terms.";
            return;
        }

        let accounts = [];

        try {
            accounts = JSON.parse(localStorage.getItem("webtechAccounts") || "[]");
        } catch (error) {
            formMessage.textContent = "Unable to read saved accounts. Please try again.";
            return;
        }

        if (!Array.isArray(accounts)) {
            accounts = [];
        }

        // Check existing username and email
        const existingAccount = accounts.find(function (account) {

            return account.username.toLowerCase() === usernameValue.toLowerCase()
                || account.email.toLowerCase() === emailValue;

        });

        if (existingAccount) {
            formMessage.textContent = "Username or email is already registered.";
            return;
        }

        // Create account
        const newAccount = {
            fullName: nameValue,
            username: usernameValue,
            email: emailValue,
            password: passwordValue
        };

        accounts.push(newAccount);

        try {
            localStorage.setItem("webtechAccounts", JSON.stringify(accounts));
        } catch (error) {
            formMessage.textContent = "Unable to save your account in this browser.";
            return;
        }

        formMessage.style.color = "#16845b";
        formMessage.textContent = "Account created successfully! Redirecting to login...";

        registerButton.disabled = true;
        registerButton.textContent = "Account Created";

        setTimeout(function () {
            window.location.href = "login.html";
        }, 1500);

    });

});
