
document.addEventListener("DOMContentLoaded", function () {
    const progressBar = document.getElementById("readingProgress");
    const backToTop = document.getElementById("backToTop");
    const sections = document.querySelectorAll(".lesson-page");
    const sidebarLinks = document.querySelectorAll(".sidebar nav a");

    function updatePage() {
        const scrollTop = window.scrollY;
        const pageHeight = document.documentElement.scrollHeight - window.innerHeight;

        if (progressBar) {
            const progress = pageHeight > 0 ? (scrollTop / pageHeight) * 100 : 0;
            progressBar.style.width = progress + "%";
        }

        if (backToTop) {
            backToTop.style.display = scrollTop > 400 ? "block" : "none";
        }

        let currentSection = "";

        sections.forEach(function (section) {
            if (scrollTop >= section.offsetTop - 160) {
                currentSection = section.id;
            }
        });

        sidebarLinks.forEach(function (link) {
            link.classList.toggle(
                "active",
                link.getAttribute("href") === "#" + currentSection
            );
        });
    }

    sidebarLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                event.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    if (backToTop) {
        backToTop.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    window.addEventListener("scroll", updatePage);
    updatePage();
});
