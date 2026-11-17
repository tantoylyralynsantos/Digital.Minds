document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("chapter3AssessmentForm");
    const results = document.getElementById("results");
    const resetButton = document.getElementById("resetAssessment");

    const scoreNumber = document.getElementById("scoreNumber");
    const scorePercentage = document.getElementById("scorePercentage");
    const resultMessage = document.getElementById("resultMessage");
    const resultDetails = document.getElementById("resultDetails");
    const explanationList = document.getElementById("explanationList");

    if (!form || !results) return;

    const totalQuestions = 5;

    const answerKey = {
        q1: "a",
        q2: "c",
        q3: "b",
        q4: "d",
        q5: "a"
    };

    const explanations = {
        q1: {
            answer: "A — HTML elements that describe the meaning of content",
            explanation: "Semantic HTML uses meaningful tags that describe the content they contain."
        },
        q2: {
            answer: "C — <div>",
            explanation: "The div element is non-semantic because it does not describe the meaning of its content."
        },
        q3: {
            answer: "B — <nav>",
            explanation: "The nav element represents a section containing navigation links."
        },
        q4: {
            answer: "D — <main>",
            explanation: "The main element represents the main content of a webpage."
        },
        q5: {
            answer: "A — Improves accessibility and code readability",
            explanation: "Semantic HTML helps assistive technologies understand webpage content and makes code easier to maintain."
        }
    };

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let score = 0;
        let unanswered = [];

        for (let i = 1; i <= totalQuestions; i++) {
            const questionName = "q" + i;
            const selected = form.querySelector(
                'input[name="' + questionName + '"]:checked'
            );

            if (!selected) {
                unanswered.push(i);
            } else if (selected.value === answerKey[questionName]) {
                score++;
            }
        }

        if (unanswered.length > 0) {
            alert(
                "Please answer all questions first. Unanswered question(s): " +
                unanswered.join(", ")
            );
            return;
        }

        const percentage = Math.round((score / totalQuestions) * 100);

        scoreNumber.textContent = score + " / " + totalQuestions;
        scorePercentage.textContent = percentage + "%";

        if (percentage === 100) {
            resultMessage.textContent = "Excellent Work!";
            resultDetails.textContent =
                "Perfect score! You have an excellent understanding of HTML Structure and Semantic Elements.";
        } else if (percentage >= 80) {
            resultMessage.textContent = "Very Good!";
            resultDetails.textContent =
                "Great job! You have a very good understanding of the lesson.";
        } else if (percentage >= 60) {
            resultMessage.textContent = "Good Effort!";
            resultDetails.textContent =
                "You understand some of the concepts. Review the explanations to improve your knowledge.";
        } else {
            resultMessage.textContent = "Keep Practicing!";
            resultDetails.textContent =
                "Review Chapter 3 and study the semantic HTML elements before trying again.";
        }

        explanationList.innerHTML = "";

        for (let i = 1; i <= totalQuestions; i++) {
            const questionName = "q" + i;
            const selected = form.querySelector(
                'input[name="' + questionName + '"]:checked'
            );

            const isCorrect = selected.value === answerKey[questionName];

            const explanation = document.createElement("div");
            explanation.className = "explanation";

            const answer = document.createElement("strong");
            answer.textContent =
                i + ". " +
                (isCorrect ? "Correct! " : "Incorrect. ") +
                explanations[questionName].answer;

            const description = document.createElement("p");
            description.textContent = explanations[questionName].explanation;

            explanation.appendChild(answer);
            explanation.appendChild(description);

            explanationList.appendChild(explanation);
        }

        results.hidden = false;

        results.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });

    resetButton.addEventListener("click", function () {
        form.reset();

        results.hidden = true;
        scoreNumber.textContent = "0 / 5";
        scorePercentage.textContent = "0%";
        resultMessage.textContent = "";
        resultDetails.textContent = "";
        explanationList.innerHTML = "";

        form.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });

});