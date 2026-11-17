
document.addEventListener("DOMContentLoaded", function () {

    // =====================================
    // DOM STYLE DEMO
    // =====================================
    const styleDemoButton = document.getElementById("styleDemoButton");
    const styleDemo = document.getElementById("styleDemo");

    if (styleDemoButton && styleDemo) {
        styleDemoButton.addEventListener("click", function () {
            styleDemo.classList.toggle("highlighted");

            if (styleDemo.classList.contains("highlighted")) {
                styleDemo.textContent = "The DOM successfully changed my style!";
            } else {
                styleDemo.textContent = "Click the button to change my appearance.";
            }
        });
    }


    // =====================================
    // EVENT LISTENER DEMO
    // =====================================
    const eventDemoButton = document.getElementById("eventDemoButton");
    const eventDemoMessage = document.getElementById("eventDemoMessage");

    if (eventDemoButton && eventDemoMessage) {
        eventDemoButton.addEventListener("click", function (event) {
            eventDemoMessage.textContent =
                "A click event was detected! Event type: " + event.type;
        });
    }


    // =====================================
    // CUSTOM EVENT DEMO
    // =====================================
    const customEventButton = document.getElementById("customEventButton");
    const customEventMessage = document.getElementById("customEventMessage");

    if (customEventButton && customEventMessage) {

        document.addEventListener("lessonCustomEvent", function (event) {
            customEventMessage.textContent = event.detail.message;
        });

        customEventButton.addEventListener("click", function () {

            const customEvent = new CustomEvent("lessonCustomEvent", {
                detail: {
                    message: "Success! Your custom event was created and dispatched."
                }
            });

            document.dispatchEvent(customEvent);
        });
    }


    // =====================================
    // QUIZ QUESTIONS
    // =====================================
    const questions = [
        {
            question: "1. What does DOM stand for?",
            options: [
                "Data Object Management",
                "Document Object Model",
                "Digital Ordinance Model",
                "Document Operation Method"
            ],
            answer: 1,
            explanation: "DOM stands for Document Object Model. It represents an HTML document as a structure of objects."
        },
        {
            question: "2. What structure does the DOM use to organize HTML elements?",
            options: [
                "Circular structure",
                "Linear structure",
                "Tree structure",
                "Grid structure"
            ],
            answer: 2,
            explanation: "The DOM uses a tree structure with parent, child, and sibling relationships."
        },
        {
            question: "3. Which method selects an element using its ID?",
            options: [
                "getElementById()",
                "getElementsByTagName()",
                "querySelectorAll()",
                "createElement()"
            ],
            answer: 0,
            explanation: "getElementById() selects the element that matches the specified ID."
        },
        {
            question: "4. Which method selects the first element matching a CSS selector?",
            options: [
                "getElementsByClassName()",
                "querySelector()",
                "querySelectorAll()",
                "appendChild()"
            ],
            answer: 1,
            explanation: "querySelector() returns the first element that matches the given CSS selector."
        },
        {
            question: "5. Which property changes the text inside an element?",
            options: [
                "classList",
                "style",
                "textContent",
                "parentElement"
            ],
            answer: 2,
            explanation: "textContent gets or changes the text content of an element."
        },
        {
            question: "6. What is the purpose of addEventListener()?",
            options: [
                "To delete an HTML element",
                "To attach an event handler to an element",
                "To create a CSS file",
                "To change the page title"
            ],
            answer: 1,
            explanation: "addEventListener() registers a function that runs when a specified event occurs."
        },
        {
            question: "7. Which event occurs when a user clicks an element?",
            options: [
                "mouseover",
                "keydown",
                "click",
                "submit"
            ],
            answer: 2,
            explanation: "The click event occurs when a user clicks an element."
        },
        {
            question: "8. What does event.target refer to?",
            options: [
                "The element that triggered the event",
                "The entire HTML document",
                "The CSS stylesheet",
                "The browser window"
            ],
            answer: 0,
            explanation: "event.target identifies the element on which the event was originally triggered."
        },
        {
            question: "9. Which method triggers an event programmatically?",
            options: [
                "removeEventListener()",
                "dispatchEvent()",
                "querySelector()",
                "appendChild()"
            ],
            answer: 1,
            explanation: "dispatchEvent() is used to dispatch or trigger an event on an event target."
        },
        {
            question: "10. Which constructor is used to create a custom event?",
            options: [
                "NewEvent()",
                "CreateEvent()",
                "CustomEvent()",
                "DOMEvent()"
            ],
            answer: 2,
            explanation: "The CustomEvent() constructor creates a custom event that can carry additional data through its detail property."
        }
    ];


    // =====================================
    // DISPLAY QUIZ QUESTIONS
    // =====================================
    const quizQuestions = document.getElementById("quizQuestions");
    const quizForm = document.getElementById("quizForm");
    const quizResult = document.getElementById("quizResult");
    const resetQuiz = document.getElementById("resetQuiz");

    function displayQuestions() {

        if (!quizQuestions) return;

        quizQuestions.innerHTML = "";

        questions.forEach(function (item, index) {

            const questionBox = document.createElement("div");
            questionBox.className = "question";

            const questionTitle = document.createElement("h3");
            questionTitle.textContent = item.question;
            questionBox.appendChild(questionTitle);

            item.options.forEach(function (option, optionIndex) {

                const label = document.createElement("label");

                const radio = document.createElement("input");
                radio.type = "radio";
                radio.name = "question" + index;
                radio.value = optionIndex;
                radio.required = true;

                label.appendChild(radio);
                label.appendChild(document.createTextNode(option));

                questionBox.appendChild(label);
            });

            quizQuestions.appendChild(questionBox);
        });
    }

    displayQuestions();


    // =====================================
    // SUBMIT QUIZ
    // =====================================
    if (quizForm) {

        quizForm.addEventListener("submit", function (event) {

            event.preventDefault();

            let score = 0;
            let explanationHTML = "";

            questions.forEach(function (item, index) {

                const selected = document.querySelector(
                    'input[name="question' + index + '"]:checked'
                );

                const isCorrect = selected &&
                    Number(selected.value) === item.answer;

                if (isCorrect) {
                    score++;
                }

                explanationHTML += `
                    <div class="answer-explanation">
                        <strong>${item.question}</strong>
                        <p class="${isCorrect ? "correct-answer" : "wrong-answer"}">
                            ${
                                isCorrect
                                ? "Correct!"
                                : "Incorrect. Correct answer: " + item.options[item.answer]
                            }
                        </p>
                        <p>${item.explanation}</p>
                    </div>
                `;
            });

            const percentage = (score / questions.length) * 100;

            let remark = "";

            if (percentage >= 90) {
                remark = "Excellent! You have a very good understanding of the lesson.";
            } else if (percentage >= 80) {
                remark = "Very Good! Keep practicing to improve your knowledge.";
            } else if (percentage >= 70) {
                remark = "Good effort! Review the topics and try again.";
            } else {
                remark = "Keep studying! Review the lesson before retaking the quiz.";
            }

            quizResult.style.display = "block";

            quizResult.innerHTML = `
                <h3>Quiz Result</h3>
                <h2>${score} / ${questions.length}</h2>
                <p><strong>Score:</strong> ${percentage.toFixed(0)}%</p>
                <p>${remark}</p>
                <h3>Answer Explanations</h3>
                ${explanationHTML}
            `;

            quizResult.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    }


    // =====================================
    // RETAKE QUIZ
    // =====================================
    if (resetQuiz) {

        resetQuiz.addEventListener("click", function () {

            quizForm.reset();

            quizResult.style.display = "none";
            quizResult.innerHTML = "";

            displayQuestions();

            quizForm.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    }

});

/* =====================================
   DOWNLOAD LESSON 6 AS PDF
===================================== */

document.addEventListener("DOMContentLoaded", function () {

    const downloadPDF = document.getElementById("downloadPDF");

    if (downloadPDF) {

        downloadPDF.addEventListener("click", function () {

            const originalTitle = document.title;

            document.title = "Lesson 6 - DOM Manipulation and JavaScript Events";

            window.print();

            setTimeout(function () {
                document.title = originalTitle;
            }, 1000);

        });

    }

});
