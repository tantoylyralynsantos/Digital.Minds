
document.addEventListener("DOMContentLoaded", function () {

    // =====================================
    // TABLE OF CONTENTS / SMOOTH SCROLL
    // =====================================

    const sidebarLinks = Array.from(
        document.querySelectorAll('.sidebar nav a[href^="#"]')
    );

    const sections = sidebarLinks
        .map(function (link) {
            return document.querySelector(link.getAttribute("href"));
        })
        .filter(Boolean);

    sidebarLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = link.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (!targetSection) return;

            event.preventDefault();

            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            history.replaceState(null, "", targetId);
        });

    });


    // =====================================
    // ACTIVE SIDEBAR LINK
    // =====================================

    function updateActiveLink() {

        if (sections.length === 0) return;

        let currentSection = sections[0].id;

        sections.forEach(function (section) {

            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop <= 180) {
                currentSection = section.id;
            }

        });

        sidebarLinks.forEach(function (link) {

            const active =
                link.getAttribute("href") === "#" + currentSection;

            link.classList.toggle("active", active);

            if (active) {
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
    // BACK TO TOP BUTTON
    // =====================================

    const backToTop = document.getElementById("backToTop");

    if (backToTop) {

        function checkScroll() {
            backToTop.classList.toggle(
                "show",
                window.scrollY > 300
            );
        }

        window.addEventListener("scroll", checkScroll, {
            passive: true
        });

        checkScroll();

        backToTop.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });
    }


    // =====================================
    // CHAPTER 2 QUIZ
    // =====================================

    const chapter2Quiz = document.getElementById("chapter2Quiz");

    const quizResult = document.getElementById(
        "chapter2QuizResult"
    );

    const explanations = document.getElementById(
        "chapter2Explanations"
    );

    const resetButton = document.getElementById(
        "resetChapter2Quiz"
    );

    const correctAnswers = {
        q1: "b",
        q2: "c",
        q3: "a",
        q4: "c",
        q5: "b"
    };


    if (chapter2Quiz) {

        chapter2Quiz.addEventListener("submit", function (event) {

            event.preventDefault();

            let score = 0;
            let unanswered = [];

            Object.keys(correctAnswers).forEach(function (question) {

                const selected = chapter2Quiz.querySelector(
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

                if (quizResult) {

                    quizResult.hidden = false;

                    quizResult.textContent =
                        "Please answer all 5 questions before submitting. " +
                        unanswered.length +
                        " question(s) unanswered.";

                    quizResult.classList.add("warning");
                }

                if (explanations) {
                    explanations.hidden = true;
                }

                const firstUnanswered = chapter2Quiz.querySelector(
                    'input[name="' + unanswered[0] + '"]'
                );

                if (firstUnanswered) {
                    firstUnanswered.focus();
                }

                return;
            }


            // DISPLAY SCORE
            if (quizResult) {

                quizResult.hidden = false;

                quizResult.classList.remove("warning");

                let feedback = "";

                if (score === 5) {
                    feedback = "Perfect! Excellent work!";
                } else if (score >= 4) {
                    feedback = "Excellent work! You understand the lesson well.";
                } else if (score >= 3) {
                    feedback = "Good effort! Review the lesson to improve your score.";
                } else {
                    feedback = "Keep practicing! Review the lesson and try again.";
                }

                quizResult.textContent =
                    "Your Score: " + score + " out of 5 (" +
                    (score * 20) + "%). " + feedback;
            }


            // SHOW ANSWER EXPLANATIONS
            if (explanations) {

                explanations.hidden = false;

                explanations.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    }


    // =====================================
    // RESET QUIZ
    // =====================================

    if (resetButton && chapter2Quiz) {

        resetButton.addEventListener("click", function () {

            chapter2Quiz.reset();

            if (quizResult) {
                quizResult.textContent = "";
                quizResult.hidden = true;
                quizResult.classList.remove("warning");
            }

            if (explanations) {
                explanations.hidden = true;
            }

        });

    }

});
// AUTOMATIC SIDEBAR ACTIVE LINK

document.addEventListener("DOMContentLoaded", function () {

    const sidebarLinks = document.querySelectorAll(
        ".sidebar nav a[href^='#']"
    );

    const sections = document.querySelectorAll(
        ".main-content section[id]"
    );

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    const currentId = entry.target.id;

                    sidebarLinks.forEach(function (link) {

                        link.classList.remove("active");

                        if (link.getAttribute("href") === "#" + currentId) {
                            link.classList.add("active");
                        }

                    });

                }

            });

        },
        {
            rootMargin: "-20% 0px -65% 0px",
            threshold: 0
        }
    );

    sections.forEach(function (section) {
        observer.observe(section);
    });

});
// =========================================
// DOWNLOAD CHAPTER 2 AS PDF
// =========================================

document.addEventListener("DOMContentLoaded", function () {

    const downloadButton = document.getElementById("downloadLessonBtn");

    if (downloadButton) {

        downloadButton.addEventListener("click", function () {

            window.print();

        });

    }

});
