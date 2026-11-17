
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("chapter5Quiz");
    const resultsSection = document.getElementById("assessment-results");
    const resultContainer = document.getElementById("chapter5QuizResult");
    const explanationsContainer = document.getElementById("chapter5Explanations");

    const progressText = document.getElementById("progressText");
    const progressBar = document.getElementById("progressBar");
    const formMessage = document.getElementById("formMessage");

    const resetButton = document.getElementById("resetChapter5Quiz");
    const tryAgainButton = document.getElementById("tryAgain");

    const scoreNumber = document.getElementById("scoreNumber");
    const scorePercentage = document.getElementById("scorePercentage");
    const resultMessage = document.getElementById("resultMessage");
    const resultDetails = document.getElementById("resultDetails");
    const correctCount = document.getElementById("correctCount");
    const incorrectCount = document.getElementById("incorrectCount");

    const totalQuestions = 10;

    const answers = {
        q1: "b",
        q2: "c",
        q3: "a",
        q4: "b",
        q5: "c",
        q6: "a",
        q7: "b",
        q8: "b",
        q9: "c",
        q10: "a"
    };

    const explanations = [
        {
            question: "1. Responsive Web Design",
            answer: "B — To make websites adapt to different screen sizes",
            explanation: "Responsive Web Design allows a website to adjust its layout and appearance for desktop computers, tablets, and smartphones."
        },
        {
            question: "2. Viewport Meta Tag",
            answer: "C — Viewport meta tag",
            explanation: "The viewport meta tag helps browsers set the webpage width according to the device screen and control its initial scaling."
        },
        {
            question: "3. CSS Media Queries",
            answer: "A — Media queries",
            explanation: "Media queries allow developers to apply different CSS styles depending on screen width and other device conditions."
        },
        {
            question: "4. Responsive Images",
            answer: "B — max-width: 100%",
            explanation: "The max-width: 100% rule prevents an image from becoming wider than its containing element. The height: auto rule helps preserve its proportions."
        },
        {
            question: "5. Mobile-First Design",
            answer: "C — Starting the design with smaller screens",
            explanation: "Mobile-first design begins with a layout for smaller screens before adding styles and features for larger screens."
        },
        {
            question: "6. CSS Flexbox",
            answer: "A — Flexbox",
            explanation: "Flexbox is a one-dimensional layout system that arranges items in a row or column and helps control alignment and spacing."
        },
        {
            question: "7. CSS Grid",
            answer: "B — To organize content into rows and columns",
            explanation: "CSS Grid is a two-dimensional layout system that organizes webpage content using rows and columns."
        },
        {
            question: "8. Responsive Breakpoints",
            answer: "B — Points where a layout changes based on screen size",
            explanation: "Breakpoints are screen-width points where media queries apply different layout styles to improve the viewing experience."
        },
        {
            question: "9. Viewport Width Unit",
            answer: "C — vw",
            explanation: "The vw unit represents a percentage of the viewport width. For example, 50vw is equal to half of the viewport width."
        },
        {
            question: "10. Responsive Website Testing",
            answer: "A — To check layout and usability on different screens",
            explanation: "Testing on different devices helps developers identify layout problems, overflowing content, difficult navigation, and readability issues."
        }
    ];

    function updateProgress() {
        const answered = Object.keys(answers).filter(function (question) {
            return form.querySelector('input[name="' + question + '"]:checked');
        }).length;

        progressText.textContent = answered + " of " + totalQuestions + " answered";
        progressBar.style.width = (answered / totalQuestions * 100) + "%";

        document.querySelectorAll(".quiz-question").forEach(function (questionBox) {
            const radio = questionBox.querySelector('input[type="radio"]');

            if (!radio) return;

            const selected = form.querySelector(
                'input[name="' + radio.name + '"]:checked'
            );

            questionBox.classList.toggle("answered", Boolean(selected));

            if (selected) {
                questionBox.classList.remove("unanswered");
            }
        });
    }

    form.addEventListener("change", function () {
        updateProgress();

        if (formMessage) {
            formMessage.textContent = "";
        }
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let unanswered = [];

        Object.keys(answers).forEach(function (question, index) {
            const selected = form.querySelector(
                'input[name="' + question + '"]:checked'
            );

            const questionBox = form.querySelector(
                'input[name="' + question + '"]'
            ).closest(".quiz-question");

            if (!selected) {
                unanswered.push(index + 1);
                questionBox.classList.add("unanswered");
            } else {
                questionBox.classList.remove("unanswered");
            }
        });

        if (unanswered.length > 0) {
            formMessage.textContent =
                "Please answer all questions before submitting. Unanswered question(s): " +
                unanswered.join(", ");

            const firstUnanswered = form.querySelector(
                'input[name="q' + unanswered[0] + '"]'
            );

            firstUnanswered.closest(".quiz-question").scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

            return;
        }

        let score = 0;
        let explanationHTML = '<h3>Answer Explanations</h3>';

        explanations.forEach(function (item, index) {
            const questionName = "q" + (index + 1);

            const selected = form.querySelector(
                'input[name="' + questionName + '"]:checked'
            );

            const isCorrect = selected.value === answers[questionName];

            if (isCorrect) {
                score++;
            }

            explanationHTML += `
                <div class="explanation ${isCorrect ? "" : "incorrect"}">
                    <strong>
                        ${item.question}
                    </strong>

                    <p>
                        Your answer: ${selected.value.toUpperCase()}
                        — ${isCorrect ? "Correct" : "Incorrect"}
                    </p>

                    <p>
                        Correct answer: ${item.answer}
                    </p>

                    <p>
                        ${item.explanation}
                    </p>
                </div>
            `;
        });

        const percentage = Math.round((score / totalQuestions) * 100);
        const incorrect = totalQuestions - score;

        scoreNumber.textContent = score + "/" + totalQuestions;
        scorePercentage.textContent = percentage + "%";

        correctCount.textContent = score;
        incorrectCount.textContent = incorrect;

        if (percentage === 100) {
            resultMessage.textContent = "Perfect Score!";
            resultDetails.textContent = "Excellent! You answered all questions correctly.";
        } else if (percentage >= 90) {
            resultMessage.textContent = "Excellent Work!";
            resultDetails.textContent = "You have an excellent understanding of Responsive Web Design.";
        } else if (percentage >= 80) {
            resultMessage.textContent = "Very Good!";
            resultDetails.textContent = "You understand most of the important concepts in this chapter.";
        } else if (percentage >= 70) {
            resultMessage.textContent = "Good Job!";
            resultDetails.textContent = "You have a good understanding, but review the questions you missed.";
        } else if (percentage >= 60) {
            resultMessage.textContent = "Keep Practicing!";
            resultDetails.textContent = "Review the lesson and study the explanations before trying again.";
        } else {
            resultMessage.textContent = "Needs Improvement";
            resultDetails.textContent = "Review Chapter 5 carefully and try the assessment again.";
        }

        explanationsContainer.innerHTML = explanationHTML;

        resultsSection.hidden = false;

        if (formMessage) {
            formMessage.textContent = "";
        }

        resultsSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });

    function resetAssessment() {
        form.reset();

        resultsSection.hidden = true;
        explanationsContainer.innerHTML = '<h3>Answer Explanations</h3>';

        formMessage.textContent = "";

        document.querySelectorAll(".quiz-question").forEach(function (questionBox) {
            questionBox.classList.remove("answered", "unanswered");
        });

        updateProgress();

        document.getElementById("quiz-section").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    resetButton.addEventListener("click", function () {
        setTimeout(resetAssessment, 0);
    });

    tryAgainButton.addEventListener("click", resetAssessment);

    updateProgress();

    // Back to Top Button
    const backToTop = document.getElementById("backToTop");

    if (backToTop) {
        backToTop.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

});
