
/* =====================================
   CHAPTER 10 ASSESSMENT
   WEBSITE TESTING, HOSTING, DEPLOYMENT, AND MAINTENANCE
===================================== */

// =====================================
// PART I - MULTIPLE CHOICE
// =====================================

const multipleChoiceData = [
    {
        question: "What is the main purpose of website testing?",
        options: [
            "To change the website's domain name",
            "To check whether the website works correctly and meets requirements",
            "To increase the number of website pages",
            "To create a website logo"
        ],
        answer: 1,
        explanation: "Website testing checks whether a website functions correctly, meets requirements, and provides a good experience for users."
    },
    {
        question: "Which type of testing checks whether website features work as expected?",
        options: [
            "Functional Testing",
            "Performance Testing",
            "Compatibility Testing",
            "Security Testing"
        ],
        answer: 0,
        explanation: "Functional Testing checks whether website features, buttons, forms, links, and other functions work according to their requirements."
    },
    {
        question: "What is the purpose of usability testing?",
        options: [
            "To measure the website's file size",
            "To check the website's source code only",
            "To determine how easy and convenient the website is for users",
            "To register a domain name"
        ],
        answer: 2,
        explanation: "Usability Testing evaluates how easily users can navigate and complete tasks on a website."
    },
    {
        question: "Which testing method checks whether a website works on different browsers and devices?",
        options: [
            "Security Testing",
            "Compatibility Testing",
            "Functional Testing",
            "Regression Testing"
        ],
        answer: 1,
        explanation: "Compatibility Testing checks whether a website works properly across different browsers, operating systems, and devices."
    },
    {
        question: "Which type of testing evaluates a website's speed, responsiveness, and stability?",
        options: [
            "Usability Testing",
            "Accessibility Testing",
            "Functional Testing",
            "Performance Testing"
        ],
        answer: 3,
        explanation: "Performance Testing evaluates how well a website performs in terms of speed, responsiveness, stability, and resource usage."
    },
    {
        question: "What is the main purpose of security testing?",
        options: [
            "To identify vulnerabilities and protect the website from security threats",
            "To improve the website's color combination",
            "To add more images to the homepage",
            "To change the website's layout"
        ],
        answer: 0,
        explanation: "Security Testing identifies weaknesses that may expose a website or its users to unauthorized access and other security risks."
    },
    {
        question: "What is a test case?",
        options: [
            "A website hosting package",
            "A design used for a website banner",
            "A set of conditions, inputs, and expected results used to test a feature",
            "A list of website visitors"
        ],
        answer: 2,
        explanation: "A test case describes what will be tested, the conditions or inputs, and the expected result."
    },
    {
        question: "What is a bug in website development?",
        options: [
            "A new website feature",
            "An error or defect that causes a website to behave incorrectly",
            "A type of domain name",
            "A website design template"
        ],
        answer: 1,
        explanation: "A bug is an error or defect in a website that causes unexpected or incorrect behavior."
    },
    {
        question: "What is web hosting?",
        options: [
            "A service that stores website files and makes them accessible online",
            "A tool used only for designing logos",
            "A programming language",
            "A method of creating passwords"
        ],
        answer: 0,
        explanation: "Web hosting provides storage and server resources that allow website files to be accessed through the internet."
    },
    {
        question: "What is a domain name?",
        options: [
            "The physical computer used by a developer",
            "A website's programming language",
            "A tool for checking website errors",
            "The readable address people use to access a website"
        ],
        answer: 3,
        explanation: "A domain name is the readable web address used by people to visit a website, such as example.com."
    },
    {
        question: "What is the role of DNS?",
        options: [
            "To design website layouts",
            "To translate domain names into IP addresses",
            "To create website images",
            "To test website buttons"
        ],
        answer: 1,
        explanation: "The Domain Name System (DNS) translates domain names into IP addresses so browsers can locate the correct servers."
    },
    {
        question: "What does website deployment mean?",
        options: [
            "Deleting all website files",
            "Creating a website design on paper",
            "Making a website available in its intended live environment",
            "Writing the website's content only"
        ],
        answer: 2,
        explanation: "Deployment is the process of transferring and preparing a website in its intended environment so users can access it."
    },
    {
        question: "What is a staging environment?",
        options: [
            "A testing environment that is similar to the live website environment",
            "A public social media page",
            "A website's domain registration page",
            "A computer used only for typing"
        ],
        answer: 0,
        explanation: "A staging environment allows developers to test changes before publishing them to the live website."
    },
    {
        question: "Why is creating a website backup important?",
        options: [
            "It automatically changes the website design",
            "It removes unnecessary website features",
            "It makes every website visitor an administrator",
            "It provides a copy that can be restored if data is lost or damaged"
        ],
        answer: 3,
        explanation: "A backup is a copy of website files and data that can be used to restore the website after data loss, damage, or other problems."
    },
    {
        question: "What is website maintenance?",
        options: [
            "Publishing a website once and never checking it again",
            "Regularly updating, monitoring, and fixing a website",
            "Removing all website security features",
            "Changing only the website's background color"
        ],
        answer: 1,
        explanation: "Website maintenance involves regularly updating content and software, monitoring performance, fixing problems, and maintaining security."
    },
    {
        question: "What is regression testing?",
        options: [
            "Testing a website for the first time only",
            "Checking the website's domain expiration",
            "Retesting a website to ensure changes have not broken existing features",
            "Creating a new website from scratch"
        ],
        answer: 2,
        explanation: "Regression Testing checks whether recent updates or changes have affected features that previously worked correctly."
    },
    {
        question: "What does website uptime refer to?",
        options: [
            "The amount of time a website is available and accessible to users",
            "The time needed to design a website",
            "The number of images on a website",
            "The time required to register a domain"
        ],
        answer: 0,
        explanation: "Uptime refers to the amount of time a website or server remains operational and accessible to users."
    },
    {
        question: "What is the purpose of SSL/TLS on a website?",
        options: [
            "To increase the number of website pages",
            "To improve the website's font style",
            "To create a domain name",
            "To encrypt data exchanged between a browser and a website"
        ],
        answer: 3,
        explanation: "SSL/TLS helps protect information exchanged between a browser and a website by encrypting the connection."
    },
    {
        question: "Why should responsive testing be performed?",
        options: [
            "To check only the website's desktop version",
            "To ensure the website layout works properly on different screen sizes",
            "To remove mobile access",
            "To replace website hosting"
        ],
        answer: 1,
        explanation: "Responsive Testing checks whether a website's layout and content adapt properly to different screen sizes and devices."
    },
    {
        question: "Why should a website be tested before it is launched?",
        options: [
            "To avoid adding content to the website",
            "To make the website more difficult to use",
            "To identify problems and improve quality before users access it",
            "To prevent the website from appearing in browsers"
        ],
        answer: 2,
        explanation: "Testing before launch helps identify errors, security issues, and usability problems so they can be corrected before the website becomes available to users."
    }
];


// =====================================
// DISPLAY QUESTIONS
// =====================================

const mcContainer = document.getElementById("multipleChoiceQuestions");

multipleChoiceData.forEach((item, index) => {

    const questionCard = document.createElement("div");
    questionCard.className = "question-card";

    const heading = document.createElement("h3");
    heading.innerHTML =
        `<span class="question-number">${index + 1}.</span> ${item.question}`;

    const optionsContainer = document.createElement("div");
    optionsContainer.className = "question-options";

    item.options.forEach((option, optionIndex) => {

        const label = document.createElement("label");

        const input = document.createElement("input");
        input.type = "radio";
        input.name = `mc${index + 1}`;
        input.value = optionIndex;

        const text = document.createElement("span");
        text.textContent =
            `${String.fromCharCode(65 + optionIndex)}. ${option}`;

        label.appendChild(input);
        label.appendChild(text);

        optionsContainer.appendChild(label);

    });

    questionCard.appendChild(heading);
    questionCard.appendChild(optionsContainer);

    mcContainer.appendChild(questionCard);

});


// =====================================
// ASSESSMENT PROGRESS
// =====================================

const totalQuestions = 20;

const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("progressBar");

function updateProgress() {

    let answered = 0;

    for (let i = 1; i <= totalQuestions; i++) {

        if (document.querySelector(`input[name="mc${i}"]:checked`)) {
            answered++;
        }

    }

    const percentage = (answered / totalQuestions) * 100;

    progressText.textContent =
        `${answered} / ${totalQuestions} Answered`;

    progressBar.style.width = `${percentage}%`;

}


// UPDATE PROGRESS WHEN ANSWERS CHANGE
const assessmentForm = document.getElementById("assessmentForm");

assessmentForm.addEventListener("input", updateProgress);
assessmentForm.addEventListener("change", updateProgress);


// =====================================
// CHECK COMPLETION
// =====================================

function checkAllAnswered() {

    let unanswered = [];

    for (let i = 1; i <= totalQuestions; i++) {

        if (!document.querySelector(`input[name="mc${i}"]:checked`)) {
            unanswered.push(i);
        }

    }

    return unanswered;

}


// =====================================
// SUBMIT ASSESSMENT
// =====================================

assessmentForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const unanswered = checkAllAnswered();

    if (unanswered.length > 0) {

        alert(
            "Please answer all questions before submitting.\n\n" +
            "Unanswered question numbers: " + unanswered.join(", ")
        );

        const firstUnanswered = unanswered[0];

        const target = document.querySelector(
            `input[name="mc${firstUnanswered}"]`
        );

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

    document.querySelector(
        ".submit-section button[type='submit']"
    ).disabled = true;

});


// =====================================
// CALCULATE RESULTS
// =====================================

function calculateResults() {

    let mcScore = 0;

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


    // TOTAL SCORE
    const totalScore = mcScore;

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


    // PERFORMANCE MESSAGE
    const resultMessage = document.getElementById("resultMessage");
    const resultDetails = document.getElementById("resultDetails");

    if (percentage >= 90) {

        resultMessage.textContent = "Excellent Performance!";

        resultDetails.textContent =
            "You have an excellent understanding of Website Testing, Hosting, Deployment, and Maintenance.";

    }
    else if (percentage >= 80) {

        resultMessage.textContent = "Very Good Performance!";

        resultDetails.textContent =
            "You have a strong understanding of the Chapter 10 lesson. Keep it up!";

    }
    else if (percentage >= 75) {

        resultMessage.textContent = "Good Performance!";

        resultDetails.textContent =
            "You understand the important concepts. Review the lesson to strengthen your knowledge.";

    }
    else {

        resultMessage.textContent = "Keep Practicing!";

        resultDetails.textContent =
            "Review the Chapter 10 lesson and study the answer explanations to improve your understanding.";

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

        resetAssessment();

    }
);


// =====================================
// TRY AGAIN
// =====================================

document.getElementById("tryAgain").addEventListener(
    "click",
    function() {

        resetAssessment();

    }
);


// RESET FUNCTION
function resetAssessment() {

    assessmentForm.reset();

    document.getElementById("results").hidden = true;

    document.querySelector(
        ".submit-section button[type='submit']"
    ).disabled = false;

    document.getElementById("explanationList").innerHTML = "";

    updateProgress();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


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
