
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("assessmentForm");
    const mcContainer = document.getElementById("multipleChoiceQuestions");
    const idContainer = document.getElementById("identificationQuestions");
    const tfContainer = document.getElementById("trueFalseQuestions");

    const results = document.getElementById("results");
    const explanationList = document.getElementById("explanationList");

    const totalQuestions = 35;

    // =========================================
    // PART I - MULTIPLE CHOICE (20 ITEMS)
    // =========================================

    const multipleChoice = [
        {
            question: "What does DOM stand for?",
            options: [
                "Document Object Model",
                "Data Object Management",
                "Digital Ordinance Model",
                "Document Orientation Method"
            ],
            answer: 0,
            explanation: "DOM stands for Document Object Model. It represents an HTML document as a structured collection of objects."
        },
        {
            question: "What is the main purpose of the DOM?",
            options: [
                "To create database tables",
                "To allow JavaScript to access and manipulate HTML elements",
                "To connect a computer to Wi-Fi",
                "To design images"
            ],
            answer: 1,
            explanation: "The DOM allows JavaScript to access, modify, add, and remove elements from an HTML document."
        },
        {
            question: "What does a browser create when it loads an HTML document?",
            options: [
                "A database",
                "A spreadsheet",
                "A DOM representation",
                "A CSS file"
            ],
            answer: 2,
            explanation: "The browser creates a DOM representation of the HTML document so scripts can interact with it."
        },
        {
            question: "Which DOM node represents the entire HTML document?",
            options: [
                "Text Node",
                "Element Node",
                "Attribute Node",
                "Document Node"
            ],
            answer: 3,
            explanation: "The Document Node represents the entire HTML document."
        },
        {
            question: "Which node represents HTML elements such as h1, p, div, and body?",
            options: [
                "Element Node",
                "Text Node",
                "Attribute Node",
                "Document Node"
            ],
            answer: 0,
            explanation: "An Element Node represents an HTML element such as h1, p, div, and body."
        },
        {
            question: "What is a parent element in the DOM?",
            options: [
                "An element without content",
                "An element that contains another element",
                "An element that has no attributes",
                "The last element in a document"
            ],
            answer: 1,
            explanation: "A parent is an element that contains another element or elements."
        },
        {
            question: "Which property returns all child nodes, including text nodes?",
            options: [
                "children",
                "parentElement",
                "childNodes",
                "firstElementChild"
            ],
            answer: 2,
            explanation: "childNodes returns all child nodes, including text nodes created by spaces and line breaks."
        },
        {
            question: "Which property returns only the child HTML elements?",
            options: [
                "childNodes",
                "lastChild",
                "firstChild",
                "children"
            ],
            answer: 3,
            explanation: "The children property returns only the child elements and does not include text nodes."
        },
        {
            question: "Which method selects an HTML element using its unique ID?",
            options: [
                "getElementById()",
                "getElementsByTagName()",
                "querySelectorAll()",
                "createElement()"
            ],
            answer: 0,
            explanation: "getElementById() selects an element based on its unique ID attribute."
        },
        {
            question: "Which method selects all elements that match a CSS selector?",
            options: [
                "querySelector()",
                "querySelectorAll()",
                "getElementById()",
                "appendChild()"
            ],
            answer: 1,
            explanation: "querySelectorAll() returns all elements matching the specified CSS selector."
        },
        {
            question: "Which method selects only the first element that matches a CSS selector?",
            options: [
                "getElementsByClassName()",
                "querySelectorAll()",
                "querySelector()",
                "getElementsByTagName()"
            ],
            answer: 2,
            explanation: "querySelector() returns the first matching element."
        },
        {
            question: "Which property changes the text content of an HTML element?",
            options: [
                "classList",
                "innerHTML",
                "style",
                "textContent"
            ],
            answer: 3,
            explanation: "textContent changes or retrieves the text inside an element without interpreting it as HTML."
        },
        {
            question: "Which property allows JavaScript to insert HTML markup inside an element?",
            options: [
                "innerHTML",
                "textContent",
                "parentElement",
                "children"
            ],
            answer: 0,
            explanation: "innerHTML gets or sets the HTML markup contained inside an element."
        },
        {
            question: "Which method creates a new HTML element?",
            options: [
                "appendChild()",
                "document.createElement()",
                "remove()",
                "querySelector()"
            ],
            answer: 1,
            explanation: "document.createElement() creates a new HTML element."
        },
        {
            question: "Which method inserts a new node as the last child of a parent element?",
            options: [
                "remove()",
                "getElementById()",
                "appendChild()",
                "preventDefault()"
            ],
            answer: 2,
            explanation: "appendChild() adds a node as the last child of the selected parent element."
        },
        {
            question: "Which method removes an element from the DOM?",
            options: [
                "createElement()",
                "appendChild()",
                "querySelector()",
                "remove()"
            ],
            answer: 3,
            explanation: "The remove() method removes an element from the DOM."
        },
        {
            question: "Which property provides add(), remove(), and toggle() methods for CSS classes?",
            options: [
                "classList",
                "textContent",
                "innerHTML",
                "parentElement"
            ],
            answer: 0,
            explanation: "classList provides methods such as add(), remove(), toggle(), and contains() for managing CSS classes."
        },
        {
            question: "Which JavaScript event occurs when a user clicks an element?",
            options: [
                "mouseover",
                "click",
                "keydown",
                "mouseout"
            ],
            answer: 1,
            explanation: "The click event occurs when a user clicks an HTML element."
        },
        {
            question: "Which method is commonly used to attach an event handler to an element?",
            options: [
                "createElement()",
                "appendChild()",
                "addEventListener()",
                "getElementById()"
            ],
            answer: 2,
            explanation: "addEventListener() registers a function that runs when a specified event occurs."
        },
        {
            question: "Which method is used to trigger an event programmatically?",
            options: [
                "removeEventListener()",
                "preventDefault()",
                "createElement()",
                "dispatchEvent()"
            ],
            answer: 3,
            explanation: "dispatchEvent() is used to dispatch or trigger an event programmatically."
        }
    ];

    // =========================================
    // PART II - IDENTIFICATION (10 ITEMS)
    // =========================================

    const identification = [
        {
            question: "A programming interface that represents an HTML document as a collection of objects.",
            answers: ["dom", "document object model"],
            correct: "DOM",
            explanation: "DOM stands for Document Object Model."
        },
        {
            question: "The node that represents the entire HTML document.",
            answers: ["document node"],
            correct: "Document Node",
            explanation: "The Document Node represents the complete HTML document."
        },
        {
            question: "A DOM relationship referring to an element that contains another element.",
            answers: ["parent", "parent element", "parent node"],
            correct: "Parent Element",
            explanation: "A parent element contains one or more child elements."
        },
        {
            question: "A property that returns all child nodes, including text nodes.",
            answers: ["childnodes", "childnodes property"],
            correct: "childNodes",
            explanation: "childNodes returns all child nodes, including text nodes."
        },
        {
            question: "A method that selects an element using its unique ID.",
            answers: ["getelementbyid", "getelementbyid()"],
            correct: "getElementById()",
            explanation: "getElementById() selects an element using its ID."
        },
        {
            question: "A method that selects the first element matching a CSS selector.",
            answers: ["queryselector", "queryselector()"],
            correct: "querySelector()",
            explanation: "querySelector() returns the first element matching the specified CSS selector."
        },
        {
            question: "A property used to change or retrieve the text inside an element.",
            answers: ["textcontent", "textcontent property"],
            correct: "textContent",
            explanation: "textContent accesses or changes the text content of an element."
        },
        {
            question: "A method used to create a new HTML element.",
            answers: ["createelement", "createelement()", "document.createelement", "document.createelement()"],
            correct: "document.createElement()",
            explanation: "document.createElement() creates a new HTML element."
        },
        {
            question: "A method used to attach an event handler to an HTML element.",
            answers: ["addeventlistener", "addeventlistener()"],
            correct: "addEventListener()",
            explanation: "addEventListener() registers a function to respond to a specific event."
        },
        {
            question: "A JavaScript object that can be created by developers to define their own events.",
            answers: ["customevent", "custom event"],
            correct: "CustomEvent",
            explanation: "CustomEvent allows developers to create custom events and include additional information through its detail property."
        }
    ];

    // =========================================
    // PART III - TRUE OR FALSE (5 ITEMS)
    // =========================================

    const trueFalse = [
        {
            question: "The DOM allows JavaScript to access and modify the content, structure, and styles of a webpage.",
            answer: true,
            explanation: "True. The DOM provides an interface for JavaScript to interact with webpage elements."
        },
        {
            question: "The children property returns all child nodes, including text nodes.",
            answer: false,
            explanation: "False. The children property returns only child HTML elements. The childNodes property also includes text nodes."
        },
        {
            question: "The querySelector() method returns all elements that match a CSS selector.",
            answer: false,
            explanation: "False. querySelector() returns only the first matching element. querySelectorAll() returns all matching elements."
        },
        {
            question: "The classList.toggle() method can add a class if it is absent or remove it if it is already present.",
            answer: true,
            explanation: "True. toggle() switches a CSS class on or off."
        },
        {
            question: "The dispatchEvent() method can be used to trigger a custom event.",
            answer: true,
            explanation: "True. dispatchEvent() can dispatch a CustomEvent that has been created using the CustomEvent constructor."
        }
    ];

    // =========================================
    // RENDER MULTIPLE CHOICE QUESTIONS
    // =========================================

    function renderMultipleChoice() {
        mcContainer.innerHTML = "";

        multipleChoice.forEach((item, index) => {

            const card = document.createElement("div");
            card.className = "question-card";

            const optionsHTML = item.options.map((option, optionIndex) => `
                <label class="answer-option">
                    <input
                        type="radio"
                        name="mc${index}"
                        value="${optionIndex}"
                    >
                    <span>${String.fromCharCode(65 + optionIndex)}. ${escapeHTML(option)}</span>
                </label>
            `).join("");

            card.innerHTML = `
                <h3>
                    <span class="question-number">${index + 1}.</span>
                    ${escapeHTML(item.question)}
                </h3>
                <div class="options-list">
                    ${optionsHTML}
                </div>
            `;

            mcContainer.appendChild(card);
        });
    }

    // =========================================
    // RENDER IDENTIFICATION QUESTIONS
    // =========================================

    function renderIdentification() {
        idContainer.innerHTML = "";

        identification.forEach((item, index) => {

            const card = document.createElement("div");
            card.className = "question-card";

            card.innerHTML = `
                <h3>
                    <span class="question-number">${index + 21}.</span>
                    ${escapeHTML(item.question)}
                </h3>

                <input
                    type="text"
                    name="id${index}"
                    class="identification-input"
                    placeholder="Type your answer here..."
                    autocomplete="off"
                >
            `;

            idContainer.appendChild(card);
        });
    }

    // =========================================
    // RENDER TRUE OR FALSE QUESTIONS
    // =========================================

    function renderTrueFalse() {
        tfContainer.innerHTML = "";

        trueFalse.forEach((item, index) => {

            const card = document.createElement("div");
            card.className = "question-card";

            card.innerHTML = `
                <h3>
                    <span class="question-number">${index + 31}.</span>
                    ${escapeHTML(item.question)}
                </h3>

                <div class="options-list">
                    <label class="answer-option">
                        <input type="radio" name="tf${index}" value="true">
                        <span>True</span>
                    </label>

                    <label class="answer-option">
                        <input type="radio" name="tf${index}" value="false">
                        <span>False</span>
                    </label>
                </div>
            `;

            tfContainer.appendChild(card);
        });
    }

    // =========================================
    // ESCAPE HTML
    // =========================================

    function escapeHTML(value) {
        return String(value).replace(/[&<>"']/g, function (character) {
            const characters = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#039;"
            };

            return characters[character];
        });
    }

    // =========================================
    // NORMALIZE IDENTIFICATION ANSWERS
    // =========================================

    function normalizeAnswer(value) {
        return value
            .toLowerCase()
            .trim()
            .replace(/\s+/g, "")
            .replace(/[()]/g, "");
    }

    // =========================================
    // ASSESSMENT PROGRESS
    // =========================================

    function updateProgress() {
        const answeredMC = multipleChoice.filter((item, index) =>
            form.querySelector(`input[name="mc${index}"]:checked`)
        ).length;

        const answeredID = identification.filter((item, index) =>
            form.querySelector(`input[name="id${index}"]`).value.trim() !== ""
        ).length;

        const answeredTF = trueFalse.filter((item, index) =>
            form.querySelector(`input[name="tf${index}"]:checked`)
        ).length;

        const answered = answeredMC + answeredID + answeredTF;
        const percentage = (answered / totalQuestions) * 100;

        document.getElementById("progressText").textContent =
            `${answered} / ${totalQuestions} Answered`;

        document.getElementById("progressBar").style.width =
            `${percentage}%`;
    }

    form.addEventListener("change", updateProgress);
    form.addEventListener("input", updateProgress);

    // =========================================
    // CHECK UNANSWERED QUESTIONS
    // =========================================

    function getUnansweredQuestions() {
        const unanswered = [];

        multipleChoice.forEach((item, index) => {
            if (!form.querySelector(`input[name="mc${index}"]:checked`)) {
                unanswered.push(index + 1);
            }
        });

        identification.forEach((item, index) => {
            const input = form.querySelector(`input[name="id${index}"]`);

            if (!input.value.trim()) {
                unanswered.push(index + 21);
            }
        });

        trueFalse.forEach((item, index) => {
            if (!form.querySelector(`input[name="tf${index}"]:checked`)) {
                unanswered.push(index + 31);
            }
        });

        return unanswered;
    }

    // =========================================
    // CHECK ANSWERS AND CALCULATE SCORE
    // =========================================

    function calculateScore() {

        let mcScore = 0;
        let idScore = 0;
        let tfScore = 0;

        const explanations = [];

        // MULTIPLE CHOICE

        multipleChoice.forEach((item, index) => {

            const selected = form.querySelector(
                `input[name="mc${index}"]:checked`
            );

            const userIndex = Number(selected.value);
            const isCorrect = userIndex === item.answer;

            if (isCorrect) {
                mcScore++;
            }

            explanations.push({
                number: index + 1,
                type: "Multiple Choice",
                question: item.question,
                userAnswer: item.options[userIndex],
                correctAnswer: item.options[item.answer],
                isCorrect,
                explanation: item.explanation
            });
        });

        // IDENTIFICATION

        identification.forEach((item, index) => {

            const input = form.querySelector(`input[name="id${index}"]`);
            const userAnswer = input.value.trim();

            const isCorrect = item.answers.some(answer =>
                normalizeAnswer(answer) === normalizeAnswer(userAnswer)
            );

            if (isCorrect) {
                idScore++;
            }

            explanations.push({
                number: index + 21,
                type: "Identification",
                question: item.question,
                userAnswer,
                correctAnswer: item.correct,
                isCorrect,
                explanation: item.explanation
            });
        });

        // TRUE OR FALSE

        trueFalse.forEach((item, index) => {

            const selected = form.querySelector(
                `input[name="tf${index}"]:checked`
            );

            const userAnswer = selected.value === "true";
            const isCorrect = userAnswer === item.answer;

            if (isCorrect) {
                tfScore++;
            }

            explanations.push({
                number: index + 31,
                type: "True or False",
                question: item.question,
                userAnswer: userAnswer ? "True" : "False",
                correctAnswer: item.answer ? "True" : "False",
                isCorrect,
                explanation: item.explanation
            });
        });

        const totalScore = mcScore + idScore + tfScore;
        const percentage = Math.round((totalScore / totalQuestions) * 100);

        displayResults(
            totalScore,
            percentage,
            mcScore,
            idScore,
            tfScore,
            explanations
        );
    }

    // =========================================
    // DISPLAY ASSESSMENT RESULTS
    // =========================================

    function displayResults(
        totalScore,
        percentage,
        mcScore,
        idScore,
        tfScore,
        explanations
    ) {

        document.getElementById("scoreNumber").textContent =
            `${totalScore}/${totalQuestions}`;

        document.getElementById("scorePercentage").textContent =
            `${percentage}%`;

        document.getElementById("mcScore").textContent =
            `${mcScore}/20`;

        document.getElementById("idScore").textContent =
            `${idScore}/10`;

        document.getElementById("tfScore").textContent =
            `${tfScore}/5`;

        let message;
        let details;

        if (percentage >= 90) {
            message = "Excellent Work!";
            details = "Outstanding performance! You have demonstrated an excellent understanding of DOM Manipulation and JavaScript Events.";
        } else if (percentage >= 80) {
            message = "Very Good!";
            details = "Great job! You have a very good understanding of the concepts discussed in Chapter 6.";
        } else if (percentage >= 75) {
            message = "Good Job!";
            details = "Congratulations! You passed the assessment. Continue reviewing the lesson to strengthen your knowledge.";
        } else if (percentage >= 60) {
            message = "Keep Practicing!";
            details = "You are making progress. Review the questions and explanations to improve your understanding.";
        } else {
            message = "Needs Improvement";
            details = "Do not give up! Review Chapter 6 and try the assessment again to improve your score.";
        }

        document.getElementById("resultMessage").textContent = message;
        document.getElementById("resultDetails").textContent = details;

        explanationList.innerHTML = "";

        explanations.forEach(item => {

            const card = document.createElement("div");

            card.className = item.isCorrect
                ? "explanation-item correct-answer"
                : "explanation-item wrong-answer";

            card.innerHTML = `
                <div class="explanation-top">
                    <strong>Question ${item.number}</strong>
                    <span>${item.isCorrect ? "CORRECT" : "INCORRECT"}</span>
                </div>

                <p class="explanation-type">${escapeHTML(item.type)}</p>

                <p class="explanation-question">
                    ${escapeHTML(item.question)}
                </p>

                <p>
                    <strong>Your Answer:</strong>
                    ${escapeHTML(item.userAnswer)}
                </p>

                <p>
                    <strong>Correct Answer:</strong>
                    ${escapeHTML(item.correctAnswer)}
                </p>

                <p class="explanation-text">
                    <strong>Explanation:</strong>
                    ${escapeHTML(item.explanation)}
                </p>
            `;

            explanationList.appendChild(card);
        });

        results.hidden = false;

        results.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    // =========================================
    // RESET ASSESSMENT
    // =========================================

    function resetAssessment() {

        form.reset();

        results.hidden = true;

        explanationList.innerHTML = "";

        document.getElementById("scoreNumber").textContent = "0/35";
        document.getElementById("scorePercentage").textContent = "0%";

        document.getElementById("mcScore").textContent = "0/20";
        document.getElementById("idScore").textContent = "0/10";
        document.getElementById("tfScore").textContent = "0/5";

        document.getElementById("resultMessage").textContent =
            "Assessment completed!";

        document.getElementById("resultDetails").textContent = "";

        updateProgress();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    // =========================================
    // SUBMIT BUTTON
    // =========================================

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const unanswered = getUnansweredQuestions();

        if (unanswered.length > 0) {

            alert(
                "Please answer all 35 questions before submitting.\n\n" +
                "Unanswered question numbers: " +
                unanswered.join(", ")
            );

            const first = unanswered[0];

            if (first <= 20) {
                document.getElementById("multiple-choice")
                    .scrollIntoView({ behavior: "smooth" });
            } else if (first <= 30) {
                document.getElementById("identification")
                    .scrollIntoView({ behavior: "smooth" });
            } else {
                document.getElementById("true-false")
                    .scrollIntoView({ behavior: "smooth" });
            }

            return;
        }

        calculateScore();
    });

    // =========================================
    // RESET AND TRY AGAIN BUTTONS
    // =========================================

    document.getElementById("resetAssessment")
        .addEventListener("click", resetAssessment);

    document.getElementById("tryAgain")
        .addEventListener("click", function () {
            resetAssessment();

            document.getElementById("assessment-intro")
                .scrollIntoView({ behavior: "smooth" });
        });

    // =========================================
    // BACK TO TOP
    // =========================================

    const backToTop = document.getElementById("backToTop");

    if (backToTop) {

        window.addEventListener("scroll", function () {
            backToTop.style.display =
                window.scrollY > 300 ? "block" : "none";
        });

        backToTop.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // =========================================
    // INITIALIZE ASSESSMENT
    // =========================================

    renderMultipleChoice();
    renderIdentification();
    renderTrueFalse();

    updateProgress();

});
