
/* =====================================
   WEBTECH LEARN - TOC SEARCH
===================================== */

document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("lessonSearch");
    const lessonCards = document.querySelectorAll(".lesson-card");
    const resultMessage = document.getElementById("resultMessage");
    const noResults = document.getElementById("noResults");
    const yearHeading = document.querySelector(".year-heading");

    if (!searchInput || lessonCards.length === 0) {
        console.error("TOC search elements not found.");
        return;
    }

    function searchLessons() {

        const searchText = searchInput.value.trim().toLowerCase();
        let visibleCount = 0;

        lessonCards.forEach(function (card) {

            const lessonText = card.textContent.toLowerCase();
            const matched = lessonText.includes(searchText);

            card.hidden = !matched;

            if (matched) {
                visibleCount++;
            }

        });

        // Update result count
        if (resultMessage) {
            resultMessage.textContent =
                visibleCount +
                (visibleCount === 1
                    ? " lesson found"
                    : " lessons found");
        }

        // Show or hide no results message
        if (noResults) {
            noResults.hidden = visibleCount !== 0;
        }

        // Hide heading if no lessons are found
        if (yearHeading) {
            yearHeading.hidden = visibleCount === 0;
        }
    }

    searchInput.addEventListener("input", searchLessons);

});
