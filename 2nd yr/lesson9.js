document.addEventListener("DOMContentLoaded", function () {

    const sections = document.querySelectorAll(".content-section[id]");
    const sidebarLinks = document.querySelectorAll(".sidebar-nav a");
    const pageCount = document.getElementById("pageCount");
    const currentSection = document.getElementById("currentSection");
    const backToTop = document.getElementById("backToTop");

    // BACK TO TOP
    if (backToTop) {

        window.addEventListener("scroll", function () {
            if (window.scrollY > 350) {
                backToTop.style.display = "flex";
            } else {
                backToTop.style.display = "none";
            }
        });

        backToTop.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }


    // SIDEBAR NAVIGATION AND PAGE INDICATOR
    function updateCurrentSection() {

        let activeIndex = 0;

        sections.forEach(function (section, index) {
            const position = section.getBoundingClientRect().top;

            if (position <= 220) {
                activeIndex = index;
            }
        });

        const activeSection = sections[activeIndex];

        if (activeSection) {

            const pageNumber = String(activeIndex + 1).padStart(2, "0");

            if (pageCount) {
                pageCount.textContent =
                    "PAGE " + (activeIndex + 1) + " OF " + sections.length;
            }

            if (currentSection) {
                const heading = activeSection.querySelector("h2");

                if (heading) {
                    currentSection.textContent =
                        heading.textContent.replace(/^\d+\.\s*/, "");
                }
            }

            sidebarLinks.forEach(function (link) {

                link.classList.remove("active");

                if (link.getAttribute("href") === "#" + activeSection.id) {
                    link.classList.add("active");
                }

            });
        }
    }

    window.addEventListener("scroll", updateCurrentSection);
    window.addEventListener("resize", updateCurrentSection);


    // SMOOTH SIDEBAR SCROLL
    sidebarLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (!targetId || !targetId.startsWith("#")) {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

                history.replaceState(null, "", targetId);
            }
        });

    });


    // DARK MODE
    const savedTheme = localStorage.getItem("ebookTheme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    } else if (savedTheme === "light") {
        document.body.classList.remove("dark-mode");
    }


    updateCurrentSection();

});