
document.addEventListener("DOMContentLoaded", function () {

    const logoutBtn = document.getElementById("logoutBtn");

    // CHECK IF USER IS LOGGED IN
    if (sessionStorage.getItem("webtechLoggedIn") !== "true") {
        window.location.replace("./login.html");
        return;
    }

    // LOGOUT BUTTON
    if (logoutBtn) {
        logoutBtn.addEventListener("click", function () {

            const confirmLogout = confirm(
                "Are you sure you want to log out?"
            );

            if (!confirmLogout) {
                return;
            }

            // CLEAR LOGIN SESSION ONLY
            sessionStorage.removeItem("webtechLoggedIn");
            sessionStorage.removeItem("webtechStudent");

            // KEEP REGISTERED ACCOUNTS
            window.location.replace("./login.html");

        });
    }

});
