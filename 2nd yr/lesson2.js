document.addEventListener("DOMContentLoaded", function () {

    // SIDEBAR NAVIGATION
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

    // ACTIVE SIDEBAR LINK
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

    // BACK TO TOP BUTTON
    const backToTop = document.getElementById("backToTop");

    if (backToTop) {

        function toggleBackToTop() {
            backToTop.classList.toggle("show", window.scrollY > 300);
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

    // MULTIPLE CHOICE QUIZ
    const quizForm = document.getElementById("quizForm");
    const quizResult = document.getElementById("quizResult");

    if (quizForm && quizResult) {

        const correctAnswers = {
            q1: "B",
            q2: "C",
            q3: "A",
            q4: "D",
            q5: "B"
        };

        quizForm.addEventListener("submit", function (event) {
            event.preventDefault();

            let score = 0;
            let unanswered = 0;

            Object.keys(correctAnswers).forEach(function (question) {

                const selected = quizForm.querySelector(
                    'input[name="' + question + '"]:checked'
                );

                if (!selected) {
                    unanswered++;
                    return;
                }

                if (selected.value === correctAnswers[question]) {
                    score++;
                }
            });

            quizResult.classList.add("show");
            quizResult.classList.remove("success", "needs-review");

            if (unanswered > 0) {
                quizResult.classList.add("needs-review");

                quizResult.textContent =
                    "Please answer all questions first. " +
                    unanswered + " question(s) are unanswered.";

                return;
            }

            if (score >= 4) {
                quizResult.classList.add("success");
            } else {
                quizResult.classList.add("needs-review");
            }

            quizResult.textContent =
                "Your Score: " + score + " / 5. " +
                (score === 5
                    ? "Excellent! Perfect score!"
                    : score >= 4
                        ? "Very good! Keep it up!"
                        : score >= 3
                            ? "Good effort! Review the lesson."
                            : "Keep studying and try again.");
        });

        quizForm.addEventListener("reset", function () {
            quizResult.classList.remove(
                "show",
                "success",
                "needs-review"
            );

            quizResult.textContent = "";
        });
    }

});