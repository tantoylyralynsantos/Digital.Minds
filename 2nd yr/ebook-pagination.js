
document.addEventListener("DOMContentLoaded", function () {

    const main = document.querySelector(".main-content");

    if (!main) return;

    // Support both Chapter 6 and other chapter layouts.
    const banner = main.querySelector(
        ":scope > .chapter-banner, :scope > .lesson-banner"
    );

    const sections = Array.from(
        main.querySelectorAll(
            ":scope > .content-card, :scope > .content-section"
        )
    );

    if (sections.length === 0) return;

    // Create pages.
    const pages = [];

    // Page 1 contains the banner and introduction.
    if (banner) {
        pages.push([banner, sections[0]]);
    } else {
        pages.push([sections[0]]);
    }

    // Each remaining section becomes a separate page.
    sections.slice(1).forEach(section => {
        pages.push([section]);
    });

    const lessonNavigation = main.querySelector(".lesson-navigation");
    const footer = document.querySelector(".page-footer");

    let currentPage = 0;

    // Create pagination controls.
    const pagination = document.createElement("div");
    pagination.className = "ebook-pagination";

    pagination.innerHTML = `
        <button type="button" class="page-button" id="previousPage">
            ← Previous Page
        </button>

        <span class="page-indicator" id="pageIndicator">
            Page 1 of ${pages.length}
        </span>

        <button type="button" class="page-button" id="nextPage">
            Next Page →
        </button>
    `;

    // Place pagination before lesson navigation.
    if (lessonNavigation) {
        main.insertBefore(pagination, lessonNavigation);
    } else {
        main.appendChild(pagination);
    }

    const previousButton = pagination.querySelector("#previousPage");
    const nextButton = pagination.querySelector("#nextPage");
    const pageIndicator = pagination.querySelector("#pageIndicator");

    function showPage(index, scroll = true) {

        if (index < 0 || index >= pages.length) return;

        currentPage = index;

        // Hide all lesson sections except the current page.
        pages.forEach((page, pageIndex) => {
            page.forEach(element => {
                element.hidden = pageIndex !== currentPage;
            });
        });

        // Update page buttons.
        previousButton.disabled = currentPage === 0;
        nextButton.disabled = currentPage === pages.length - 1;

        // Update page number.
        pageIndicator.textContent =
            `Page ${currentPage + 1} of ${pages.length}`;

        // Show lesson navigation only on the last page.
        if (lessonNavigation) {
            lessonNavigation.hidden =
                currentPage !== pages.length - 1;
        }

        // Show footer only on the last page.
        if (footer) {
            footer.hidden =
                currentPage !== pages.length - 1;
        }

        if (scroll) {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    }

    // Previous page.
    previousButton.addEventListener("click", function () {
        showPage(currentPage - 1);
    });

    // Next page.
    nextButton.addEventListener("click", function () {
        showPage(currentPage + 1);
    });

    // Sidebar navigation automatically opens the correct page.
    const sidebarLinks = document.querySelectorAll(
        ".sidebar nav a[href^='#']"
    );

    sidebarLinks.forEach(link => {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href").slice(1);
            const target = document.getElementById(targetId);

            if (!target) return;

            const pageIndex = pages.findIndex(page =>
                page.some(element =>
                    element === target || element.contains(target)
                )
            );

            if (pageIndex !== -1) {
                event.preventDefault();
                showPage(pageIndex);
            }

        });

    });

    // Display the first page.
    showPage(0, false);

});
