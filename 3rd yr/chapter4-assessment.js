
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("chapter4Quiz");
    const resultSection = document.getElementById("results");
    const explanationsSection = document.getElementById("explanations");
    const resetButton = document.getElementById("resetChapter4Quiz");
    const tryAgainButton = document.getElementById("tryAgain");

    const progressText = document.getElementById("progressText");
    const progressBar = document.getElementById("progressBar");

    const scoreNumber = document.getElementById("scoreNumber");
    const scorePercentage = document.getElementById("scorePercentage");
    const resultMessage = document.getElementById("resultMessage");
    const resultDetails = document.getElementById("resultDetails");
    const answerSummary = document.getElementById("answerSummary");
    const explanationContainer = document.getElementById("chapter4Explanations");

    const totalQuestions = 10;

    const answers = {
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

    const explanations = [
        {
            question: "1. Main Purpose of CSS",
            answer: "B — To style and format HTML elements",
            explanation: "CSS controls the visual appearance, formatting, colors, spacing, and layout of HTML elements."
        },
        {
            question: "2. Class Selector",
            answer: "C — .header",
            explanation: "A period or dot is used before a class name in a CSS selector."
        },
        {
            question: "3. CSS Box Model",
            answer: "B — Padding",
            explanation: "Padding creates space between an element's content and its border."
        },
        {
            question: "4. Fixed Positioning",
            answer: "D — Fixed",
            explanation: "The fixed position value keeps an element positioned relative to the browser viewport."
        },
        {
            question: "5. One-Dimensional Layout",
            answer: "A — Flexbox",
            explanation: "Flexbox arranges items along one main axis, either horizontally or vertically."
        },
        {
            question: "6. CSS Grid Columns",
            answer: "B — grid-template-columns",
            explanation: "The grid-template-columns property defines the number and size of columns in a CSS Grid layout."
        },
        {
            question: "7. Media Queries",
            answer: "C — Apply styles based on device or screen conditions",
            explanation: "Media queries allow developers to apply CSS rules based on screen width, device conditions, and other media features."
        },
        {
            question: "8. CSS Transitions",
            answer: "B — CSS Transition",
            explanation: "CSS transitions create smooth changes between different CSS property values."
        },
        {
            question: "9. Utility-First Framework",
            answer: "D — Tailwind CSS",
            explanation: "Tailwind CSS provides utility classes that can be combined directly in HTML to style elements."
        },
        {
            question: "10. Flexbox Main Axis",
            answer: "A — justify-content",
            explanation: "The justify-content property controls the distribution of Flexbox items along the main axis."
        }
    ];

    function updateProgress() {

        const answered = Object.keys(answers).filter(name => {
            return form.querySelector(`input[name="${name}"]:checked`);
        }).length;

        progressText.textContent = `${answered} of ${totalQuestions} answered`;

        progressBar.style.width =
            `${(answered / totalQuestions) * 100}%`;
    }

    form.addEventListener("change", updateProgress);

    function renderExplanations() {

        explanationContainer.innerHTML = explanations.map(item => `
            <div class="explanation">
                <strong>${item.question}</strong>
                <p><strong>Correct Answer:</strong> ${item.answer}</p>
                <p>${item.explanation}</p>
            </div>
        `).join("");
    }

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const unanswered = Object.keys(answers).filter(name => {
            return !form.querySelector(`input[name="${name}"]:checked`);
        });

        if (unanswered.length > 0) {

            alert(
                `Please answer all questions before submitting. You still have ${unanswered.length} unanswered question(s).`
            );

            const firstUnanswered = form.querySelector(
                `input[name="${unanswered[0]}"]`
            );

            firstUnanswered.closest(".quiz-question").scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

            return;
        }

        let score = 0;
        let summaryHTML = "";

        Object.keys(answers).forEach((name, index) => {

            const selected = form.querySelector(
                `input[name="${name}"]:checked`
            );

            const isCorrect = selected.value === answers[name];

            if (isCorrect) {
                score++;
            }

            const status = isCorrect ? "correct" : "incorrect";

            const selectedText = selected.closest("label").textContent.trim();

            const correctLabel = form.querySelector(
                `input[name="${name}"][value="${answers[name]}"]`
            ).closest("label").textContent.trim();

            summaryHTML += `
                <div class="${status}">
                    <strong>Question ${index + 1}:</strong>
                    ${isCorrect ? "Correct" : "Incorrect"}<br>
                    Your answer: ${selectedText}<br>
                    Correct answer: ${correctLabel}
                </div>
            `;
        });

        const percentage = (score / totalQuestions) * 100;

        scoreNumber.textContent = `${score} / ${totalQuestions}`;
        scorePercentage.textContent = `${percentage}%`;

        if (percentage === 100) {
            resultMessage.textContent = "Excellent! Perfect Score!";
        } else if (percentage >= 80) {
            resultMessage.textContent = "Very Good! Well Done!";
        } else if (percentage >= 70) {
            resultMessage.textContent = "Good Job! Keep Improving!";
        } else if (percentage >= 50) {
            resultMessage.textContent = "Keep Practicing!";
        } else {
            resultMessage.textContent = "Needs Improvement. Review the Lesson!";
        }

        resultDetails.textContent =
            `You answered ${score} out of ${totalQuestions} questions correctly.`;

        answerSummary.innerHTML = summaryHTML;

        renderExplanations();

        resultSection.hidden = false;
        explanationsSection.hidden = false;

        resetButton.disabled = true;
        form.querySelectorAll("input").forEach(input => {
            input.disabled = true;
        });

        resultSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

    function resetAssessment() {

        form.reset();

        form.querySelectorAll("input").forEach(input => {
            input.disabled = false;
        });

        resetButton.disabled = false;

        resultSection.hidden = true;
        explanationsSection.hidden = true;

        scoreNumber.textContent = "0 / 10";
        scorePercentage.textContent = "0%";
        resultMessage.textContent = "";
        resultDetails.textContent = "";
        answerSummary.innerHTML = "";
        explanationContainer.innerHTML = "";

        updateProgress();

        document.getElementById("quiz").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    resetButton.addEventListener("click", resetAssessment);
    tryAgainButton.addEventListener("click", resetAssessment);

    // Back to top button.
    const backToTop = document.getElementById("backToTop");

    if (backToTop) {
        backToTop.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    updateProgress();

});
