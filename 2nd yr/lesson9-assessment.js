
document.addEventListener("DOMContentLoaded", function () {

    const assessmentForm = document.getElementById("lesson9Assessment");
    const resultsSection = document.getElementById("results");
    const progressBar = document.getElementById("progressBar");
    const progressText = document.getElementById("progressText");
    const answeredCount = document.getElementById("answeredCount");
    const explanationList = document.getElementById("explanationList");

    const totalQuestions = 20;

    // CORRECT ANSWERS AND EXPLANATIONS
    const answerKey = {
        q1: {
            answer: "B",
            explanation: "Web security protects websites, systems, and user information from unauthorized access, attacks, and other online threats."
        },
        q2: {
            answer: "C",
            explanation: "Authentication verifies the identity of a user through passwords, verification codes, biometrics, or other authentication methods."
        },
        q3: {
            answer: "A",
            explanation: "Authorization determines what an authenticated user is allowed to access or perform within an application."
        },
        q4: {
            answer: "D",
            explanation: "A password is something you know. A fingerprint is something you are, while a smartphone or security key is something you have."
        },
        q5: {
            answer: "B",
            explanation: "Password hashing transforms passwords using a one-way function so the original passwords are not stored directly."
        },
        q6: {
            answer: "C",
            explanation: "MFA means Multi-Factor Authentication. It requires two or more different authentication factors to verify a user's identity."
        },
        q7: {
            answer: "A",
            explanation: "The HttpOnly cookie attribute helps prevent client-side JavaScript from accessing the cookie."
        },
        q8: {
            answer: "D",
            explanation: "HTTPS uses TLS to protect communication between a browser and a web server through encryption and integrity protection."
        },
        q9: {
            answer: "B",
            explanation: "RBAC stands for Role-Based Access Control. It assigns permissions based on roles such as administrator, teacher, and student."
        },
        q10: {
            answer: "C",
            explanation: "SQL Injection is an attack that attempts to manipulate database queries through unsafe handling of user input."
        },
        q11: {
            answer: "D",
            explanation: "Parameterized queries and prepared statements help separate user input from SQL commands, reducing SQL Injection risks."
        },
        q12: {
            answer: "A",
            explanation: "Cross-Site Scripting occurs when malicious scripts are executed in users' browsers through a vulnerable web application."
        },
        q13: {
            answer: "C",
            explanation: "CSRF tricks an authenticated browser into sending an unwanted request to a website where the user is already signed in."
        },
        q14: {
            answer: "B",
            explanation: "A brute-force attack repeatedly tries different passwords or credentials until the correct combination is discovered."
        },
        q15: {
            answer: "D",
            explanation: "The principle of least privilege means users should receive only the permissions necessary to perform their assigned tasks."
        },
        q16: {
            answer: "A",
            explanation: "Database backups help restore important information after accidental deletion, system failures, or security incidents."
        },
        q17: {
            answer: "C",
            explanation: "OWASP ZAP is a web application security testing tool used to help identify common security vulnerabilities."
        },
        q18: {
            answer: "B",
            explanation: "Security monitoring helps detect suspicious activities, unusual access, and possible security incidents."
        },
        q19: {
            answer: "D",
            explanation: "The Data Privacy Act of 2012, or Republic Act No. 10173, protects personal information in the Philippines."
        },
        q20: {
            answer: "A",
            explanation: "Applying security practices throughout development helps reduce vulnerabilities and protect users and their information."
        }
    };

    // UPDATE ASSESSMENT PROGRESS
    function updateProgress() {
        let answered = 0;

        for (let i = 1; i <= totalQuestions; i++) {
            const selected = document.querySelector(
                'input[name="q' + i + '"]:checked'
            );

            if (selected) {
                answered++;
            }
        }

        const percentage = (answered / totalQuestions) * 100;

        answeredCount.textContent = answered + "/" + totalQuestions;
        progressText.textContent = Math.round(percentage) + "% Completed";
        progressBar.style.width = percentage + "%";
    }

    // LISTEN FOR ANSWER CHANGES
    const allRadios = assessmentForm.querySelectorAll(
        'input[type="radio"]'
    );

    allRadios.forEach(function (radio) {
        radio.addEventListener("change", updateProgress);
    });

    // ASSESSMENT SUBMISSION
    assessmentForm.addEventListener("submit", function (event) {
        event.preventDefault();

        let unanswered = [];

        for (let i = 1; i <= totalQuestions; i++) {
            const selected = document.querySelector(
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

            const firstUnanswered = document.querySelector(
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

            const selected = document.querySelector(
                'input[name="' + questionName + '"]:checked'
            );

            const selectedAnswer = selected.value;
            const correctAnswer = answerKey[questionName].answer;

            const questionCard = selected.closest(".question-card");
            const questionText = questionCard.querySelector("h3").textContent;

            const selectedLabel = selected.closest(".answer-option");
            const selectedText = selectedLabel.querySelector("span").textContent;

            const correctInput = document.querySelector(
                'input[name="' + questionName + '"][value="' + correctAnswer + '"]'
            );

            const correctLabel = correctInput.closest(".answer-option");
            const correctText = correctLabel.querySelector("span").textContent;

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

            const status = isCorrect
                ? "CORRECT ANSWER"
                : "INCORRECT ANSWER";

            explanationCard.innerHTML = `
                <span class="answer-status">${status}</span>
                <h4>Question ${i}: ${questionText}</h4>
                <p><strong>Your Answer:</strong> ${selectedAnswer}. ${selectedText}</p>
                <p><strong>Correct Answer:</strong> ${correctAnswer}. ${correctText}</p>
                <p><strong>Explanation:</strong> ${answerKey[questionName].explanation}</p>
            `;

            explanationList.appendChild(explanationCard);

            // HIGHLIGHT CORRECT AND INCORRECT ANSWERS
            correctLabel.classList.add("correct-answer");

            if (!isCorrect) {
                selectedLabel.classList.add("wrong-answer");
            }

            // DISABLE ANSWERS AFTER SUBMISSION
            const questionInputs = document.querySelectorAll(
                'input[name="' + questionName + '"]'
            );

            questionInputs.forEach(function (input) {
                input.disabled = true;
            });
        }

        // COMPUTE FINAL PERCENTAGE
        const percentage = Math.round(
            (score / totalQuestions) * 100
        );

        // DISPLAY SCORE
        document.getElementById("scoreNumber").textContent = score;
        document.getElementById("percentageText").textContent =
            percentage + "% Correct";

        document.getElementById("correctCount").textContent = correct;
        document.getElementById("incorrectCount").textContent = incorrect;

        // DISPLAY RESULT MESSAGE
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

        // HIDE SUBMIT FORM AND SHOW RESULTS
        assessmentForm.querySelector(".form-actions").style.display = "none";
        resultsSection.hidden = false;

        // SCROLL TO RESULTS
        resultsSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });

    // RESET ASSESSMENT
    function resetAssessment() {
        assessmentForm.reset();

        const allInputs = assessmentForm.querySelectorAll("input");

        allInputs.forEach(function (input) {
            input.disabled = false;
        });

        const allOptions = assessmentForm.querySelectorAll(".answer-option");

        allOptions.forEach(function (option) {
            option.classList.remove("correct-answer", "wrong-answer");
        });

        assessmentForm.querySelector(".form-actions").style.display = "flex";

        resultsSection.hidden = true;
        explanationList.innerHTML = "";

        updateProgress();

        document.getElementById("scoreNumber").textContent = "0";
        document.getElementById("percentageText").textContent = "0% Correct";
        document.getElementById("correctCount").textContent = "0";
        document.getElementById("incorrectCount").textContent = "0";
        document.getElementById("resultMessage").textContent = "Good effort!";

        document.getElementById("assessment").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    // RESET BUTTON
    const resetButton = document.getElementById("resetAssessment");

    resetButton.addEventListener("click", function () {
        // Allow the browser to clear radio selections first.
        setTimeout(function () {
            resetAssessment();
        }, 0);
    });

    // TRY AGAIN BUTTON
    const tryAgainButton = document.getElementById("tryAgain");

    tryAgainButton.addEventListener("click", function () {
        resetAssessment();
    });

    // SIDEBAR ACTIVE LINK
    const sections = document.querySelectorAll(
        ".main-content > section"
    );

    const sidebarLinks = document.querySelectorAll(
        ".sidebar nav a"
    );

    function updateActiveLink() {
        let currentSection = "";

        sections.forEach(function (section) {
            const sectionTop = section.offsetTop - 150;

            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute("id");
            }
        });

        sidebarLinks.forEach(function (link) {
            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + currentSection) {
                link.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", updateActiveLink);

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

    // BACK TO TOP BUTTON
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

    // INITIAL PROGRESS
    updateProgress();

});
