
/* =========================================
   CHAPTER 9 ASSESSMENT
   WEBTECH LEARN
   20 MULTIPLE CHOICE QUESTIONS
========================================= */

const questions = [

    {
        question: "What is web security?",
        options: [
            "A. The process of designing website layouts",
            "B. The practices used to protect websites, systems, and information",
            "C. The process of creating animations",
            "D. The process of increasing website colors"
        ],
        answer: 1,
        explanation: "Web security involves practices and technologies that protect websites, applications, servers, and user information from unauthorized access and online threats."
    },

    {
        question: "What does Confidentiality mean in the CIA Triad?",
        options: [
            "A. Information is accessible only to authorized people",
            "B. Information is available to everyone",
            "C. Information can be changed by any user",
            "D. Systems must always be updated"
        ],
        answer: 0,
        explanation: "Confidentiality ensures that private information is available only to people who have permission to access it."
    },

    {
        question: "Which principle of the CIA Triad ensures that information remains accurate and is not changed without permission?",
        options: [
            "A. Availability",
            "B. Confidentiality",
            "C. Integrity",
            "D. Authentication"
        ],
        answer: 2,
        explanation: "Integrity protects the accuracy and completeness of information and prevents unauthorized changes."
    },

    {
        question: "What is the main purpose of Availability?",
        options: [
            "A. To hide all information",
            "B. To ensure systems and information are accessible when needed",
            "C. To verify a user's password",
            "D. To assign user roles"
        ],
        answer: 1,
        explanation: "Availability ensures that authorized users can access systems and information when they need them."
    },

    {
        question: "What question does Authentication answer?",
        options: [
            "A. What can you change?",
            "B. Where is the website hosted?",
            "C. What information is public?",
            "D. Who are you?"
        ],
        answer: 3,
        explanation: "Authentication verifies the identity of a person, device, or system. It answers the question: Who are you?"
    },

    {
        question: "Which of the following is an example of password-based authentication?",
        options: [
            "A. Signing in using a username and password",
            "B. Opening a public webpage",
            "C. Viewing a website without signing in",
            "D. Changing the website background"
        ],
        answer: 0,
        explanation: "Password-based authentication uses a secret password or passphrase to verify the account holder's identity."
    },

    {
        question: "What does Two-Factor Authentication (2FA) require?",
        options: [
            "A. Two usernames",
            "B. Two email addresses",
            "C. Two different verification factors",
            "D. Two website accounts"
        ],
        answer: 2,
        explanation: "2FA requires two different authentication factors, such as a password and a one-time verification code."
    },

    {
        question: "Which authentication method uses physical or behavioral characteristics?",
        options: [
            "A. Password-based authentication",
            "B. Biometric authentication",
            "C. Token-based authentication",
            "D. Single Sign-On"
        ],
        answer: 1,
        explanation: "Biometric authentication uses characteristics such as fingerprints or facial recognition to verify identity."
    },

    {
        question: "What is Single Sign-On (SSO)?",
        options: [
            "A. Accessing multiple related applications through one trusted sign-in process",
            "B. Creating a different password for every page",
            "C. Signing in without an account",
            "D. Disabling user authentication"
        ],
        answer: 0,
        explanation: "SSO allows a user to access multiple related applications through one trusted authentication process."
    },

    {
        question: "What question does Authorization answer?",
        options: [
            "A. Who created the website?",
            "B. What is your password?",
            "C. When was the account created?",
            "D. What are you allowed to do?"
        ],
        answer: 3,
        explanation: "Authorization determines which resources or actions an authenticated user is permitted to access."
    },

    {
        question: "In a school portal, which user typically has permission to manage accounts and system settings?",
        options: [
            "A. Guest",
            "B. Administrator",
            "C. Student",
            "D. Visitor"
        ],
        answer: 1,
        explanation: "An administrator may have permissions to manage accounts, update settings, and access administrative features."
    },

    {
        question: "Which access control model assigns permissions based on a user's role?",
        options: [
            "A. DAC",
            "B. MAC",
            "C. RBAC",
            "D. ABAC"
        ],
        answer: 2,
        explanation: "Role-Based Access Control (RBAC) assigns permissions to roles, and users receive permissions through their assigned roles."
    },

    {
        question: "Which access control model makes access decisions based on attributes such as department, resource type, or time?",
        options: [
            "A. ABAC",
            "B. RBAC",
            "C. DAC",
            "D. MAC"
        ],
        answer: 0,
        explanation: "Attribute-Based Access Control (ABAC) uses attributes and rules to determine whether access should be allowed."
    },

    {
        question: "What is the main difference between Authentication and Authorization?",
        options: [
            "A. Both only check passwords",
            "B. Authentication manages website designs",
            "C. Authorization verifies identity",
            "D. Authentication verifies identity while Authorization checks permissions"
        ],
        answer: 3,
        explanation: "Authentication checks who the user is, while authorization determines what that user is allowed to access or do."
    },

    {
        question: "What is Phishing?",
        options: [
            "A. A method of improving website speed",
            "B. A deceptive attempt to obtain sensitive information",
            "C. A type of website navigation",
            "D. A way to organize database records"
        ],
        answer: 1,
        explanation: "Phishing uses deceptive messages or websites to trick people into revealing sensitive information."
    },

    {
        question: "Which web security threat involves unsafe handling of database input?",
        options: [
            "A. SQL Injection",
            "B. Phishing",
            "C. Denial of Service",
            "D. Biometric Authentication"
        ],
        answer: 0,
        explanation: "SQL Injection is a vulnerability that can occur when an application handles database input unsafely. Parameterized queries help reduce this risk."
    },

    {
        question: "What does Cross-Site Scripting (XSS) involve?",
        options: [
            "A. Creating stronger passwords",
            "B. Assigning roles to users",
            "C. Including untrusted content in a webpage without proper handling",
            "D. Encrypting website connections"
        ],
        answer: 2,
        explanation: "XSS can occur when untrusted content is included in a webpage without proper handling. Output encoding helps prevent it."
    },

    {
        question: "What is the purpose of HTTPS and TLS?",
        options: [
            "A. To make every webpage public",
            "B. To remove user authentication",
            "C. To increase screen brightness",
            "D. To help protect data while it travels between a browser and server"
        ],
        answer: 3,
        explanation: "HTTPS uses TLS to help protect information exchanged between a user's browser and the website server."
    },

    {
        question: "How should developers store user passwords?",
        options: [
            "A. In plain text",
            "B. Using a dedicated password-hashing algorithm with unique salts",
            "C. In a public webpage",
            "D. Inside an ordinary image file"
        ],
        answer: 1,
        explanation: "Passwords should not be stored in plain text. Developers should use dedicated password-hashing algorithms with unique salts."
    },

    {
        question: "What does the principle of Least Privilege mean?",
        options: [
            "A. Give every user full access",
            "B. Allow users to change all system settings",
            "C. Give users and application components only the permissions needed for their tasks",
            "D. Remove all security restrictions"
        ],
        answer: 2,
        explanation: "Least Privilege limits permissions to only what is necessary to perform assigned tasks. This helps reduce unnecessary access."
    }

];

const mcqContainer = document.getElementById("mcqContainer");
const progressText = document.getElementById("progressText");
const progressPercent = document.getElementById("progressPercent");
const progressBar = document.getElementById("progressBar");

const submitBtn = document.getElementById("submitBtn");
const resetBtn = document.getElementById("resetBtn");
const tryAgainBtn = document.getElementById("tryAgainBtn");

const results = document.getElementById("results");

let submitted = false;

/* DISPLAY QUESTIONS */

function displayQuestions() {

    mcqContainer.innerHTML = "";

    questions.forEach((item, index) => {

        const card = document.createElement("div");
        card.className = "question-card";

        const number = document.createElement("div");
        number.className = "question-number";
        number.textContent = `QUESTION ${index + 1}`;

        const questionTitle = document.createElement("h3");
        questionTitle.textContent = item.question;

        const optionsList = document.createElement("div");
        optionsList.className = "options-list";

        item.options.forEach((option, optionIndex) => {

            const label = document.createElement("label");
            label.className = "option-label";

            const radio = document.createElement("input");
            radio.type = "radio";
            radio.name = `question${index}`;
            radio.value = optionIndex;

            radio.addEventListener("change", () => {
                updateProgress();
                updateSelectedStyle(index);
            });

            const text = document.createElement("span");
            text.textContent = option;

            label.appendChild(radio);
            label.appendChild(text);

            optionsList.appendChild(label);

        });

        card.appendChild(number);
        card.appendChild(questionTitle);
        card.appendChild(optionsList);

        mcqContainer.appendChild(card);

    });

    updateProgress();
}

/* SELECTED OPTION STYLE */

function updateSelectedStyle(questionIndex) {

    const card = mcqContainer.children[questionIndex];
    const labels = card.querySelectorAll(".option-label");

    labels.forEach(label => {
        const radio = label.querySelector("input");
        label.classList.toggle("selected", radio.checked);
    });

}

/* UPDATE PROGRESS */

function updateProgress() {

    const answered = questions.filter((item, index) => {
        return document.querySelector(
            `input[name="question${index}"]:checked`
        );
    }).length;

    const percentage = Math.round(
        (answered / questions.length) * 100
    );

    progressText.textContent =
        `Answered: ${answered} / ${questions.length}`;

    progressPercent.textContent = `${percentage}%`;
    progressBar.style.width = `${percentage}%`;

}

/* SUBMIT ASSESSMENT */

function submitAssessment() {

    if (submitted) return;

    const answers = questions.map((item, index) => {
        const selected = document.querySelector(
            `input[name="question${index}"]:checked`
        );

        return selected ? Number(selected.value) : null;
    });

    const unanswered = answers.filter(answer => answer === null).length;

    if (unanswered > 0) {

        alert(
            `Please answer all questions before submitting.\n\n` +
            `Unanswered questions: ${unanswered}`
        );

        return;
    }

    let correct = 0;

    answers.forEach((answer, index) => {
        if (answer === questions[index].answer) {
            correct++;
        }
    });

    const incorrect = questions.length - correct;
    const percentage = Math.round(
        (correct / questions.length) * 100
    );

    submitted = true;

    document.getElementById("scoreDisplay").textContent =
        `${correct} / ${questions.length}`;

    document.getElementById("correctScore").textContent = correct;
    document.getElementById("incorrectScore").textContent = incorrect;

    document.getElementById("percentageScore").textContent =
        `${percentage}%`;

    /* RESULT MESSAGE */

    let message = "";
    let description = "";

    if (percentage >= 90) {
        message = "Excellent Work!";
        description =
            "Outstanding performance! You have demonstrated an excellent understanding of Chapter 9.";
    } else if (percentage >= 80) {
        message = "Very Good!";
        description =
            "Great job! You have a strong understanding of authentication, authorization, and web security.";
    } else if (percentage >= 70) {
        message = "Good Effort!";
        description =
            "You have a good foundation. Review the questions you missed to improve your understanding.";
    } else if (percentage >= 60) {
        message = "Keep Practicing!";
        description =
            "You are making progress. Review the lesson and study the explanations before trying again.";
    } else {
        message = "Needs Improvement";
        description =
            "Take time to review Chapter 9. Understanding the security concepts will help you improve your result.";
    }

    document.getElementById("resultMessage").textContent = message;
    document.getElementById("resultDescription").textContent = description;

    displayAnswerReview(answers);

    /* LOCK ANSWERS */

    document.querySelectorAll(
        '#mcqContainer input[type="radio"]'
    ).forEach(radio => {
        radio.disabled = true;
    });

    submitBtn.disabled = true;
    submitBtn.style.opacity = ".5";
    submitBtn.style.cursor = "not-allowed";

    results.style.display = "block";

    results.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}

/* DISPLAY ANSWER REVIEW */

function displayAnswerReview(answers) {

    const answerReview = document.getElementById("answerReview");

    answerReview.innerHTML = "";

    questions.forEach((item, index) => {

        const selected = answers[index];
        const isCorrect = selected === item.answer;

        const card = document.createElement("div");
        card.className = "review-card";

        const title = document.createElement("h3");
        title.textContent =
            `Question ${index + 1}: ${item.question}`;

        const yourAnswer = document.createElement("p");
        yourAnswer.textContent =
            `Your Answer: ${item.options[selected]}`;

        yourAnswer.className = isCorrect
            ? "correct-answer"
            : "wrong-answer";

        const correctAnswer = document.createElement("p");
        correctAnswer.className = "correct-answer";
        correctAnswer.textContent =
            `Correct Answer: ${item.options[item.answer]}`;

        const explanation = document.createElement("p");
        explanation.className = "explanation";
        explanation.textContent =
            `Explanation: ${item.explanation}`;

        card.appendChild(title);
        card.appendChild(yourAnswer);
        card.appendChild(correctAnswer);
        card.appendChild(explanation);

        answerReview.appendChild(card);

        /* HIGHLIGHT THE CORRECT AND WRONG OPTIONS */

        const questionCard = mcqContainer.children[index];
        const labels = questionCard.querySelectorAll(".option-label");

        labels.forEach((label, optionIndex) => {

            if (optionIndex === item.answer) {
                label.classList.add("correct-option");
            }

            if (optionIndex === selected &&
                selected !== item.answer) {
                label.classList.add("wrong-option");
            }

        });

    });

}

/* RESET ASSESSMENT */

function resetAssessment() {

    const confirmReset = confirm(
        "Are you sure you want to reset your assessment?"
    );

    if (!confirmReset) return;

    submitted = false;

    displayQuestions();

    results.style.display = "none";

    submitBtn.disabled = false;
    submitBtn.style.opacity = "1";
    submitBtn.style.cursor = "pointer";

    document.getElementById("scoreDisplay").textContent = "0 / 20";
    document.getElementById("correctScore").textContent = "0";
    document.getElementById("incorrectScore").textContent = "0";
    document.getElementById("percentageScore").textContent = "0%";

    document.getElementById("resultMessage").textContent = "";
    document.getElementById("resultDescription").textContent = "";

    document.getElementById("answerReview").innerHTML = "";

    document.getElementById("assessment").scrollIntoView({
        behavior: "smooth"
    });

}

/* TRY AGAIN */

function tryAgain() {

    resetAssessment();

}

/* BUTTON EVENTS */

submitBtn.addEventListener("click", submitAssessment);
resetBtn.addEventListener("click", resetAssessment);
tryAgainBtn.addEventListener("click", tryAgain);

/* BACK TO TOP */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

/* INITIALIZE */

displayQuestions();
