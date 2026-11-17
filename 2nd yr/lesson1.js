
document.addEventListener("DOMContentLoaded", function () {

    // =====================================
    // SIDEBAR NAVIGATION
    // =====================================

    const sidebarLinks = Array.from(
        document.querySelectorAll('.sidebar nav a[href^="#"]')
    );

    const sections = sidebarLinks
        .map(function (link) {
            const id = link.getAttribute("href");
            return document.querySelector(id);
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


    // =====================================
    // LESSON 1 QUIZ
    // =====================================

    const quizForm = document.getElementById("lesson1Quiz");
    const quizResult = document.getElementById("lesson1QuizResult");
    const explanations = document.getElementById("lesson1Explanations");
    const resetQuiz = document.getElementById("resetLesson1Quiz");

    const correctAnswers = {
        q1: "b",
        q2: "c",
        q3: "c",
        q4: "b",
        q5: "d",
        q6: "b",
        q7: "a",
        q8: "c",
        q9: "b",
        q10: "d"
    };

    if (quizForm) {

        quizForm.addEventListener("submit", function (event) {

            event.preventDefault();

            let score = 0;
            let unanswered = [];

            Object.keys(correctAnswers).forEach(function (question) {

                const selected = quizForm.querySelector(
                    'input[name="' + question + '"]:checked'
                );

                if (!selected) {
                    unanswered.push(question);
                } else if (
                    selected.value === correctAnswers[question]
                ) {
                    score++;
                }
            });

            // CHECK UNANSWERED QUESTIONS

            if (unanswered.length > 0) {

                quizResult.textContent =
                    "Please answer all 10 questions before submitting. " +
                    unanswered.length +
                    " question(s) unanswered.";

                quizResult.className = "quiz-result quiz-warning";

                explanations.hidden = true;

                const firstUnanswered = quizForm.querySelector(
                    'input[name="' + unanswered[0] + '"]'
                );

                if (firstUnanswered) {
                    firstUnanswered.focus();
                }

                return;
            }

            // DISPLAY SCORE

            const percentage = score * 10;

            quizResult.textContent =
                "Your Score: " + score +
                " out of 10 (" + percentage + "%).";

            quizResult.className = "quiz-result";

            if (score >= 8) {
                quizResult.classList.add("quiz-success");
                quizResult.textContent += " Excellent work!";
            } else if (score >= 5) {
                quizResult.textContent += " Good effort! Keep reviewing.";
            } else {
                quizResult.textContent += " Review the lesson and try again.";
            }

            // SHOW ANSWER EXPLANATIONS

            explanations.hidden = false;

            explanations.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            });

        });
    }


    // =====================================
    // RESET QUIZ
    // =====================================

    if (resetQuiz && quizForm) {

        resetQuiz.addEventListener("click", function () {

            quizForm.reset();

            if (quizResult) {
                quizResult.textContent = "";
                quizResult.className = "quiz-result";
            }

            if (explanations) {
                explanations.hidden = true;
            }

        });
    }

});
