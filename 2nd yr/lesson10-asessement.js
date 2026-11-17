
document.addEventListener("DOMContentLoaded", function () {

    const assessmentForm = document.getElementById("lesson10Assessment");
    const questionContainer = document.getElementById("questionContainer");

    const resultsSection = document.getElementById("results");
    const progressBar = document.getElementById("progressBar");
    const progressText = document.getElementById("progressText");
    const answeredCount = document.getElementById("answeredCount");
    const explanationList = document.getElementById("explanationList");

    const totalQuestions = 20;

    // =========================================
    // QUESTIONS, ANSWERS AND EXPLANATIONS
    // =========================================

    const questions = [

        {
            question: "What is the main purpose of mobile and application platforms?",
            options: [
                "To replace all desktop computers",
                "To support mobile devices and application development",
                "To remove internet connectivity",
                "To increase the size of mobile screens"
            ],
            answer: "B",
            explanation: "Mobile and application platforms provide the technologies, environments, and tools needed to operate mobile devices and develop, run, and manage applications."
        },

        {
            question: "What is a mobile platform?",
            options: [
                "A website used only for entertainment",
                "A type of computer storage",
                "A combination of hardware, operating systems, and software technologies",
                "A programming language used for websites"
            ],
            answer: "C",
            explanation: "A mobile platform combines hardware, operating systems, and software technologies that support mobile devices and applications."
        },

        {
            question: "Which mobile platform is an open-source operating system developed by Google?",
            options: [
                "Android",
                "iOS",
                "HarmonyOS",
                "Windows Mobile"
            ],
            answer: "A",
            explanation: "Android is developed by Google and is an open-source mobile operating system used by many smartphone manufacturers."
        },

        {
            question: "Which mobile operating system is developed by Apple and used on iPhones?",
            options: [
                "Android",
                "HarmonyOS",
                "Windows Mobile",
                "iOS"
            ],
            answer: "D",
            explanation: "iOS is Apple's mobile operating system used on iPhone devices. It is known for its security, optimized performance, and consistent user experience."
        },

        {
            question: "Which company developed HarmonyOS?",
            options: [
                "Google",
                "Huawei",
                "Microsoft",
                "Apple"
            ],
            answer: "B",
            explanation: "HarmonyOS was developed by Huawei to support mobile devices and connected smart technologies."
        },

        {
            question: "What was the main function of early mobile devices?",
            options: [
                "Advanced artificial intelligence",
                "Cloud computing and mobile payments",
                "Basic voice calls and text messaging",
                "Cross-platform application development"
            ],
            answer: "C",
            explanation: "Early mobile devices mainly focused on communication through basic voice calls and text messages. They had small screens, limited storage, and minimal functionality."
        },

        {
            question: "Which development marked an important transition between basic mobile phones and smartphones?",
            options: [
                "Feature phones",
                "Desktop computers",
                "Supercomputers",
                "Mainframe systems"
            ],
            answer: "A",
            explanation: "Feature phones introduced cameras, multimedia, basic internet access, and simple applications, serving as a transition between basic mobile phones and smartphones."
        },

        {
            question: "Which technology became a major feature of modern smartphones?",
            options: [
                "Only physical keyboards",
                "Limited text messaging",
                "No internet connection",
                "Touchscreen interfaces and application stores"
            ],
            answer: "D",
            explanation: "Smartphones introduced touchscreen interfaces, application stores, internet connectivity, and advanced computing capabilities."
        },

        {
            question: "What is a Mobile Operating System (Mobile OS)?",
            options: [
                "A device used to store photographs",
                "Software that manages the hardware and software resources of a mobile device",
                "A website development framework",
                "A tool used only for creating animations"
            ],
            answer: "B",
            explanation: "A Mobile Operating System manages device resources, applications, memory, hardware, security, and user interactions."
        },

        {
            question: "Which of the following is a function of a mobile operating system?",
            options: [
                "Creating advertisements automatically",
                "Increasing the physical size of a phone",
                "Managing memory, processes, devices, and security",
                "Replacing all application developers"
            ],
            answer: "C",
            explanation: "Mobile operating systems perform process management, memory management, device management, security and privacy protection, user interface management, and network connectivity."
        },

        {
            question: "What is an application platform?",
            options: [
                "A software environment that allows applications to be developed, executed, and managed",
                "A physical mobile phone accessory",
                "A type of internet connection",
                "A computer hardware component"
            ],
            answer: "A",
            explanation: "An application platform provides tools, frameworks, and services that simplify application creation, execution, management, and deployment."
        },

        {
            question: "What type of application is developed specifically for one operating system?",
            options: [
                "Web application",
                "Hybrid application",
                "Cross-platform application",
                "Native application"
            ],
            answer: "D",
            explanation: "Native applications are developed specifically for one operating system and can use its platform-specific tools, interfaces, and device features."
        },

        {
            question: "Which of the following is an example of a web application?",
            options: [
                "Android Studio",
                "Google Docs",
                "Xcode",
                "Apache Cordova"
            ],
            answer: "B",
            explanation: "Google Docs is an example of a web application because users can access it through a web browser without requiring a traditional native app installation."
        },

        {
            question: "What is the main characteristic of a hybrid application?",
            options: [
                "It works without any software",
                "It can only run on desktop computers",
                "It combines web technologies with native application capabilities",
                "It does not support mobile devices"
            ],
            answer: "C",
            explanation: "Hybrid applications combine web technologies with native application capabilities, often using a native container and plugins to access device features."
        },

        {
            question: "Which development platform allows developers to use a shared codebase for multiple operating systems?",
            options: [
                "Cross-platform development",
                "Native-only development",
                "Manual hardware development",
                "Traditional desktop formatting"
            ],
            answer: "A",
            explanation: "Cross-platform development allows developers to create applications for multiple operating systems using a shared codebase or development approach."
        },

        {
            question: "What does API stand for?",
            options: [
                "Application Processing Installation",
                "Advanced Programming Internet",
                "Automated Platform Integration",
                "Application Programming Interface"
            ],
            answer: "D",
            explanation: "API stands for Application Programming Interface. It allows software applications to communicate with operating system services or other software components."
        },

        {
            question: "What is the primary purpose of a Software Development Kit (SDK)?",
            options: [
                "To replace the mobile operating system",
                "To provide tools and resources for developing applications",
                "To increase internet speed",
                "To remove application databases"
            ],
            answer: "B",
            explanation: "An SDK provides libraries, documentation, code examples, testing tools, debugging tools, and build utilities that help developers create applications."
        },

        {
            question: "Which database system is a lightweight relational database commonly used for local mobile application storage?",
            options: [
                "Flutter",
                "React Native",
                "SQLite",
                "Xcode"
            ],
            answer: "C",
            explanation: "SQLite is a lightweight relational database often used to store application information locally on mobile devices."
        },

        {
            question: "What is the main purpose of a User Interface (UI)?",
            options: [
                "To provide the part of an application through which users interact with its features",
                "To manage only the device battery",
                "To replace the database system",
                "To control internet service providers"
            ],
            answer: "A",
            explanation: "The User Interface is the part of an application that allows users to interact with its features through buttons, menus, text fields, and navigation bars."
        },

        {
            question: "Which of the following best describes the importance of mobile and application platforms?",
            options: [
                "They prevent all forms of technological development",
                "They eliminate the need for software applications",
                "They only support entertainment activities",
                "They support communication, productivity, online services, business operations, and software innovation"
            ],
            answer: "D",
            explanation: "Mobile and application platforms are important because they enable mobile computing, communication, collaboration, online services, productivity, business operations, and digital innovation."
        }

    ];

    // =========================================
    // GENERATE QUESTION CARDS
    // =========================================

    function generateQuestions() {

        questionContainer.innerHTML = "";

        questions.forEach(function (item, index) {

            const questionNumber = index + 1;
            const questionName = "q" + questionNumber;

            const card = document.createElement("div");
            card.className = "question-card";

            const numberLabel = document.createElement("span");
            numberLabel.className = "question-number";
            numberLabel.textContent =
                "QUESTION " + String(questionNumber).padStart(2, "0");

            const questionTitle = document.createElement("h3");
            questionTitle.textContent = item.question;

            card.appendChild(numberLabel);
            card.appendChild(questionTitle);

            item.options.forEach(function (option, optionIndex) {

                const letter = ["A", "B", "C", "D"][optionIndex];

                const label = document.createElement("label");
                label.className = "answer-option";

                const radio = document.createElement("input");
                radio.type = "radio";
                radio.name = questionName;
                radio.value = letter;

                const optionText = document.createElement("span");
                optionText.textContent = letter + ". " + option;

                label.appendChild(radio);
                label.appendChild(optionText);

                card.appendChild(label);

            });

            questionContainer.appendChild(card);

        });

    }

    // =========================================
    // UPDATE ASSESSMENT PROGRESS
    // =========================================

    function updateProgress() {

        let answered = 0;

        for (let i = 1; i <= totalQuestions; i++) {

            const selected = assessmentForm.querySelector(
                'input[name="q' + i + '"]:checked'
            );

            if (selected) {
                answered++;
            }

        }

        const percentage = (answered / totalQuestions) * 100;

        answeredCount.textContent =
            answered + "/" + totalQuestions;

        progressText.textContent =
            Math.round(percentage) + "% Completed";

        progressBar.style.width = percentage + "%";

    }

    // =========================================
    // LISTEN FOR ANSWER CHANGES
    // =========================================

    assessmentForm.addEventListener("change", function (event) {

        if (event.target.matches('input[type="radio"]')) {
            updateProgress();
        }

    });

    // =========================================
    // ASSESSMENT SUBMISSION
    // =========================================

    assessmentForm.addEventListener("submit", function (event) {

        event.preventDefault();

        let unanswered = [];

        for (let i = 1; i <= totalQuestions; i++) {

            const selected = assessmentForm.querySelector(
                'input[name="q' + i + '"]:checked'
            );

            if (!selected) {
                unanswered.push(i);
            }

        }

        // CHECK IF ALL QUESTIONS ARE ANSWERED

        if (unanswered.length > 0) {

            alert(
                "Please answer all questions before submitting.\n\n" +
                "Unanswered questions: " + unanswered.join(", ")
            );

            const firstUnanswered = assessmentForm.querySelector(
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

        let score = 0;
        let correct = 0;
        let incorrect = 0;

        explanationList.innerHTML = "";

        // CHECK EACH ANSWER

        for (let i = 1; i <= totalQuestions; i++) {

            const questionName = "q" + i;

            const selected = assessmentForm.querySelector(
                'input[name="' + questionName + '"]:checked'
            );

            const selectedAnswer = selected.value;

            const question = questions[i - 1];

            const correctAnswer = question.answer;

            const questionCard = selected.closest(".question-card");

            const questionText = questionCard.querySelector("h3").textContent;

            const selectedLabel = selected.closest(".answer-option");

            const selectedText =
                selectedLabel.querySelector("span").textContent;

            const correctInput = assessmentForm.querySelector(
                'input[name="' + questionName + '"][value="' +
                correctAnswer + '"]'
            );

            const correctLabel = correctInput.closest(".answer-option");

            const correctText =
                correctLabel.querySelector("span").textContent;

            const isCorrect = selectedAnswer === correctAnswer;

            if (isCorrect) {
                score++;
                correct++;
            } else {
                incorrect++;
            }

            // CREATE EXPLANATION CARD

            const explanationCard = document.createElement("div");

            explanationCard.className = isCorrect
                ? "explanation-item correct"
                : "explanation-item incorrect";

            const status = document.createElement("span");
            status.className = "answer-status";
            status.textContent = isCorrect
                ? "CORRECT ANSWER"
                : "INCORRECT ANSWER";

            const heading = document.createElement("h4");
            heading.textContent =
                "Question " + i + ": " + questionText;

            const yourAnswer = document.createElement("p");
            const yourStrong = document.createElement("strong");
            yourStrong.textContent = "Your Answer: ";
            yourAnswer.appendChild(yourStrong);
            yourAnswer.append(
                selectedAnswer + ". " + selectedText.substring(3)
            );

            const correctAnswerText = document.createElement("p");
            const correctStrong = document.createElement("strong");
            correctStrong.textContent = "Correct Answer: ";
            correctAnswerText.appendChild(correctStrong);
            correctAnswerText.append(
                correctAnswer + ". " + correctText.substring(3)
            );

            const explanation = document.createElement("p");
            const explanationStrong = document.createElement("strong");
            explanationStrong.textContent = "Explanation: ";
            explanation.appendChild(explanationStrong);
            explanation.append(question.explanation);

            explanationCard.appendChild(status);
            explanationCard.appendChild(heading);
            explanationCard.appendChild(yourAnswer);
            explanationCard.appendChild(correctAnswerText);
            explanationCard.appendChild(explanation);

            explanationList.appendChild(explanationCard);

            // HIGHLIGHT ANSWERS

            correctLabel.classList.add("correct-answer");

            if (!isCorrect) {
                selectedLabel.classList.add("wrong-answer");
            }

            // DISABLE ANSWERS AFTER SUBMISSION

            const questionInputs = assessmentForm.querySelectorAll(
                'input[name="' + questionName + '"]'
            );

            questionInputs.forEach(function (input) {
                input.disabled = true;
            });

        }

        // =========================================
        // COMPUTE FINAL PERCENTAGE
        // =========================================

        const percentage = Math.round(
            (score / totalQuestions) * 100
        );

        // DISPLAY SCORE

        document.getElementById("scoreNumber").textContent = score;

        document.getElementById("percentageText").textContent =
            percentage + "% Correct";

        document.getElementById("correctCount").textContent =
            correct;

        document.getElementById("incorrectCount").textContent =
            incorrect;

        // =========================================
        // RESULT MESSAGE
        // =========================================

        let message = "";

        if (percentage >= 90) {

            message = "Excellent! Outstanding performance!";

        } else if (percentage >= 80) {

            message = "Very Good! You understand the lesson well.";

        } else if (percentage >= 75) {

            message = "Good Job! You passed the assessment.";

        } else if (percentage >= 60) {

            message = "Keep Practicing! Review the lesson and improve.";

        } else {

            message = "Don't Give Up! Study the lesson and try again.";

        }

        document.getElementById("resultMessage").textContent = message;

        // HIDE SUBMIT BUTTONS

        assessmentForm.querySelector(".form-actions").style.display = "none";

        // SHOW RESULTS

        resultsSection.hidden = false;

        // SCROLL TO RESULTS

        resultsSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

    // =========================================
    // RESET ASSESSMENT
    // =========================================

    function resetAssessment() {

        assessmentForm.reset();

        const allInputs = assessmentForm.querySelectorAll("input");

        allInputs.forEach(function (input) {
            input.disabled = false;
        });

        const allOptions = assessmentForm.querySelectorAll(
            ".answer-option"
        );

        allOptions.forEach(function (option) {

            option.classList.remove(
                "correct-answer",
                "wrong-answer"
            );

        });

        assessmentForm.querySelector(".form-actions").style.display = "flex";

        resultsSection.hidden = true;

        explanationList.innerHTML = "";

        updateProgress();

        document.getElementById("scoreNumber").textContent = "0";

        document.getElementById("percentageText").textContent =
            "0% Correct";

        document.getElementById("correctCount").textContent = "0";

        document.getElementById("incorrectCount").textContent = "0";

        document.getElementById("resultMessage").textContent =
            "Good effort!";

        document.getElementById("assessment").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

    // RESET BUTTON

    const resetButton = document.getElementById("resetAssessment");

    resetButton.addEventListener("click", function (event) {

        event.preventDefault();

        resetAssessment();

    });

    // =========================================
    // TRY AGAIN BUTTON
    // =========================================

    const tryAgainButton = document.getElementById("tryAgain");

    tryAgainButton.addEventListener("click", function () {

        resetAssessment();

    });

    // =========================================
    // SIDEBAR ACTIVE LINK
    // =========================================

    const sections = document.querySelectorAll(
        ".main-content > section"
    );

    const sidebarLinks = document.querySelectorAll(
        ".sidebar nav a"
    );

    function updateActiveLink() {

        let currentSection = "";

        sections.forEach(function (section) {

            if (!section.id) return;

            const sectionTop =
                section.getBoundingClientRect().top + window.scrollY - 150;

            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute("id");
            }

        });

        sidebarLinks.forEach(function (link) {

            link.classList.remove("active");

            if (
                link.getAttribute("href") === "#" + currentSection
            ) {
                link.classList.add("active");
            }

        });

    }

    window.addEventListener("scroll", updateActiveLink);

    // SIDEBAR SMOOTH NAVIGATION

    sidebarLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId && targetId.startsWith("#")) {

                const target = document.querySelector(targetId);

                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }

        });

    });

    // =========================================
    // BACK TO TOP BUTTON
    // =========================================

    const backToTop = document.getElementById("backToTop");

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

    // =========================================
    // INITIALIZE ASSESSMENT
    // =========================================

    generateQuestions();

    updateProgress();

});
