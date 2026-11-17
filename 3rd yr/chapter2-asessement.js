
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("chapter2Assessment");
    const results = document.getElementById("results");
    const resetButton = document.getElementById("resetAssessment");
    const tryAgainButton = document.getElementById("tryAgain");
    const explanationList = document.getElementById("explanationList");

    const progressBar = document.getElementById("progressBar");
    const progressText = document.getElementById("progressText");

    if (!form || !results) return;

    const totalQuestions = 20;

    const answerKey = {
        q1: "b",
        q2: "c",
        q3: "a",
        q4: "d",
        q5: "b",
        q6: "c",
        q7: "d",
        q8: "a",
        q9: "c",
        q10: "d",
        q11: "a",
        q12: "c",
        q13: "a",
        q14: "b",
        q15: "a",
        q16: "c",
        q17: "b",
        q18: "a",
        q19: "a",
        q20: "c"
    };

    const explanations = {
        q1: "A web browser is an application that allows users to access, retrieve, and display information from websites.",
        q2: "Google Chrome is a popular web browser used to access websites and online resources.",
        q3: "A web server stores, processes, and delivers website resources to clients that request them.",
        q4: "A client, such as a web browser, sends requests to a server to access website resources.",
        q5: "HTTP stands for Hypertext Transfer Protocol. It is used for communication between web clients and servers.",
        q6: "HTTPS protects communication by encrypting data exchanged between a browser and a web server.",
        q7: "HTTP is the protocol commonly used to transfer web pages and related resources.",
        q8: "HTTP commonly uses port 80 for communication.",
        q9: "HTTPS commonly uses port 443 for secure communication.",
        q10: "A URL, or Uniform Resource Locator, identifies the address of a resource on the internet.",
        q11: "The browser processes the entered address and sends the appropriate request to retrieve the requested resource.",
        q12: "TLS, or Transport Layer Security, helps encrypt and secure communication in HTTPS connections.",
        q13: "An HTTP request is a message sent by a client to a server to request a resource or perform an action.",
        q14: "An HTTP response is the server's reply to a client's request. It may contain a status code and requested content.",
        q15: "The GET method is commonly used to request or retrieve information from a server.",
        q16: "The POST method is commonly used to submit data to a server.",
        q17: "HTTP status code 404 means that the requested resource could not be found.",
        q18: "HTTP status code 200 indicates that the request was successful.",
        q19: "Apache HTTP Server is widely used web server software that can serve website content to clients.",
        q20: "HTTPS encrypts information exchanged between the browser and server. It helps protect sensitive data during transmission."
    };

    function updateProgress() {
        let answered = 0;

        for (let i = 1; i <= totalQuestions; i++) {
            const selected = form.querySelector(
                'input[name="q' + i + '"]:checked'
            );

            if (selected) {
                answered++;
            }
        }

        const percentage = (answered / totalQuestions) * 100;

        progressBar.style.width = percentage + "%";
        progressText.textContent =
            answered + " of " + totalQuestions + " answered";
    }

    form.addEventListener("change", updateProgress);

    function getGradeMessage(percentage) {
        if (percentage >= 90) {
            return {
                title: "Outstanding Performance!",
                message: "Excellent work! You have demonstrated a strong understanding of Chapter 2."
            };
        }

        if (percentage >= 80) {
            return {
                title: "Very Good!",
                message: "Great job! You understand most of the important concepts."
            };
        }

        if (percentage >= 70) {
            return {
                title: "Good Work!",
                message: "You have a good foundation. Review the topics you missed to improve further."
            };
        }

        if (percentage >= 60) {
            return {
                title: "Keep Practicing!",
                message: "You are making progress. Review the lesson and try the assessment again."
            };
        }

        return {
            title: "Needs Improvement",
            message: "Continue studying the lesson and review the explanations before trying again."
        };
    }

    function submitAssessment(event) {
        event.preventDefault();

        let score = 0;
        let correctCount = 0;
        let incorrectCount = 0;

        const unanswered = [];

        for (let i = 1; i <= totalQuestions; i++) {
            const questionName = "q" + i;

            const selected = form.querySelector(
                'input[name="' + questionName + '"]:checked'
            );

            if (!selected) {
                unanswered.push(i);
            }
        }

        if (unanswered.length > 0) {
            alert(
                "Please answer all questions before submitting.\n\n" +
                "Unanswered questions: " + unanswered.join(", ")
            );

            const firstUnanswered = form.querySelector(
                'input[name="q' + unanswered[0] + '"]'
            );

            if (firstUnanswered) {
                firstUnanswered.closest(".question-card").scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            }

            return;
        }

        explanationList.innerHTML = "";

        for (let i = 1; i <= totalQuestions; i++) {

            const questionName = "q" + i;
            const selected = form.querySelector(
                'input[name="' + questionName + '"]:checked'
            );

            const correctAnswer = answerKey[questionName];
            const userAnswer = selected.value;

            const questionCard = selected.closest(".question-card");
            const questionText = questionCard.querySelector("h3").textContent;

            const correctLabel = questionCard.querySelector(
                'input[value="' + correctAnswer + '"]'
            ).parentElement.textContent.trim();

            const userLabel = selected.parentElement.textContent.trim();

            const isCorrect = userAnswer === correctAnswer;

            if (isCorrect) {
                score++;
                correctCount++;
            } else {
                incorrectCount++;
            }

            const explanationItem = document.createElement("div");

            explanationItem.className = isCorrect
                ? "explanation-item"
                : "explanation-item wrong";

            explanationItem.innerHTML = `
                <h4>Question ${i}: ${questionText}</h4>

                <p class="${isCorrect ? "answer-correct" : "answer-wrong"}">
                    ${isCorrect ? "✓ Correct Answer" : "✗ Incorrect Answer"}
                </p>

                <p>
                    <strong>Your Answer:</strong>
                    ${userLabel}
                </p>

                <p>
                    <strong>Correct Answer:</strong>
                    ${correctLabel}
                </p>

                <p>
                    <strong>Explanation:</strong>
                    ${explanations[questionName]}
                </p>
            `;

            explanationList.appendChild(explanationItem);
        }

        const percentage = Math.round(
            (score / totalQuestions) * 100
        );

        const grade = getGradeMessage(percentage);

        document.getElementById("scoreNumber").textContent =
            score + "/" + totalQuestions;

        document.getElementById("scorePercentage").textContent =
            percentage + "%";

        document.getElementById("resultMessage").textContent =
            grade.title;

        document.getElementById("resultDetails").textContent =
            grade.message;

        document.getElementById("correctCount").textContent =
            correctCount;

        document.getElementById("incorrectCount").textContent =
            incorrectCount;

        results.hidden = false;

        results.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    form.addEventListener("submit", submitAssessment);

    function resetAssessment() {
        form.reset();

        results.hidden = true;

        explanationList.innerHTML = "";

        progressBar.style.width = "0%";
        progressText.textContent = "0 of " + totalQuestions + " answered";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    if (resetButton) {
        resetButton.addEventListener("click", function () {
            setTimeout(resetAssessment, 0);
        });
    }

    if (tryAgainButton) {
        tryAgainButton.addEventListener("click", resetAssessment);
    }

    const backToTop = document.getElementById("backToTop");

    if (backToTop) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 350) {
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

    updateProgress();

});
