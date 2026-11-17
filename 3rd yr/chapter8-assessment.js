
/* =====================================
   CHAPTER 8 ASSESSMENT
   USER INTERFACE DESIGN AND ACCESSIBILITY
===================================== */

// =====================================
// PART I - MULTIPLE CHOICE
// =====================================

const multipleChoiceData = [
    {
        question: "What does User Interface (UI) refer to?",
        options: [
            "The overall experience of using a product",
            "The points of interaction between a person and a digital product",
            "The programming language used to create websites",
            "The internet connection of a digital product"
        ],
        answer: 1,
        explanation: "User Interface refers to the screens, menus, buttons, icons, text fields, and other elements that allow users to interact with a digital product."
    },
    {
        question: "What is the main focus of UI Design?",
        options: [
            "The complete experience of using a product",
            "The business strategy of a company",
            "The visual layout, controls, typography, colors, and interactive behavior",
            "The hardware components of a computer"
        ],
        answer: 2,
        explanation: "UI Design focuses on the interface itself, including its layout, controls, typography, colors, labels, and interactive behavior."
    },
    {
        question: "Which statement best describes User Experience (UX) Design?",
        options: [
            "It considers the complete experience of using a product",
            "It focuses only on button colors",
            "It creates only website icons",
            "It focuses only on the appearance of a screen"
        ],
        answer: 0,
        explanation: "UX Design considers the complete experience of using a product, including how easily users can achieve their goals."
    },
    {
        question: "Which interface type uses windows, icons, menus, and pointers?",
        options: [
            "Command-Line Interface",
            "Voice User Interface",
            "Touch Interface",
            "Graphical User Interface"
        ],
        answer: 3,
        explanation: "A Graphical User Interface (GUI) uses visual elements such as windows, icons, menus, and pointers."
    },
    {
        question: "Which principle presents only the information and controls needed for the current task?",
        options: [
            "Complexity",
            "Simplicity and focus",
            "User restriction",
            "Visual decoration"
        ],
        answer: 1,
        explanation: "Simplicity and focus reduce unnecessary distractions while keeping important information and functions available."
    },
    {
        question: "Why is consistency important in UI Design?",
        options: [
            "It makes every page look completely different",
            "It removes all navigation elements",
            "It helps users predict how interface elements will behave",
            "It makes the system more complicated"
        ],
        answer: 2,
        explanation: "Consistency uses similar visual styles and interaction patterns so users can predict what will happen."
    },
    {
        question: "What is the purpose of visual hierarchy?",
        options: [
            "To communicate the relative importance of information",
            "To remove headings from a page",
            "To make all text the same size",
            "To hide important information"
        ],
        answer: 0,
        explanation: "Visual hierarchy uses heading size, spacing, alignment, contrast, and placement to guide the user's attention."
    },
    {
        question: "Which is an example of feedback and system status?",
        options: [
            "A page with no response after clicking",
            "A hidden navigation menu",
            "A button without a label",
            "A progress indicator during file upload"
        ],
        answer: 3,
        explanation: "A progress indicator communicates what the system is doing while a file is being uploaded."
    },
    {
        question: "What should a system do when a user makes an error?",
        options: [
            "Display an unclear warning",
            "Explain the problem and how to correct it",
            "Delete all entered information immediately",
            "Use only a color change to show the error"
        ],
        answer: 1,
        explanation: "Error messages should identify the problem and explain how the user can correct it."
    },
    {
        question: "What is a responsive interface?",
        options: [
            "An interface that works only on desktop computers",
            "An interface with fixed content and layout",
            "An interface that adjusts to different screen sizes and orientations",
            "An interface that removes mobile navigation"
        ],
        answer: 2,
        explanation: "A responsive interface adapts its layout to different screen sizes and orientations."
    },
    {
        question: "What is the main idea of User-Centered Design?",
        options: [
            "Placing users' needs, abilities, and goals at the center of the design process",
            "Designing only according to the developer's preferences",
            "Avoiding user feedback",
            "Removing usability testing"
        ],
        answer: 0,
        explanation: "User-Centered Design considers the needs, abilities, and goals of intended users throughout the design process."
    },
    {
        question: "What is a wireframe?",
        options: [
            "A final published website",
            "A programming language",
            "A tool for checking internet speed",
            "A simple layout showing the placement of content and controls"
        ],
        answer: 3,
        explanation: "A wireframe is a simple layout that shows where content and controls will be placed."
    },
    {
        question: "What is the purpose of a prototype?",
        options: [
            "To replace all user testing",
            "To allow people to try or review an intended interaction before the final product is built",
            "To permanently store user passwords",
            "To prevent designers from changing the layout"
        ],
        answer: 1,
        explanation: "A prototype is a model that allows people to review or test an intended interaction before development is complete."
    },
    {
        question: "What is digital accessibility?",
        options: [
            "Limiting digital products to a specific group",
            "Making websites available only to expert users",
            "Designing digital content and technology so people with different abilities can use them",
            "Removing features from digital products"
        ],
        answer: 2,
        explanation: "Digital accessibility helps people with disabilities and different access needs perceive, understand, navigate, and interact with digital content."
    },
    {
        question: "Which feature helps users who cannot hear audio in a video?",
        options: [
            "Captions",
            "Smaller text",
            "Decorative images",
            "Mouse-only controls"
        ],
        answer: 0,
        explanation: "Captions provide synchronized text for speech and relevant sounds in a video."
    },
    {
        question: "What does POUR stand for in WCAG?",
        options: [
            "Program, Organize, Understand, Review",
            "Perceivable, Operable, Understandable, Robust",
            "Practical, Open, Useful, Responsive",
            "Perceive, Observe, Use, Read"
        ],
        answer: 1,
        explanation: "POUR represents the four WCAG principles: Perceivable, Operable, Understandable, and Robust."
    },
    {
        question: "Which WCAG principle focuses on making interface components usable through different methods of interaction?",
        options: [
            "Robust",
            "Understandable",
            "Perceivable",
            "Operable"
        ],
        answer: 3,
        explanation: "Operable means that interface components and navigation must be usable, including through keyboard interaction."
    },
    {
        question: "What is the purpose of alternative text or alt text?",
        options: [
            "To change the size of an image",
            "To add background colors to images",
            "To communicate the meaning or function of an image through text",
            "To automatically play a video"
        ],
        answer: 2,
        explanation: "Alternative text communicates the purpose or information of an image to people who cannot see it."
    },
    {
        question: "Which tool can help identify some accessibility issues on web pages?",
        options: [
            "WAVE Web Accessibility Evaluation Tool",
            "Calculator",
            "File Explorer",
            "Notepad"
        ],
        answer: 0,
        explanation: "WAVE is an accessibility evaluation tool that helps identify some accessibility issues on web pages."
    },
    {
        question: "Why is manual accessibility testing still necessary?",
        options: [
            "Automated tools always detect every problem",
            "Manual testing replaces all design principles",
            "It makes websites load faster",
            "Automated tools cannot identify every accessibility barrier"
        ],
        answer: 3,
        explanation: "Automated tools may miss issues that require human judgment, so manual checks and user feedback are also necessary."
    }
];


// =====================================
// PART II - IDENTIFICATION
// =====================================

const identificationData = [
    {
        question: "The visual and interactive parts through which a person uses a digital product.",
        answers: ["user interface", "ui"],
        displayAnswer: "User Interface (UI)",
        explanation: "UI refers to the screens, menus, buttons, icons, and other interactive parts of a digital product."
    },
    {
        question: "The overall experience and perceptions a person has when interacting with a product or service.",
        answers: ["user experience", "ux"],
        displayAnswer: "User Experience (UX)",
        explanation: "UX considers the complete experience of a person when using a product or service."
    },
    {
        question: "The practice of making digital products and content usable by people with different abilities and needs.",
        answers: ["accessibility", "digital accessibility"],
        displayAnswer: "Accessibility",
        explanation: "Accessibility makes digital products and content usable by people with different abilities and needs."
    },
    {
        question: "A simple layout showing the placement of content and controls.",
        answers: ["wireframe"],
        displayAnswer: "Wireframe",
        explanation: "A wireframe is an early layout used to plan the structure and placement of interface elements."
    },
    {
        question: "An early model of a product used to explore or test design ideas.",
        answers: ["prototype", "prototyping"],
        displayAnswer: "Prototype",
        explanation: "A prototype allows people to try or review intended interactions before the final product is built."
    },
    {
        question: "The guidelines developed by the World Wide Web Consortium for making web content more accessible.",
        answers: ["wcag", "web content accessibility guidelines"],
        displayAnswer: "Web Content Accessibility Guidelines (WCAG)",
        explanation: "WCAG provides internationally recognized guidance for accessible web content."
    },
    {
        question: "Assistive technology that presents digital content through speech or braille output.",
        answers: ["screen reader", "screen readers"],
        displayAnswer: "Screen Reader",
        explanation: "A screen reader helps users access digital content through speech or braille output."
    },
    {
        question: "A visible sign showing which interactive element currently receives keyboard input.",
        answers: ["focus indicator", "keyboard focus indicator"],
        displayAnswer: "Focus Indicator",
        explanation: "A focus indicator shows users which interactive element is currently selected through keyboard navigation."
    },
    {
        question: "An approach that adapts a layout to different screen sizes and devices.",
        answers: ["responsive design"],
        displayAnswer: "Responsive Design",
        explanation: "Responsive design allows a layout to adjust to different screen sizes and devices."
    },
    {
        question: "The extent to which specified users can use a product to achieve goals effectively, efficiently, and satisfactorily.",
        answers: ["usability"],
        displayAnswer: "Usability",
        explanation: "Usability describes how effectively, efficiently, and satisfactorily users can complete tasks with a product."
    }
];


// =====================================
// PART III - TRUE OR FALSE
// =====================================

const trueFalseData = [
    {
        question: "UI Design focuses on the visual layout, controls, typography, colors, and interactive behavior of an interface.",
        answer: "true",
        displayAnswer: "True",
        explanation: "UI Design focuses on the interface itself, including its visual and interactive elements."
    },
    {
        question: "A consistent interface should use completely different behaviors for similar buttons on different pages.",
        answer: "false",
        displayAnswer: "False",
        explanation: "Consistency means using similar visual styles and interaction patterns for similar elements."
    },
    {
        question: "The WCAG principle Perceivable means that information and interface components must be presented in ways users can perceive.",
        answer: "true",
        displayAnswer: "True",
        explanation: "Perceivable information should be available through ways that users can sense, such as text alternatives and captions."
    },
    {
        question: "Automated accessibility tools can identify every possible accessibility issue without human review.",
        answer: "false",
        displayAnswer: "False",
        explanation: "Automated tools cannot detect every barrier. Manual checks and human review are also necessary."
    },
    {
        question: "All important interface functions should be available through keyboard navigation.",
        answer: "true",
        displayAnswer: "True",
        explanation: "Keyboard accessibility allows users to operate important interface functions without requiring a mouse."
    }
];


// =====================================
// DISPLAY QUESTIONS
// =====================================

const mcContainer = document.getElementById("multipleChoiceQuestions");
const idContainer = document.getElementById("identificationQuestions");
const tfContainer = document.getElementById("trueFalseQuestions");


// MULTIPLE CHOICE DISPLAY
multipleChoiceData.forEach((item, index) => {

    const questionCard = document.createElement("div");
    questionCard.className = "question-card";

    const heading = document.createElement("h3");
    heading.innerHTML = `<span class="question-number">${index + 1}.</span> ${item.question}`;

    const optionsContainer = document.createElement("div");
    optionsContainer.className = "question-options";

    item.options.forEach((option, optionIndex) => {

        const label = document.createElement("label");

        const input = document.createElement("input");
        input.type = "radio";
        input.name = `mc${index + 1}`;
        input.value = optionIndex;

        const text = document.createElement("span");
        text.textContent = `${String.fromCharCode(65 + optionIndex)}. ${option}`;

        label.appendChild(input);
        label.appendChild(text);

        optionsContainer.appendChild(label);

    });

    questionCard.appendChild(heading);
    questionCard.appendChild(optionsContainer);

    mcContainer.appendChild(questionCard);

});


// IDENTIFICATION DISPLAY
identificationData.forEach((item, index) => {

    const questionCard = document.createElement("div");
    questionCard.className = "question-card";

    const heading = document.createElement("h3");
    heading.innerHTML = `<span class="question-number">${index + 21}.</span> ${item.question}`;

    const input = document.createElement("input");
    input.type = "text";
    input.name = `id${index + 1}`;
    input.className = "identification-input";
    input.placeholder = "Type your answer here...";
    input.autocomplete = "off";

    questionCard.appendChild(heading);
    questionCard.appendChild(input);

    idContainer.appendChild(questionCard);

});


// TRUE OR FALSE DISPLAY
trueFalseData.forEach((item, index) => {

    const questionCard = document.createElement("div");
    questionCard.className = "question-card";

    const heading = document.createElement("h3");
    heading.innerHTML = `<span class="question-number">${index + 31}.</span> ${item.question}`;

    const optionsContainer = document.createElement("div");
    optionsContainer.className = "question-options";

    ["True", "False"].forEach(option => {

        const label = document.createElement("label");

        const input = document.createElement("radio");
        input.type = "radio";
        input.name = `tf${index + 1}`;
        input.value = option.toLowerCase();

        const text = document.createElement("span");
        text.textContent = option;

        label.appendChild(input);
        label.appendChild(text);

        optionsContainer.appendChild(label);

    });

    questionCard.appendChild(heading);
    questionCard.appendChild(optionsContainer);

    tfContainer.appendChild(questionCard);

});


// =====================================
// ASSESSMENT PROGRESS
// =====================================

const totalQuestions = 35;

const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("progressBar");

function updateProgress() {

    let answered = 0;

    // Multiple Choice
    for (let i = 1; i <= 20; i++) {

        if (document.querySelector(`input[name="mc${i}"]:checked`)) {
            answered++;
        }

    }

    // Identification
    for (let i = 1; i <= 10; i++) {

        const input = document.querySelector(`input[name="id${i}"]`);

        if (input.value.trim() !== "") {
            answered++;
        }

    }

    // True or False
    for (let i = 1; i <= 5; i++) {

        if (document.querySelector(`input[name="tf${i}"]:checked`)) {
            answered++;
        }

    }

    const percentage = (answered / totalQuestions) * 100;

    progressText.textContent = `${answered} / ${totalQuestions} Answered`;
    progressBar.style.width = `${percentage}%`;

}


// UPDATE PROGRESS WHEN ANSWERS CHANGE
document.getElementById("assessmentForm").addEventListener(
    "input",
    updateProgress
);

document.getElementById("assessmentForm").addEventListener(
    "change",
    updateProgress
);


// =====================================
// GET USER ANSWERS
// =====================================

function getIdentificationAnswer(index) {

    const input = document.querySelector(`input[name="id${index + 1}"]`);

    return input.value.trim().toLowerCase().replace(/\s+/g, " ");

}


// =====================================
// CHECK IDENTIFICATION ANSWER
// =====================================

function checkIdentification(userAnswer, acceptedAnswers) {

    const normalizedAnswer = userAnswer
        .toLowerCase()
        .trim()
        .replace(/\s+/g, " ")
        .replace(/[.,]/g, "");

    return acceptedAnswers.some(answer => {

        const normalizedCorrect = answer
            .toLowerCase()
            .trim()
            .replace(/\s+/g, " ")
            .replace(/[.,]/g, "");

        return normalizedAnswer === normalizedCorrect;

    });

}


// =====================================
// CHECK COMPLETION
// =====================================

function checkAllAnswered() {

    let unanswered = [];

    // Multiple Choice
    for (let i = 1; i <= 20; i++) {

        if (!document.querySelector(`input[name="mc${i}"]:checked`)) {
            unanswered.push(i);
        }

    }

    // Identification
    for (let i = 1; i <= 10; i++) {

        const answer = getIdentificationAnswer(i - 1);

        if (answer === "") {
            unanswered.push(i + 20);
        }

    }

    // True or False
    for (let i = 1; i <= 5; i++) {

        if (!document.querySelector(`input[name="tf${i}"]:checked`)) {
            unanswered.push(i + 30);
        }

    }

    return unanswered;

}


// =====================================
// SUBMIT ASSESSMENT
// =====================================

const assessmentForm = document.getElementById("assessmentForm");

assessmentForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const unanswered = checkAllAnswered();

    if (unanswered.length > 0) {

        alert(
            "Please answer all questions before submitting.\n\n" +
            "Unanswered question numbers: " + unanswered.join(", ")
        );

        const firstUnanswered = unanswered[0];

        let target;

        if (firstUnanswered <= 20) {
            target = document.querySelector(`input[name="mc${firstUnanswered}"]`);
        }
        else if (firstUnanswered <= 30) {
            target = document.querySelector(`input[name="id${firstUnanswered - 20}"]`);
        }
        else {
            target = document.querySelector(`input[name="tf${firstUnanswered - 30}"]`);
        }

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

            target.focus();
        }

        return;

    }

    calculateResults();

    document.getElementById("results").hidden = false;

    document.getElementById("results").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    document.querySelector(".submit-section button[type='submit']").disabled = true;

});


// =====================================
// CALCULATE RESULTS
// =====================================

function calculateResults() {

    let mcScore = 0;
    let idScore = 0;
    let tfScore = 0;

    const explanationList = document.getElementById("explanationList");

    explanationList.innerHTML = "";


    // CHECK MULTIPLE CHOICE
    multipleChoiceData.forEach((item, index) => {

        const selected = document.querySelector(
            `input[name="mc${index + 1}"]:checked`
        );

        const userAnswer = Number(selected.value);

        const isCorrect = userAnswer === item.answer;

        if (isCorrect) {
            mcScore++;
        }

        const userText =
            `${String.fromCharCode(65 + userAnswer)}. ${item.options[userAnswer]}`;

        const correctText =
            `${String.fromCharCode(65 + item.answer)}. ${item.options[item.answer]}`;

        addExplanation(
            index + 1,
            item.question,
            userText,
            correctText,
            item.explanation,
            isCorrect
        );

    });


    // CHECK IDENTIFICATION
    identificationData.forEach((item, index) => {

        const userAnswer = getIdentificationAnswer(index);

        const isCorrect = checkIdentification(
            userAnswer,
            item.answers
        );

        if (isCorrect) {
            idScore++;
        }

        addExplanation(
            index + 21,
            item.question,
            userAnswer,
            item.displayAnswer,
            item.explanation,
            isCorrect
        );

    });


    // CHECK TRUE OR FALSE
    trueFalseData.forEach((item, index) => {

        const selected = document.querySelector(
            `input[name="tf${index + 1}"]:checked`
        );

        const userAnswer = selected.value;

        const isCorrect = userAnswer === item.answer;

        if (isCorrect) {
            tfScore++;
        }

        addExplanation(
            index + 31,
            item.question,
            userAnswer.charAt(0).toUpperCase() + userAnswer.slice(1),
            item.displayAnswer,
            item.explanation,
            isCorrect
        );

    });


    // TOTAL SCORE
    const totalScore = mcScore + idScore + tfScore;

    const percentage = Math.round(
        (totalScore / totalQuestions) * 100
    );


    // DISPLAY SCORES
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


    // PERFORMANCE MESSAGE
    const resultMessage = document.getElementById("resultMessage");
    const resultDetails = document.getElementById("resultDetails");

    if (percentage >= 90) {

        resultMessage.textContent = "Excellent Performance!";

        resultDetails.textContent =
            "You have an excellent understanding of User Interface Design and Accessibility.";

    }
    else if (percentage >= 80) {

        resultMessage.textContent = "Very Good Performance!";

        resultDetails.textContent =
            "You have a strong understanding of the Chapter 8 lesson. Keep it up!";

    }
    else if (percentage >= 75) {

        resultMessage.textContent = "Good Performance!";

        resultDetails.textContent =
            "You understand the important concepts. Review the lesson to strengthen your knowledge.";

    }
    else {

        resultMessage.textContent = "Keep Practicing!";

        resultDetails.textContent =
            "Review the Chapter 8 lesson and study the answer explanations to improve your understanding.";

    }

}


// =====================================
// DISPLAY ANSWER EXPLANATIONS
// =====================================

function addExplanation(
    number,
    question,
    userAnswer,
    correctAnswer,
    explanation,
    isCorrect
) {

    const explanationList = document.getElementById("explanationList");

    const item = document.createElement("div");

    item.className = "explanation-item " +
        (isCorrect ? "correct" : "incorrect");


    const heading = document.createElement("h4");
    heading.textContent = `${number}. ${question}`;


    const status = document.createElement("p");
    status.textContent = isCorrect ? "Correct Answer" : "Incorrect Answer";
    status.className = isCorrect ? "correct-answer" : "wrong-answer";


    const userAnswerText = document.createElement("p");
    userAnswerText.textContent = `Your Answer: ${userAnswer || "No Answer"}`;


    const correctAnswerText = document.createElement("p");
    correctAnswerText.textContent = `Correct Answer: ${correctAnswer}`;


    const explanationText = document.createElement("p");
    explanationText.textContent = `Explanation: ${explanation}`;


    item.appendChild(heading);
    item.appendChild(status);
    item.appendChild(userAnswerText);
    item.appendChild(correctAnswerText);
    item.appendChild(explanationText);

    explanationList.appendChild(item);

}


// =====================================
// RESET ASSESSMENT
// =====================================

document.getElementById("resetAssessment").addEventListener(
    "click",
    function() {

        const confirmReset = confirm(
            "Are you sure you want to reset all your answers?"
        );

        if (!confirmReset) {
            return;
        }

        assessmentForm.reset();

        document.getElementById("results").hidden = true;

        document.querySelector(".submit-section button[type='submit']").disabled = false;

        updateProgress();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


// =====================================
// TRY AGAIN
// =====================================

document.getElementById("tryAgain").addEventListener(
    "click",
    function() {

        assessmentForm.reset();

        document.getElementById("results").hidden = true;

        document.querySelector(".submit-section button[type='submit']").disabled = false;

        updateProgress();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


// =====================================
// BACK TO TOP
// =====================================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function() {

    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    }
    else {
        backToTop.style.display = "none";
    }

});

backToTop.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// INITIAL PROGRESS
updateProgress();
