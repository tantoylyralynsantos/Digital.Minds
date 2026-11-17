
/* =========================================
   WEBTECH LEARN - CHAPTER 4 JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    // =====================================
    // 1. BACK TO TOP BUTTON
    // =====================================

    const backToTop = document.getElementById("backToTop");

    if (backToTop) {

        window.addEventListener("scroll", function () {
            if (window.scrollY > 300) {
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
    }


    // =====================================
    // 2. SIDEBAR ACTIVE LINK
    // =====================================

    const sidebarLinks = document.querySelectorAll(".sidebar nav a");
    const sections = document.querySelectorAll(
        ".main-content section[id], .lesson-banner[id]"
    );

    function updateActiveLink() {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop = section.offsetTop - 150;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionBottom
            ) {
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

    window.addEventListener("scroll", updateActiveLink);
    updateActiveLink();


    // =====================================
    // 3. CHAPTER 4 QUIZ
    // =====================================

    const quizForm = document.getElementById("chapter4Quiz");
    const quizResult = document.getElementById("chapter4QuizResult");
    const resetButton = document.getElementById("resetChapter4Quiz");
    const explanations = document.getElementById("chapter4Explanations");

    const correctAnswers = {
        q1: "b",
        q2: "c",
        q3: "b",
        q4: "d",
        q5: "a",
        q6: "b",
        q7: "c",
        q8: "b",
        q9: "d",
        q10: "a"
    };

    const totalQuestions = Object.keys(correctAnswers).length;

    if (quizForm) {

        quizForm.addEventListener("submit", function (event) {

            event.preventDefault();

            let score = 0;
            let unanswered = 0;

            // Remove previous answer colors
            document.querySelectorAll(".quiz-question label").forEach(function (label) {
                label.classList.remove("correct-answer", "wrong-answer");
            });

            // Check each question
            Object.keys(correctAnswers).forEach(function (questionName) {

                const selectedAnswer = quizForm.querySelector(
                    'input[name="' + questionName + '"]:checked'
                );

                const correctAnswer = correctAnswers[questionName];

                if (!selectedAnswer) {
                    unanswered++;
                } else if (selectedAnswer.value === correctAnswer) {
                    score++;
                }

                // Highlight correct and incorrect answers
                const options = quizForm.querySelectorAll(
                    'input[name="' + questionName + '"]'
                );

                options.forEach(function (option) {

                    const label = option.closest("label");

                    if (!label) return;

                    if (option.value === correctAnswer) {
                        label.classList.add("correct-answer");
                    }

                    if (
                        option.checked &&
                        option.value !== correctAnswer
                    ) {
                        label.classList.add("wrong-answer");
                    }

                });

            });

            const percentage = Math.round((score / totalQuestions) * 100);

            // Show quiz result
            quizResult.className = "quiz-result show";

            if (score >= 7) {

                quizResult.classList.add("success");

                quizResult.innerHTML =
                    "<h3>Excellent Work!</h3>" +
                    "<p>Your score: " + score + " out of " + totalQuestions + "</p>" +
                    "<p>Percentage: " + percentage + "%</p>" +
                    "<p>Great job! You have a good understanding of CSS Styling and Layout.</p>";

            } else {

                quizResult.classList.add("needs-improvement");

                quizResult.innerHTML =
                    "<h3>Keep Practicing!</h3>" +
                    "<p>Your score: " + score + " out of " + totalQuestions + "</p>" +
                    "<p>Percentage: " + percentage + "%</p>" +
                    "<p>Review the lesson and answer explanations to improve your understanding.</p>";

            }

            if (unanswered > 0) {
                quizResult.innerHTML +=
                    "<p>Unanswered questions: " + unanswered + "</p>";
            }

            // Show explanations
            if (explanations) {
                explanations.classList.add("show");
            }

            // Scroll to result
            quizResult.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        });

    }


    // =====================================
    // 4. RESET QUIZ
    // =====================================

    if (resetButton && quizForm) {

        resetButton.addEventListener("click", function () {

            quizForm.reset();

            // Remove answer highlights
            document.querySelectorAll(".quiz-question label").forEach(function (label) {
                label.classList.remove("correct-answer", "wrong-answer");
            });

            // Hide result
            if (quizResult) {
                quizResult.className = "quiz-result";
                quizResult.innerHTML = "";
            }

            // Hide explanations
            if (explanations) {
                explanations.classList.remove("show");
            }

            // Return to first question
            const firstQuestion = quizForm.querySelector(".quiz-question");

            if (firstQuestion) {
                firstQuestion.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            }

        });

    }

});
/* =========================================
   DOWNLOAD LESSON AS PDF
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const downloadPDF = document.getElementById("downloadPDF");

    if (downloadPDF) {

        downloadPDF.addEventListener("click", function () {

            const originalTitle = document.title;

            document.title = "Lesson 4 - CSS Styling and Layout";

            window.print();

            setTimeout(function () {
                document.title = originalTitle;
            }, 1000);

        });

    }

});