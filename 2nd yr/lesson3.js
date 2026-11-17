
document.addEventListener("DOMContentLoaded", function () {

    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".content-section[id]");
    const backToTop = document.getElementById("backToTop");

    // SMOOTH SCROLLING
    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            const targetId = this.getAttribute("href");

            if (targetId && targetId.startsWith("#")) {
                event.preventDefault();

                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                    navLinks.forEach(function (nav) {
                        nav.classList.remove("active");
                    });

                    this.classList.add("active");
                }
            }
        });
    });

    // ACTIVE SIDEBAR LINK WHILE SCROLLING
    function updateActiveLink() {
        let currentSection = "";

        sections.forEach(function (section) {
            const sectionTop = section.offsetTop - 150;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(function (link) {
            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + currentSection) {
                link.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", updateActiveLink);

    // BACK TO TOP BUTTON
    window.addEventListener("scroll", function () {
        if (window.scrollY > 400) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }
    });

    backToTop.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // IMAGE FALLBACK IF AN IMAGE CANNOT LOAD
    const lessonImages = document.querySelectorAll(".lesson-figure img");

    lessonImages.forEach(function (img) {
        img.addEventListener("error", function () {
            this.style.display = "none";

            const caption = this.parentElement.querySelector("figcaption");

            if (caption) {
                caption.textContent = "Image unavailable. Please check your internet connection.";
            }
        });
    });

});
