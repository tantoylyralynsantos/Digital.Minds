
/* =====================================
   CHAPTER 4 - QUIZ AND PAGE FUNCTIONS
===================================== */

document.addEventListener("DOMContentLoaded", function () {

    const quiz = document.getElementById("chapter4Quiz");
    const result = document.getElementById("chapter4QuizResult");
    const explanations = document.getElementById("chapter4Explanations");
    const resetButton = document.getElementById("resetChapter4Quiz");
    const backToTop = document.getElementById("backToTop");

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

    /* SUBMIT QUIZ */
    if (quiz) {
        quiz.addEventListener("submit", function (event) {
            event.preventDefault();

            let score = 0;
            let unanswered = [];

            for (let i = 1; i <= 10; i++) {
                const selected = quiz.querySelector(
                    `input[name="q${i}"]:checked`
                );

                if (!selected) {
                    unanswered.push(i);
                } else if (selected.value === correctAnswers[`q${i}`]) {
                    score++;
                }
            }

            if (unanswered.length > 0) {
                result.style.display = "block";
                explanations.style.display = "none";

                result.textContent =
                    "Please answer all questions before submitting. Unanswered: " +
                    unanswered.join(", ");

                return;
            }

            result.style.display = "block";
            explanations.style.display = "block";

            let message = "";

            if (score === 10) {
                message = "Excellent! Perfect score!";
            } else if (score >= 8) {
                message = "Very Good! You understand the lesson well.";
            } else if (score >= 6) {
                message = "Good effort! Review the topics you missed.";
            } else {
                message = "Keep practicing! Review the lesson and try again.";
            }

            result.innerHTML =
                "Your Score: " + score + " / 10<br>" + message;

            result.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        });
    }

    /* RESET QUIZ */
    if (resetButton) {
        resetButton.addEventListener("click", function () {
            quiz.reset();

            result.style.display = "none";
            explanations.style.display = "none";

            result.textContent = "";

            quiz.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    }

    /* BACK TO TOP */
    if (backToTop) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 300) {
                backToTop.style.display = "block";
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

});
