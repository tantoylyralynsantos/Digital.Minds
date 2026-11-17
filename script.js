
document.addEventListener("DOMContentLoaded", function () {

    // =====================================
    // MOBILE NAVIGATION
    // =====================================

    const menuToggle = document.getElementById("menuToggle");
    const navigation = document.getElementById("navigation");

    const lessonsToggle = document.getElementById("lessonsToggle");
    const lessonsDropdown = document.querySelector(".nav-dropdown");

    if (menuToggle && navigation) {

        menuToggle.addEventListener("click", function () {

            const isOpen = navigation.classList.toggle("show");

            menuToggle.setAttribute("aria-expanded", isOpen);
            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Close navigation" : "Open navigation"
            );

            menuToggle.textContent = isOpen ? "✕" : "☰";

        });

    }


    // =====================================
    // LESSONS DROPDOWN
    // =====================================

    if (lessonsToggle && lessonsDropdown) {

        lessonsToggle.addEventListener("click", function (event) {

            event.preventDefault();
            event.stopPropagation();

            const isOpen = lessonsDropdown.classList.toggle("open");

            lessonsToggle.setAttribute("aria-expanded", isOpen);

        });

    }


    // =====================================
    // CLOSE MOBILE MENU
    // =====================================

    function closeMobileMenu() {

        if (navigation) {
            navigation.classList.remove("show");
        }

        if (menuToggle) {
            menuToggle.textContent = "☰";
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation");
        }

    }


    // =====================================
    // CLOSE LESSONS DROPDOWN
    // =====================================

    function closeLessonsDropdown() {

        if (lessonsDropdown) {
            lessonsDropdown.classList.remove("open");
        }

        if (lessonsToggle) {
            lessonsToggle.setAttribute("aria-expanded", "false");
        }

    }


    // =====================================
    // YEAR LEVEL PASSWORD LOGIN
    // =====================================

    const yearAccounts = {

        "2nd": {
            password: "2ndyr",
            title: "2nd Year Access"
        },

        "3rd": {
            password: "3rdyr",
            title: "3rd Year Access"
        }

    };

    const loginOverlay = document.getElementById("loginOverlay");
    const closeLogin = document.getElementById("closeLogin");
    const loginForm = document.getElementById("yearLoginForm");

    const loginTitle = document.getElementById("loginTitle");
    const passwordInput = document.getElementById("loginPassword");
    const togglePassword = document.getElementById("togglePassword");
    const loginError = document.getElementById("loginError");

    let selectedYear = "";
    let selectedYearLink = "";


    // =====================================
    // OPEN YEAR LEVEL LOGIN
    // =====================================

    function openYearLogin(link) {

        const year = link.getAttribute("data-protected-year");
        const destination = link.getAttribute("href");

        if (!yearAccounts[year] || !destination) {
            return;
        }

        if (
            !loginOverlay ||
            !loginForm ||
            !passwordInput ||
            !loginTitle ||
            !loginError
        ) {
            console.error("Login modal elements are missing.");
            return;
        }

        selectedYear = year;
        selectedYearLink = destination;

        loginTitle.textContent = yearAccounts[year].title;

        loginForm.reset();

        loginError.textContent = "";
        loginError.style.color = "#d13c3c";

        passwordInput.type = "password";

        if (togglePassword) {
            togglePassword.textContent = "Show";
            togglePassword.setAttribute("aria-label", "Show password");
        }

        // IMPORTANT: Use SHOW to match the CSS

        loginOverlay.classList.add("show");
        loginOverlay.setAttribute("aria-hidden", "false");

        document.body.style.overflow = "hidden";

        closeLessonsDropdown();
        closeMobileMenu();

        setTimeout(function () {
            passwordInput.focus();
        }, 150);

    }


    // =====================================
    // CONNECT ALL YEAR LEVEL LINKS
    // =====================================

    document.querySelectorAll("[data-protected-year]").forEach(function (link) {

        link.addEventListener("click", function (event) {

            event.preventDefault();

            openYearLogin(this);

        });

    });


    // =====================================
    // SHOW / HIDE PASSWORD
    // =====================================

    if (togglePassword && passwordInput) {

        togglePassword.addEventListener("click", function () {

            const isHidden = passwordInput.type === "password";

            passwordInput.type = isHidden ? "text" : "password";

            togglePassword.textContent = isHidden ? "Hide" : "Show";

            togglePassword.setAttribute(
                "aria-label",
                isHidden ? "Hide password" : "Show password"
            );

        });

    }


    // =====================================
    // VERIFY PASSWORD
    // =====================================

    if (loginForm) {

        loginForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const account = yearAccounts[selectedYear];

            if (!account || !selectedYearLink) {

                loginError.textContent =
                    "Please select a year level first.";

                return;

            }

            const enteredPassword = passwordInput.value;

            if (enteredPassword === account.password) {

                loginError.style.color = "#16845b";

                loginError.textContent =
                    "Access granted! Opening lessons...";

                const destination = selectedYearLink;

                setTimeout(function () {

                    window.location.href = destination;

                }, 500);

            } else {

                loginError.style.color = "#d13c3c";

                loginError.textContent =
                    "Incorrect password. Please try again.";

                passwordInput.value = "";
                passwordInput.focus();

            }

        });

    }


    // =====================================
    // CLOSE LOGIN MODAL
    // =====================================

    function hideLogin() {

        if (!loginOverlay) return;

        loginOverlay.classList.remove("show");

        loginOverlay.setAttribute("aria-hidden", "true");

        document.body.style.overflow = "";

        if (loginForm) {
            loginForm.reset();
        }

        if (loginError) {
            loginError.textContent = "";
        }

        if (passwordInput) {
            passwordInput.type = "password";
        }

        if (togglePassword) {
            togglePassword.textContent = "Show";
            togglePassword.setAttribute("aria-label", "Show password");
        }

        selectedYear = "";
        selectedYearLink = "";

    }


    if (closeLogin) {
        closeLogin.addEventListener("click", hideLogin);
    }


    // =====================================
    // CLOSE WHEN CLICKING OUTSIDE MODAL
    // =====================================

    if (loginOverlay) {

        loginOverlay.addEventListener("click", function (event) {

            if (event.target === loginOverlay) {
                hideLogin();
            }

        });

    }


    // =====================================
    // CLOSE USING ESCAPE KEY
    // =====================================

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            if (loginOverlay && loginOverlay.classList.contains("show")) {
                hideLogin();
            }

            closeLessonsDropdown();

        }

    });


    // =====================================
    // CLOSE DROPDOWN WHEN CLICKING OUTSIDE
    // =====================================

    document.addEventListener("click", function (event) {

        if (
            lessonsDropdown &&
            !lessonsDropdown.contains(event.target) &&
            !lessonsToggle?.contains(event.target)
        ) {
            closeLessonsDropdown();
        }

    });


    // =====================================
    // CLOSE MENU AFTER CLICKING NORMAL LINK
    // =====================================

    if (navigation) {

        navigation.querySelectorAll("a:not([data-protected-year])").forEach(function (link) {

            link.addEventListener("click", function () {

                closeMobileMenu();
                closeLessonsDropdown();

            });

        });

    }


    // =====================================
    // RESET MENU WHEN RESIZING SCREEN
    // =====================================

    window.addEventListener("resize", function () {

        if (window.innerWidth > 760) {

            closeMobileMenu();
            closeLessonsDropdown();

        }

    });

});
const profileBtn = document.getElementById("profileBtn");
const profileDropdown = document.getElementById("profileDropdown");

profileBtn.addEventListener("click", function (event) {
    event.stopPropagation();

    profileDropdown.classList.toggle("show");
});

document.addEventListener("click", function (event) {
    if (!profileDropdown.contains(event.target) &&
        !profileBtn.contains(event.target)) {

        profileDropdown.classList.remove("show");
    }
});
