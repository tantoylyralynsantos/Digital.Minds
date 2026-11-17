
document.addEventListener("DOMContentLoaded", function () {

    // =====================================
    // SIDEBAR NAVIGATION
    // =====================================

    const sidebarLinks = Array.from(
        document.querySelectorAll('.sidebar nav a[href^="#"]')
    );

    const sections = sidebarLinks
        .map(function (link) {
            const targetId = link.getAttribute("href");
            return document.querySelector(targetId);
        })
        .filter(Boolean);

    sidebarLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {

            const targetId = link.getAttribute("href");
            const target = document.querySelector(targetId);

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            history.replaceState(null, "", targetId);
        });
    });

    function updateActiveLink() {

        if (!sections.length) return;

        let currentId = sections[0].id;

        sections.forEach(function (section) {

            const top = section.getBoundingClientRect().top;

            if (top <= 180) {
                currentId = section.id;
            }
        });

        sidebarLinks.forEach(function (link) {

            const isActive =
                link.getAttribute("href") === "#" + currentId;

            link.classList.toggle("active", isActive);

            if (isActive) {
                link.setAttribute("aria-current", "location");
            } else {
                link.removeAttribute("aria-current");
            }
        });
    }

    window.addEventListener("scroll", updateActiveLink, {
        passive: true
    });

    window.addEventListener("resize", updateActiveLink);

    updateActiveLink();


    // =====================================
    // BACK TO TOP
    // =====================================

    const backToTop = document.getElementById("backToTop");

    if (backToTop) {

        function toggleBackToTop() {

            backToTop.classList.toggle(
                "show",
                window.scrollY > 300
            );
        }

        window.addEventListener("scroll", toggleBackToTop, {
            passive: true
        });

        toggleBackToTop();

        backToTop.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });
    }

});
/* =====================================
   DOWNLOAD CHAPTER 8 AS PDF
===================================== */

document.addEventListener("DOMContentLoaded", function () {

    const downloadPDF = document.getElementById("downloadPDF");

    if (downloadPDF) {

        downloadPDF.addEventListener("click", function () {

            const originalTitle = document.title;

            document.title = "Chapter 8 - User Interface Design and Accessibility";

            window.print();

            setTimeout(function () {
                document.title = originalTitle;
            }, 1000);

        });

    }

});
