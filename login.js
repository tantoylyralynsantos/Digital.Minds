
document.addEventListener("DOMContentLoaded", function () {

    // =====================================
    // GET HTML ELEMENTS
    // =====================================

    const loginForm = document.getElementById("loginForm");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    const togglePassword = document.getElementById("togglePassword");
    const formMessage = document.getElementById("loginMessage");

    const rememberMe = document.getElementById("rememberMe");

    const forgotPassword = document.querySelector(
        '.form-options a[href="forgot-password.html"]'
    );


    // =====================================
    // CHECK REQUIRED ELEMENTS
    // =====================================

    if (
        !loginForm ||
        !usernameInput ||
        !passwordInput ||
        !togglePassword ||
        !formMessage
    ) {
        console.error("Login elements are missing. Check login.html.");
        return;
    }

    const loginButton = loginForm.querySelector(
        'button[type="submit"]'
    );


    // =====================================
    // CLEAR OLD LOGIN DATA
    // =====================================

    localStorage.removeItem("webtechUsername");

    usernameInput.value = "";
    passwordInput.value = "";

    if (rememberMe) {
        rememberMe.checked = false;
        rememberMe.disabled = true;
    }


    // =====================================
    // SHOW / HIDE PASSWORD
    // =====================================

    togglePassword.addEventListener("click", function () {

        const show = passwordInput.type === "password";

        passwordInput.type = show ? "text" : "password";

        togglePassword.setAttribute(
            "aria-label",
            show ? "Hide password" : "Show password"
        );

    });


    // =====================================
    // LOGIN AUTHENTICATION
    // =====================================

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const username = usernameInput.value.trim();
        const password = passwordInput.value;

        formMessage.textContent = "";
        formMessage.style.color = "#dc3545";


        // CHECK EMPTY FIELDS
        if (!username || !password) {

            formMessage.textContent =
                "Please enter your username and password.";

            return;
        }


        // =====================================
        // GET REGISTERED ACCOUNTS
        // =====================================

        let accounts = [];

        try {

            accounts = JSON.parse(
                localStorage.getItem("webtechAccounts") || "[]"
            );

            if (!Array.isArray(accounts)) {
                accounts = [];
            }

        } catch (error) {

            accounts = [];

        }


        // =====================================
        // DEMO ACCOUNT
        // =====================================

        const demoAccount = {
            fullName: "Student",
            username: "student",
            email: "student@webtechlearn.com",
            password: "123456"
        };


        // =====================================
        // FIND REGISTERED ACCOUNT
        // =====================================

        const registeredAccount = accounts.find(function (account) {

            if (!account) return false;

            const accountUsername =
                String(account.username || "").toLowerCase();

            const accountEmail =
                String(account.email || "").toLowerCase();

            return (
                (
                    accountUsername === username.toLowerCase() ||
                    accountEmail === username.toLowerCase()
                ) &&
                account.password === password
            );

        });


        // CHECK DEMO ACCOUNT
        const isDemoAccount =
            username.toLowerCase() === demoAccount.username &&
            password === demoAccount.password;


        const account =
            registeredAccount || (isDemoAccount ? demoAccount : null);


        // =====================================
        // INVALID LOGIN
        // =====================================

        if (!account) {

            formMessage.textContent =
                "Incorrect username/email or password.";

            passwordInput.value = "";
            passwordInput.focus();

            return;
        }


        // =====================================
        // SUCCESSFUL LOGIN
        // =====================================

        const studentData = {

            fullName: account.fullName || "Student",

            username: account.username || username,

            email: account.email || ""

        };


        // =====================================
        // SAVE LOGIN SESSION
        // =====================================

        sessionStorage.setItem(
            "webtechLoggedIn",
            "true"
        );

        sessionStorage.setItem(
            "webtechStudent",
            JSON.stringify(studentData)
        );


        // =====================================
        // REDIRECT TO HOMEPAGE
        // =====================================

        if (loginButton) {

            loginButton.disabled = true;
            loginButton.textContent = "Signing In...";

        }

        window.location.replace("index.html");

    });


    // =====================================
    // FORGOT PASSWORD
    // =====================================

    if (forgotPassword) {

        forgotPassword.addEventListener("click", function (event) {

            event.preventDefault();

            alert(
                "Please contact your administrator if you forgot your password."
            );

        });

    }

});
