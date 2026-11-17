
document.addEventListener("DOMContentLoaded", function () {

    const assessmentForm = document.getElementById("assessmentForm");

    const mcContainer = document.getElementById("multipleChoiceQuestions");
    const idContainer = document.getElementById("identificationQuestions");
    const tfContainer = document.getElementById("trueFalseQuestions");

    const progressText = document.getElementById("progressText");
    const progressBar = document.getElementById("progressBar");

    const resultsSection = document.getElementById("results");
    const resetButton = document.getElementById("resetAssessment");
    const tryAgainButton = document.getElementById("tryAgain");

    const explanationList = document.getElementById("explanationList");

    /* =====================================
       PART I - MULTIPLE CHOICE (20 ITEMS)
    ===================================== */

    const multipleChoice = [
        {
            question: "What is the main purpose of HTML forms?",
            options: [
                "To change the background of a webpage",
                "To collect information from users",
                "To create animations",
                "To store website images"
            ],
            answer: 1,
            explanation: "HTML forms allow websites to collect information such as names, email addresses, passwords, and other user details."
        },
        {
            question: "What is form validation?",
            options: [
                "The process of designing a webpage",
                "The process of checking user input against required rules",
                "The process of deleting form data",
                "The process of adding images to a form"
            ],
            answer: 1,
            explanation: "Form validation checks whether the information entered by a user is complete and follows the required format."
        },
        {
            question: "Which event occurs when a user submits an HTML form?",
            options: [
                "click",
                "mouseover",
                "submit",
                "keydown"
            ],
            answer: 2,
            explanation: "The submit event occurs when a user submits a form by clicking its submit button or pressing Enter."
        },
        {
            question: "What is the purpose of preventDefault()?",
            options: [
                "To stop the browser's default action",
                "To delete an input field",
                "To refresh the webpage",
                "To create a new form"
            ],
            answer: 0,
            explanation: "preventDefault() stops the browser's default behavior, allowing JavaScript to validate information before submission."
        },
        {
            question: "Which JavaScript method removes spaces from the beginning and end of a string?",
            options: [
                "slice()",
                "trim()",
                "replace()",
                "split()"
            ],
            answer: 1,
            explanation: "The trim() method removes whitespace from the beginning and end of a string."
        },
        {
            question: "Which property checks whether a checkbox is selected?",
            options: [
                "value",
                "selected",
                "checked",
                "disabled"
            ],
            answer: 2,
            explanation: "The checked property returns true if a checkbox is selected and false if it is not."
        },
        {
            question: "What is a regular expression (Regex)?",
            options: [
                "A CSS styling technique",
                "A pattern used to match and validate strings",
                "An HTML heading element",
                "A method for creating buttons"
            ],
            answer: 1,
            explanation: "A regular expression is a pattern used to match or validate text such as email addresses, phone numbers, and passwords."
        },
        {
            question: "Which method checks whether a string matches a regular expression?",
            options: [
                "test()",
                "check()",
                "verify()",
                "validate()"
            ],
            answer: 0,
            explanation: "The test() method checks whether a string matches a regular expression and returns true or false."
        },
        {
            question: "Which event is commonly used for real-time input validation?",
            options: [
                "load",
                "input",
                "resize",
                "mouseover"
            ],
            answer: 1,
            explanation: "The input event fires whenever the value of an input field changes."
        },
        {
            question: "What does client-side validation mean?",
            options: [
                "Validation performed in the user's browser",
                "Validation performed only by the database",
                "Validation performed by the server only",
                "Validation performed by the website administrator"
            ],
            answer: 0,
            explanation: "Client-side validation is performed in the user's browser before the information is sent to the server."
        },
        {
            question: "Why is server-side validation still necessary?",
            options: [
                "Because HTML forms cannot contain buttons",
                "Because client-side validation can be bypassed",
                "Because JavaScript cannot read text",
                "Because CSS cannot style forms"
            ],
            answer: 1,
            explanation: "Client-side validation can be bypassed, so the server must independently validate submitted information for security and data quality."
        },
        {
            question: "Which input type is commonly used for a password field?",
            options: [
                "text",
                "email",
                "password",
                "number"
            ],
            answer: 2,
            explanation: "The password input type hides the characters entered by the user."
        },
        {
            question: "What does the disabled property do to a submit button?",
            options: [
                "Changes its text",
                "Prevents the button from being used",
                "Automatically submits the form",
                "Deletes the button"
            ],
            answer: 1,
            explanation: "The disabled property prevents users from clicking or using the button."
        },
        {
            question: "Which method can select a checked radio button using a CSS selector?",
            options: [
                "getElementById()",
                "querySelector()",
                "createElement()",
                "write()"
            ],
            answer: 1,
            explanation: "querySelector() can select a checked radio button using a selector such as input[name='course']:checked."
        },
        {
            question: "Which regular expression pattern checks for exactly 10 digits?",
            options: [
                "/^[A-Za-z]+$/",
                "/^\\d{10}$/",
                "/^[^\\s]+$/",
                "/^.{8,}$/"
            ],
            answer: 1,
            explanation: "The pattern /^\\d{10}$/ matches a string containing exactly 10 digits."
        },
        {
            question: "What is the purpose of displaying error messages below input fields?",
            options: [
                "To confuse users",
                "To help users identify and correct mistakes",
                "To automatically delete information",
                "To disable the entire webpage"
            ],
            answer: 1,
            explanation: "Clear error messages help users understand what is wrong and how to correct their input."
        },
        {
            question: "Which property is used to get the selected value of a dropdown list?",
            options: [
                "checked",
                "disabled",
                "value",
                "className"
            ],
            answer: 2,
            explanation: "The value property returns the value of the currently selected option in a select element."
        },
        {
            question: "What is real-time validation?",
            options: [
                "Checking input only after closing the browser",
                "Checking user input while the user is typing or changing a field",
                "Checking information once a year",
                "Checking only the webpage's design"
            ],
            answer: 1,
            explanation: "Real-time validation checks user input as it changes and provides immediate feedback."
        },
        {
            question: "Which of the following can be used to check password strength?",
            options: [
                "Password length and character requirements",
                "The webpage background color",
                "The number of images on a page",
                "The browser window size"
            ],
            answer: 0,
            explanation: "Password strength can be evaluated using length, uppercase and lowercase letters, numbers, and special characters."
        },
        {
            question: "What should developers do before processing submitted form data?",
            options: [
                "Ignore all user input",
                "Validate the submitted information",
                "Remove all form controls",
                "Disable the browser"
            ],
            answer: 1,
            explanation: "Developers should validate submitted data to ensure it follows the required rules before processing it."
        }
    ];

    /* =====================================
       PART II - IDENTIFICATION (10 ITEMS)
    ===================================== */

    const identification = [
        {
            question: "The HTML structure used to collect information from users.",
            answers: ["html form", "form"],
            explanation: "An HTML form collects user information through input fields and other form controls."
        },
        {
            question: "The process of checking whether user input follows required rules.",
            answers: ["form validation", "validation"],
            explanation: "Form validation checks whether the information entered by a user is complete and correctly formatted."
        },
        {
            question: "The JavaScript event that occurs when a form is submitted.",
            answers: ["submit event", "submit"],
            explanation: "The submit event is triggered when a form is submitted."
        },
        {
            question: "The JavaScript method that prevents the browser's default action.",
            answers: ["preventdefault()", "preventdefault"],
            explanation: "preventDefault() prevents the browser from performing its default action."
        },
        {
            question: "The JavaScript method that removes whitespace from both ends of a string.",
            answers: ["trim()", "trim"],
            explanation: "The trim() method removes spaces and other whitespace from the beginning and end of a string."
        },
        {
            question: "A pattern used to match and validate strings.",
            answers: ["regular expression", "regex", "regular expressions"],
            explanation: "A regular expression or Regex defines a pattern for matching and validating text."
        },
        {
            question: "The JavaScript method that tests whether a string matches a regular expression.",
            answers: ["test()", "test"],
            explanation: "The test() method returns true if the string matches the regular expression and false otherwise."
        },
        {
            question: "The process of checking user input while the user is typing.",
            answers: ["real-time validation", "realtime validation", "real time validation"],
            explanation: "Real-time validation provides feedback as the user types or changes an input."
        },
        {
            question: "The form property that indicates whether a checkbox or radio button is selected.",
            answers: ["checked", "checked property"],
            explanation: "The checked property indicates whether a checkbox or radio button is selected."
        },
        {
            question: "Validation performed by the web server after receiving submitted data.",
            answers: ["server-side validation", "server side validation"],
            explanation: "Server-side validation checks submitted information on the server and is important for security."
        }
    ];

    /* =====================================
       PART III - TRUE OR FALSE (5 ITEMS)
    ===================================== */

    const trueFalse = [
        {
            question: "HTML forms are used to collect information from website users.",
            answer: true,
            explanation: "True. HTML forms collect information such as names, email addresses, passwords, and other user details."
        },
        {
            question: "The preventDefault() method automatically validates all form fields.",
            answer: false,
            explanation: "False. preventDefault() only prevents the default browser action. Developers must write the validation logic separately."
        },
        {
            question: "Client-side validation alone is enough to guarantee the security of submitted data.",
            answer: false,
            explanation: "False. Client-side validation can be bypassed. Server-side validation is also necessary."
        },
        {
            question: "The input event can be used to validate information while a user is typing.",
            answer: true,
            explanation: "True. The input event fires whenever the value of an input field changes."
        },
        {
            question: "The checked property can be used to determine whether a checkbox is selected.",
            answer: true,
            explanation: "True. The checked property returns a Boolean value indicating whether the checkbox is selected."
        }
    ];

    const totalQuestions =
        multipleChoice.length + identification.length + trueFalse.length;

    /* =====================================
       CREATE QUESTION ELEMENTS
    ===================================== */

    function createQuestionTitle(number, question) {
        const title = document.createElement("h3");
        title.className = "question-title";

        const badge = document.createElement("span");
        badge.className = "question-number";
        badge.textContent = number;

        const text = document.createElement("span");
        text.textContent = question;

        title.append(badge, text);

        return title;
    }

    function createRadioOption(name, value, labelText) {
        const label = document.createElement("label");
        label.className = "answer-option";

        const input = document.createElement("input");
        input.type = "radio";
        input.name = name;
        input.value = value;

        const text = document.createElement("span");
        text.textContent = labelText;

        label.append(input, text);

        return label;
    }

    /* =====================================
       DISPLAY MULTIPLE CHOICE
    ===================================== */

    function displayMultipleChoice() {

        mcContainer.innerHTML = "";

        multipleChoice.forEach((item, index) => {

            const card = document.createElement("div");
            card.className = "question-card";

            card.appendChild(
                createQuestionTitle(index + 1, item.question)
            );

            item.options.forEach((option, optionIndex) => {

                const optionLabel = createRadioOption(
                    "mc" + index,
                    optionIndex,
                    String.fromCharCode(65 + optionIndex) + ". " + option
                );

                card.appendChild(optionLabel);

            });

            mcContainer.appendChild(card);

        });

    }

    /* =====================================
       DISPLAY IDENTIFICATION
    ===================================== */

    function displayIdentification() {

        idContainer.innerHTML = "";

        identification.forEach((item, index) => {

            const card = document.createElement("div");
            card.className = "question-card";

            card.appendChild(
                createQuestionTitle(index + 21, item.question)
            );

            const input = document.createElement("input");
            input.type = "text";
            input.className = "identification-input";
            input.name = "identification" + index;
            input.placeholder = "Type your answer here...";
            input.autocomplete = "off";

            card.appendChild(input);
            idContainer.appendChild(card);

        });

    }

    /* =====================================
       DISPLAY TRUE OR FALSE
    ===================================== */

    function displayTrueFalse() {

        tfContainer.innerHTML = "";

        trueFalse.forEach((item, index) => {

            const card = document.createElement("div");
            card.className = "question-card";

            card.appendChild(
                createQuestionTitle(index + 31, item.question)
            );

            card.appendChild(
                createRadioOption("tf" + index, "true", "True")
            );

            card.appendChild(
                createRadioOption("tf" + index, "false", "False")
            );

            tfContainer.appendChild(card);

        });

    }

    /* =====================================
       PROGRESS TRACKER
    ===================================== */

    function updateProgress() {

        let answered = 0;

        multipleChoice.forEach((item, index) => {
            if (document.querySelector('input[name="mc' + index + '"]:checked')) {
                answered++;
            }
        });

        identification.forEach((item, index) => {
            const input = document.querySelector(
                'input[name="identification' + index + '"]'
            );

            if (input && input.value.trim() !== "") {
                answered++;
            }
        });

        trueFalse.forEach((item, index) => {
            if (document.querySelector('input[name="tf' + index + '"]:checked')) {
                answered++;
            }
        });

        progressText.textContent =
            answered + " / " + totalQuestions + " Answered";

        progressBar.style.width =
            (answered / totalQuestions * 100) + "%";
    }

    /* =====================================
       ANSWER NORMALIZATION
    ===================================== */

    function normalizeAnswer(value) {
        return value
            .trim()
            .toLowerCase()
            .replace(/\s+/g, " ");
    }

    /* =====================================
       SUBMIT ASSESSMENT
    ===================================== */

    assessmentForm.addEventListener("submit", function (event) {

        event.preventDefault();

        let unanswered = [];

        multipleChoice.forEach((item, index) => {
            if (!document.querySelector('input[name="mc' + index + '"]:checked')) {
                unanswered.push(index + 1);
            }
        });

        identification.forEach((item, index) => {
            const input = document.querySelector(
                'input[name="identification' + index + '"]'
            );

            if (!input || input.value.trim() === "") {
                unanswered.push(index + 21);
            }
        });

        trueFalse.forEach((item, index) => {
            if (!document.querySelector('input[name="tf' + index + '"]:checked')) {
                unanswered.push(index + 31);
            }
        });

        if (unanswered.length > 0) {
            alert(
                "Please answer all 35 questions before submitting.\n\n" +
                "Unanswered question numbers: " + unanswered.join(", ")
            );
            return;
        }

        let mcScore = 0;
        let idScore = 0;
        let tfScore = 0;

        multipleChoice.forEach((item, index) => {

            const selected = document.querySelector(
                'input[name="mc' + index + '"]:checked'
            );

            if (Number(selected.value) === item.answer) {
                mcScore++;
            }

        });

        identification.forEach((item, index) => {

            const input = document.querySelector(
                'input[name="identification' + index + '"]'
            );

            const userAnswer = normalizeAnswer(input.value);

            if (item.answers.some(answer =>
                normalizeAnswer(answer) === userAnswer
            )) {
                idScore++;
            }

        });

        trueFalse.forEach((item, index) => {

            const selected = document.querySelector(
                'input[name="tf' + index + '"]:checked'
            );

            if (selected.value === String(item.answer)) {
                tfScore++;
            }

        });

        const totalScore = mcScore + idScore + tfScore;

        showResults(totalScore, mcScore, idScore, tfScore);

    });

    /* =====================================
       SHOW RESULTS
    ===================================== */

    function showResults(totalScore, mcScore, idScore, tfScore) {

        const percentage = Math.round(
            (totalScore / totalQuestions) * 100
        );

        document.getElementById("scoreNumber").textContent =
            totalScore + "/" + totalQuestions;

        document.getElementById("scorePercentage").textContent =
            percentage + "%";

        document.getElementById("mcScore").textContent =
            mcScore + "/20";

        document.getElementById("idScore").textContent =
            idScore + "/10";

        document.getElementById("tfScore").textContent =
            tfScore + "/5";

        let message = "";
        let details = "";

        if (percentage >= 90) {
            message = "Excellent Work!";
            details = "Outstanding! You have an excellent understanding of Forms and Input Validation.";
        } else if (percentage >= 80) {
            message = "Very Good!";
            details = "Great job! You understand most of the important concepts in Chapter 7.";
        } else if (percentage >= 75) {
            message = "Good Job!";
            details = "You passed the assessment. Continue reviewing the topics to improve your knowledge.";
        } else if (percentage >= 60) {
            message = "Keep Practicing!";
            details = "You are making progress. Review the lesson and study the explanations before trying again.";
        } else {
            message = "More Practice Needed";
            details = "Review Chapter 7 carefully and retake the assessment to improve your score.";
        }

        document.getElementById("resultMessage").textContent = message;
        document.getElementById("resultDetails").textContent = details;

        displayExplanations();

        resultsSection.hidden = false;

        assessmentForm.querySelectorAll("input").forEach(input => {
            input.disabled = true;
        });

        assessmentForm.querySelectorAll("button").forEach(button => {
            button.disabled = true;
        });

        resultsSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

    /* =====================================
       DISPLAY ANSWER EXPLANATIONS
    ===================================== */

    function addExplanation(number, question, userAnswer, correctAnswer, explanation, isCorrect) {

        const card = document.createElement("div");

        card.className =
            "explanation-item " + (isCorrect ? "correct" : "incorrect");

        const title = document.createElement("h4");
        title.textContent = "Question " + number + ": " + question;

        const yourAnswer = document.createElement("p");
        yourAnswer.textContent = "Your Answer: " + userAnswer;
        yourAnswer.className = isCorrect ? "correct-text" : "incorrect-text";

        const answer = document.createElement("p");
        answer.textContent = "Correct Answer: " + correctAnswer;
        answer.className = "correct-text";

        const explanationText = document.createElement("p");
        explanationText.textContent = "Explanation: " + explanation;

        card.append(title, yourAnswer, answer, explanationText);

        explanationList.appendChild(card);
    }

    function displayExplanations() {

        explanationList.innerHTML = "";

        /* MULTIPLE CHOICE */

        multipleChoice.forEach((item, index) => {

            const selected = document.querySelector(
                'input[name="mc' + index + '"]:checked'
            );

            const selectedIndex = Number(selected.value);
            const isCorrect = selectedIndex === item.answer;

            addExplanation(
                index + 1,
                item.question,
                item.options[selectedIndex],
                item.options[item.answer],
                item.explanation,
                isCorrect
            );

        });

        /* IDENTIFICATION */

        identification.forEach((item, index) => {

            const input = document.querySelector(
                'input[name="identification' + index + '"]'
            );

            const userAnswer = input.value.trim();
            const normalized = normalizeAnswer(userAnswer);

            const isCorrect = item.answers.some(answer =>
                normalizeAnswer(answer) === normalized
            );

            addExplanation(
                index + 21,
                item.question,
                userAnswer,
                item.answers[0],
                item.explanation,
                isCorrect
            );

        });

        /* TRUE OR FALSE */

        trueFalse.forEach((item, index) => {

            const selected = document.querySelector(
                'input[name="tf' + index + '"]:checked'
            );

            const userAnswer = selected.value === "true";
            const isCorrect = userAnswer === item.answer;

            addExplanation(
                index + 31,
                item.question,
                userAnswer ? "True" : "False",
                item.answer ? "True" : "False",
                item.explanation,
                isCorrect
            );

        });

    }

    /* =====================================
       RESET ASSESSMENT
    ===================================== */

    function resetAssessment() {

        assessmentForm.reset();

        assessmentForm.querySelectorAll("input").forEach(input => {
            input.disabled = false;
        });

        assessmentForm.querySelectorAll("button").forEach(button => {
            button.disabled = false;
        });

        resultsSection.hidden = true;
        explanationList.innerHTML = "";

        updateProgress();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

    resetButton.addEventListener("click", resetAssessment);
    tryAgainButton.addEventListener("click", resetAssessment);

    /* =====================================
       EVENT LISTENERS FOR PROGRESS
    ===================================== */

    assessmentForm.addEventListener("change", updateProgress);
    assessmentForm.addEventListener("input", updateProgress);

    /* =====================================
       BACK TO TOP
    ===================================== */

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

    /* =====================================
       INITIALIZE ASSESSMENT
    ===================================== */

    displayMultipleChoice();
    displayIdentification();
    displayTrueFalse();
    updateProgress();

});

document.addEventListener("DOMContentLoaded", function () {

    const settingsToggle = document.getElementById("settingsToggle");
    const settingsPanel = document.getElementById("settingsPanel");
    const settingsClose = document.getElementById("settingsClose");

    const darkModeButton = document.getElementById("darkModeButton");
    const increaseText = document.getElementById("increaseText");
    const decreaseText = document.getElementById("decreaseText");
    const textSizeValue = document.getElementById("textSizeValue");
    const resetSettings = document.getElementById("resetSettings");

    const STORAGE_DARK = "webtechDarkMode";
    const STORAGE_SIZE = "webtechTextSize";

    let textSize = Number(localStorage.getItem(STORAGE_SIZE)) || 100;
    let darkMode = localStorage.getItem(STORAGE_DARK) === "true";

    // APPLY DARK MODE
    function applyDarkMode() {
        document.body.classList.toggle("dark-mode", darkMode);
        document.documentElement.classList.toggle("dark-mode", darkMode);

        if (darkModeButton) {
            darkModeButton.textContent = darkMode
                ? "☀️ Light Mode"
                : "🌙 Dark Mode";
        }

        localStorage.setItem(STORAGE_DARK, darkMode);
    }

    // APPLY TEXT SIZE
    function applyTextSize() {
        textSize = Math.max(80, Math.min(130, textSize));

        document.documentElement.style.fontSize = textSize + "%";

        if (textSizeValue) {
            textSizeValue.textContent = textSize + "%";
        }

        localStorage.setItem(STORAGE_SIZE, textSize);
    }

    // OPEN SETTINGS
    if (settingsToggle && settingsPanel) {
        settingsToggle.addEventListener("click", function () {
            settingsPanel.classList.toggle("active");
        });
    }

    // CLOSE SETTINGS
    if (settingsClose && settingsPanel) {
        settingsClose.addEventListener("click", function () {
            settingsPanel.classList.remove("active");
        });
    }

    // DARK MODE BUTTON
    if (darkModeButton) {
        darkModeButton.addEventListener("click", function () {
            darkMode = !darkMode;
            applyDarkMode();
        });
    }

    // INCREASE TEXT
    if (increaseText) {
        increaseText.addEventListener("click", function () {
            textSize += 5;
            applyTextSize();
        });
    }

    // DECREASE TEXT
    if (decreaseText) {
        decreaseText.addEventListener("click", function () {
            textSize -= 5;
            applyTextSize();
        });
    }

    // RESET SETTINGS
    if (resetSettings) {
        resetSettings.addEventListener("click", function () {
            darkMode = false;
            textSize = 100;

            applyDarkMode();
            applyTextSize();
        });
    }

    // LOAD SAVED SETTINGS
    applyDarkMode();
    applyTextSize();

});

/* =========================================
   CHAPTER 7 ASSESSMENT DISPLAY SETTINGS
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const settingsToggle = document.getElementById("settingsToggle");
    const settingsPanel = document.getElementById("settingsPanel");
    const darkModeButton = document.getElementById("darkModeButton");
    const increaseText = document.getElementById("increaseText");
    const decreaseText = document.getElementById("decreaseText");
    const textSizeValue = document.getElementById("textSizeValue");
    const resetSettings = document.getElementById("resetSettings");

    const DARK_KEY = "webtechDarkMode";
    const SIZE_KEY = "webtechTextSize";

    let darkMode = localStorage.getItem(DARK_KEY) === "true";
    let textSize = Number(localStorage.getItem(SIZE_KEY)) || 100;

    // OPEN AND CLOSE SETTINGS
    if (settingsToggle && settingsPanel) {
        settingsToggle.addEventListener("click", function () {
            settingsPanel.classList.toggle("show");
        });
    }

    // DARK MODE
    function applyDarkMode() {
        document.documentElement.classList.toggle("dark-mode", darkMode);
        document.body.classList.toggle("dark-mode", darkMode);

        localStorage.setItem(DARK_KEY, darkMode);

        if (darkModeButton) {
            darkModeButton.textContent = darkMode
                ? "☀️ Light Mode"
                : "🌙 Dark Mode";
        }
    }

    if (darkModeButton) {
        darkModeButton.addEventListener("click", function () {
            darkMode = !darkMode;
            applyDarkMode();
        });
    }

    // TEXT SIZE
    function applyTextSize() {
        textSize = Math.max(80, Math.min(130, textSize));

        document.documentElement.style.setProperty(
            "--display-text-scale",
            textSize / 100
        );

        if (textSizeValue) {
            textSizeValue.textContent = textSize + "%";
        }

        localStorage.setItem(SIZE_KEY, textSize);
    }

    if (increaseText) {
        increaseText.addEventListener("click", function () {
            textSize += 5;
            applyTextSize();
        });
    }

    if (decreaseText) {
        decreaseText.addEventListener("click", function () {
            textSize -= 5;
            applyTextSize();
        });
    }

    // RESET SETTINGS
    if (resetSettings) {
        resetSettings.addEventListener("click", function () {
            darkMode = false;
            textSize = 100;

            applyDarkMode();
            applyTextSize();
        });
    }

    // LOAD SAVED SETTINGS
    applyDarkMode();
    applyTextSize();

});
