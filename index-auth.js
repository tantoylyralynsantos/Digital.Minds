
document.addEventListener("DOMContentLoaded", function () {

    const loginButton = document.getElementById("loginNavButton");
    const profileContainer = document.getElementById("profileContainer");
    const profileButton = document.getElementById("profileBtn");
    const profileDropdown = document.getElementById("profileDropdown");
    const logoutButton = document.getElementById("logoutButton");

    const initials = document.getElementById("profileInitials");
    const dropdownInitials = document.getElementById("dropdownInitials");
    const userName = document.getElementById("profileUserName");
    const userEmail = document.getElementById("profileUserEmail");

    // CHECK ELEMENTS
    if (!profileButton || !profileDropdown) {
        console.error("Profile button or dropdown is missing!");
        return;
    }

    // INITIAL DROPDOWN STATE
    profileDropdown.style.display = "none";
    profileDropdown.style.position = "absolute";
    profileDropdown.style.zIndex = "999999";

    // CHECK LOGIN
    const loggedIn = sessionStorage.getItem("webtechLoggedIn") === "true";

    let student = {};

    try {
        student = JSON.parse(sessionStorage.getItem("webtechStudent")) || {};
    } catch (error) {
        student = {};
    }

    if (loggedIn) {

        if (loginButton) loginButton.style.display = "none";
        if (profileContainer) profileContainer.style.display = "block";

        const name = student.fullName || student.username || "Student";
        const email = student.email || "No email available";

        const userInitials = name
            .split(" ")
            .filter(Boolean)
            .map(word => word.charAt(0))
            .join("")
            .substring(0, 2)
            .toUpperCase();

        if (initials) initials.textContent = userInitials;
        if (dropdownInitials) dropdownInitials.textContent = userInitials;
        if (userName) userName.textContent = name;
        if (userEmail) userEmail.textContent = email;

    } else {

        if (loginButton) loginButton.style.display = "inline-flex";
        if (profileContainer) profileContainer.style.display = "none";

    }

    // PROFILE BUTTON
    profileButton.addEventListener("click", function (event) {

        event.preventDefault();
        event.stopPropagation();

        const isVisible = profileDropdown.style.display === "block";

        profileDropdown.style.display = isVisible ? "none" : "block";

        profileButton.setAttribute(
            "aria-expanded",
            String(!isVisible)
        );

    });

    // PREVENT DROPDOWN FROM CLOSING WHEN CLICKED INSIDE
    profileDropdown.addEventListener("click", function (event) {
        event.stopPropagation();
    });

    // CLOSE WHEN CLICKING OUTSIDE
    document.addEventListener("click", function () {

        profileDropdown.style.display = "none";
        profileButton.setAttribute("aria-expanded", "false");

    });

    // CLOSE USING ESCAPE
    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {
            profileDropdown.style.display = "none";
            profileButton.setAttribute("aria-expanded", "false");
        }

    });

    // LOGOUT
    if (logoutButton) {

        logoutButton.addEventListener("click", function () {

            if (confirm("Are you sure you want to logout?")) {

                sessionStorage.removeItem("webtechLoggedIn");
                sessionStorage.removeItem("webtechStudent");

                window.location.replace("index.html");

            }

        });

    }

});
