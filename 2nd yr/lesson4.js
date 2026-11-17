
document.addEventListener("DOMContentLoaded", function () {

    const backToTop = document.getElementById("backToTop");
    const progressBar = document.getElementById("readingProgress");
    const sidebarLinks = document.querySelectorAll(".sidebar nav a");
    const sections = document.querySelectorAll(".content-section");

    // READING PROGRESS
    function updateProgress() {
        const scrollTop = window.scrollY;
        const pageHeight = document.documentElement.scrollHeight - window.innerHeight;

        const progress = pageHeight > 0
            ? (scrollTop / pageHeight) * 100
            : 0;

        progressBar.style.width = progress + "%";
    }

    // BACK TO TOP BUTTON
    function toggleBackToTop() {
        if (window.scrollY > 400) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    }

    backToTop.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // ACTIVE SIDEBAR LINK
    function updateActiveLink() {
        let currentSection = "";

        sections.forEach(function (section) {
            const sectionTop = section.offsetTop - 150;

            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute("id");
            }
        });

        sidebarLinks.forEach(function (link) {
            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + currentSection) {
                link.classList.add("active");
            }
        });
    }

    // SCROLL EVENTS
    window.addEventListener("scroll", function () {
        updateProgress();
        toggleBackToTop();
        updateActiveLink();
    });

    // SIDEBAR SMOOTH NAVIGATION
    sidebarLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            const targetId = this.getAttribute("href");

            if (targetId && targetId.startsWith("#")) {
                const target = document.querySelector(targetId);

                if (target) {
                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        });
    });

    updateProgress();
    toggleBackToTop();
    updateActiveLink();

});
