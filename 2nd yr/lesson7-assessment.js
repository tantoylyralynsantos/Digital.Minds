
document.addEventListener("DOMContentLoaded", function () {

    const totalQuestions = 20;
    const passingScore = 12;

    const answerKey = {
        q1: "B",
        q2: "C",
        q3: "A",
        q4: "D",
        q5: "B",
        q6: "C",
        q7: "A",
        q8: "D",
        q9: "B",
        q10: "C",
        q11: "D",
        q12: "A",
        q13: "B",
        q14: "C",
        q15: "D",
        q16: "A",
        q17: "B",
        q18: "C",
        q19: "D",
        q20: "A"
    };

    const explanations = {
        q1: "Resource allocation is the process of assigning available hardware or software resources to processes that need them.",
        q2: "A printer is a physical computer component, so it is classified as a hardware resource.",
        q3: "The basic allocation cycle follows four steps: a process requests a resource, receives it, uses it, and releases it.",
        q4: "A deadlock occurs when processes are unable to proceed because each is waiting for a resource held by another process.",
        q5: "Mutual exclusion means that a resource can only be used by one process at a time when the resource cannot be shared.",
        q6: "Hold and Wait occurs when a process keeps the resources it already has while waiting for additional resources.",
        q7: "No Preemption means a resource cannot simply be taken away from a process; it must be released voluntarily.",
        q8: "In a Resource Allocation Graph, processes are represented by circles, while resource types are represented by rectangles.",
        q9: "A request edge from P1 to R1 indicates that process P1 is requesting resource R1.",
        q10: "Deadlock prevention ensures that at least one of the four necessary conditions for deadlock cannot occur.",
        q11: "Deadlock avoidance evaluates a resource request and grants it only when the resulting system state remains safe.",
        q12: "A safe state has at least one safe sequence in which all processes can obtain their needed resources and finish.",
        q13: "Banker's Algorithm is a deadlock avoidance algorithm that checks whether granting a request will keep the system in a safe state.",
        q14: "Available represents the number of resource instances that are currently free and can be allocated.",
        q15: "An unsafe state has no guaranteed safe sequence. It does not mean a deadlock has already happened, but deadlock may become possible.",
        q16: "Deadlock detection checks the current system condition to determine whether processes are involved in a deadlock.",
        q17: "A Wait-for Graph shows which processes are waiting for other processes. A cycle can indicate deadlock in a single-instance resource system.",
        q18: "Process termination stops one or more processes involved in a deadlock, allowing their resources to be released.",
        q19: "Rollback restores a process to a previously saved checkpoint so it can restart from that earlier state.",
        q20: "Aging gradually increases the priority of processes that have waited for a long time, helping prevent starvation."
    };

    const answerText = {
        q1: {
            A: "Removing all programs from memory",
            B: "Assigning available resources to processes",
            C: "Deleting unnecessary system files",
            D: "Shutting down the computer automatically"
        },
        q2: {
            A: "Database software",
            B: "Shared library",
            C: "Printer",
            D: "Operating system service"
        },
        q3: {
            A: "Request → Allocation → Use → Release",
            B: "Release → Delete → Restart → Request",
            C: "Use → Shutdown → Allocation → Delete",
            D: "Allocation → Shutdown → Request → Restart"
        },
        q4: {
            A: "A process that finishes successfully",
            B: "A computer running multiple applications",
            C: "A process receiving more memory",
            D: "Processes waiting indefinitely for resources held by one another"
        },
        q5: {
            A: "Circular Wait",
            B: "Mutual Exclusion",
            C: "Hold and Wait",
            D: "No Preemption"
        },
        q6: {
            A: "A process releases all resources immediately",
            B: "A process uses no resources",
            C: "A process holds resources while waiting for additional ones",
            D: "The operating system deletes a process"
        },
        q7: {
            A: "No Preemption",
            B: "Mutual Exclusion",
            C: "Circular Wait",
            D: "Resource Sharing"
        },
        q8: {
            A: "Rectangles",
            B: "Triangles",
            C: "Arrows",
            D: "Circles"
        },
        q9: {
            A: "R1 is assigned to P1",
            B: "P1 is requesting resource R1",
            C: "P1 has released R1",
            D: "R1 has terminated P1"
        },
        q10: {
            A: "To increase the number of running programs",
            B: "To allow all processes to wait indefinitely",
            C: "To ensure at least one necessary deadlock condition cannot occur",
            D: "To remove all hardware resources"
        },
        q11: {
            A: "It grants every request immediately",
            B: "It ignores process requirements",
            C: "It terminates all processes before allocation",
            D: "It checks whether granting a request keeps the system safe"
        },
        q12: {
            A: "A state where at least one safe sequence allows all processes to finish",
            B: "A state where all resources are permanently locked",
            C: "A state where no process is allowed to execute",
            D: "A state where the computer is turned off"
        },
        q13: {
            A: "First-Come, First-Served",
            B: "Banker's Algorithm",
            C: "Round Robin",
            D: "Binary Search"
        },
        q14: {
            A: "The maximum number of processes",
            B: "The resources already permanently deleted",
            C: "The number of resource instances currently available",
            D: "The number of completed programs only"
        },
        q15: {
            A: "A deadlock has definitely already occurred",
            B: "The system has no hardware resources",
            C: "Every process has completed",
            D: "No guaranteed safe sequence exists, so deadlock is possible"
        },
        q16: {
            A: "To identify whether a deadlock currently exists",
            B: "To prevent users from opening files",
            C: "To increase monitor resolution",
            D: "To replace the operating system"
        },
        q17: {
            A: "The physical size of system memory",
            B: "The relationship between processes waiting for one another",
            C: "The number of installed applications",
            D: "The speed of the computer processor"
        },
        q18: {
            A: "Resource sharing",
            B: "Dynamic allocation",
            C: "Process termination",
            D: "Priority scheduling"
        },
        q19: {
            A: "Deleting every file in the computer",
            B: "Increasing the process priority permanently",
            C: "Assigning all resources to one process",
            D: "Restoring a process to a previously saved state"
        },
        q20: {
            A: "Aging",
            B: "Process termination",
            C: "Circular waiting",
            D: "Resource preemption"
        }
    };

    const form = document.getElementById("assessmentForm");
    const quizProgress = document.getElementById("quizProgress");
    const sideProgress = document.getElementById("sideProgress");
    const answeredCount = document.getElementById("answeredCount");
    const progressText = document.getElementById("progressText");
    const formMessage = document.getElementById("formMessage");

    const resultPlaceholder = document.getElementById("resultPlaceholder");
    const resultContent = document.getElementById("resultContent");

    let submitted = false;

    // UPDATE PROGRESS

    function updateProgress() {
        let answered = 0;

        for (let i = 1; i <= totalQuestions; i++) {
            const selected = document.querySelector(`input[name="q${i}"]:checked`);

            if (selected) {
                answered++;
            }
        }

        const percentage = (answered / totalQuestions) * 100;

        quizProgress.style.width = percentage + "%";
        sideProgress.style.width = percentage + "%";

        answeredCount.textContent = `${answered} / ${totalQuestions} Answered`;
        progressText.textContent = `${answered} of ${totalQuestions} answered`;
    }

    // LISTEN FOR ANSWERS

    form.addEventListener("change", function (event) {
        if (event.target.matches('input[type="radio"]')) {
            updateProgress();

            if (formMessage.classList.contains("show")) {
                formMessage.classList.remove("show");
                formMessage.textContent = "";
            }
        }
    });

    // GET SELECTED ANSWER

    function getSelectedAnswer(questionNumber) {
        const selected = document.querySelector(
            `input[name="q${questionNumber}"]:checked`
        );

        return selected ? selected.value : null;
    }

    // SUBMIT ASSESSMENT

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        if (submitted) {
            return;
        }

        let unanswered = [];

        for (let i = 1; i <= totalQuestions; i++) {
            if (!getSelectedAnswer(i)) {
                unanswered.push(i);
            }
        }

        if (unanswered.length > 0) {
            formMessage.textContent =
                `Please answer all questions before submitting. You still have ${unanswered.length} unanswered question(s).`;

            formMessage.classList.add("show");

            const firstUnanswered = document.querySelector(
                `[data-question="${unanswered[0]}"]`
            );

            firstUnanswered.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

            return;
        }

        formMessage.classList.remove("show");

        calculateResults();
    });

    // CALCULATE RESULTS

    function calculateResults() {
        let score = 0;
        let correct = 0;
        let incorrect = 0;

        for (let i = 1; i <= totalQuestions; i++) {
            const questionName = `q${i}`;
            const selectedAnswer = getSelectedAnswer(i);
            const correctAnswer = answerKey[questionName];

            const questionCard = document.querySelector(
                `[data-question="${i}"]`
            );

            const feedback = questionCard.querySelector(".question-feedback");
            const labels = questionCard.querySelectorAll(".options label");

            const isCorrect = selectedAnswer === correctAnswer;

            if (isCorrect) {
                score++;
                correct++;
                questionCard.classList.add("correct");

                feedback.innerHTML =
                    `<strong>Correct!</strong> ${explanations[questionName]}`;
            } else {
                incorrect++;
                questionCard.classList.add("incorrect");

                feedback.innerHTML =
                    `<strong>Incorrect.</strong> Correct answer: ${correctAnswer}. ${answerText[questionName][correctAnswer]}. ${explanations[questionName]}`;
            }

            // HIGHLIGHT ANSWERS

            labels.forEach(function (label) {
                const input = label.querySelector("input");
                input.disabled = true;

                if (input.value === correctAnswer) {
                    label.classList.add("correct-option");
                }

                if (
                    input.checked &&
                    input.value !== correctAnswer
                ) {
                    label.classList.add("wrong-option");
                }
            });
        }

        submitted = true;

        displayResults(score, correct, incorrect);

        // DISABLE SUBMISSION BUTTON

        const submitButton = document.querySelector(".submit-btn");
        submitButton.disabled = true;
        submitButton.textContent = "Assessment Submitted";
        submitButton.style.opacity = "0.65";
        submitButton.style.cursor = "not-allowed";

        document.getElementById("results").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    // DISPLAY RESULTS

    function displayResults(score, correct, incorrect) {
        const percentage = Math.round((score / totalQuestions) * 100);
        const passed = score >= passingScore;

        resultPlaceholder.hidden = true;
        resultContent.hidden = false;

        const resultBanner = document.getElementById("resultBanner");
        const resultIcon = document.getElementById("resultIcon");
        const resultTitle = document.getElementById("resultTitle");
        const resultMessage = document.getElementById("resultMessage");

        resultBanner.classList.remove("passed", "failed");

        if (passed) {
            resultBanner.classList.add("passed");
            resultIcon.textContent = "🏆";
            resultTitle.textContent = "Congratulations! You Passed!";
            resultMessage.textContent =
                "Great job! You have demonstrated a good understanding of Deadlocks and Resource Allocation.";
        } else {
            resultBanner.classList.add("failed");
            resultIcon.textContent = "📘";
            resultTitle.textContent = "Keep Practicing!";
            resultMessage.textContent =
                "You did not reach the passing score. Review Lesson 7 and try the assessment again.";
        }

        document.getElementById("scoreValue").textContent =
            `${score}/${totalQuestions}`;

        document.getElementById("percentageValue").textContent =
            `${percentage}%`;

        document.getElementById("correctValue").textContent = correct;
        document.getElementById("incorrectValue").textContent = incorrect;

        generateAnswerReview();
    }

    // GENERATE ANSWER REVIEW

    function generateAnswerReview() {
        const answerReview = document.getElementById("answerReview");

        answerReview.innerHTML = "";

        for (let i = 1; i <= totalQuestions; i++) {
            const questionName = `q${i}`;
            const selectedAnswer = getSelectedAnswer(i);
            const correctAnswer = answerKey[questionName];

            const isCorrect = selectedAnswer === correctAnswer;

            const reviewItem = document.createElement("div");

            reviewItem.className = isCorrect
                ? "review-item review-correct"
                : "review-item review-incorrect";

            reviewItem.innerHTML = `
                <h4>Question ${String(i).padStart(2, "0")}</h4>

                <p class="review-status">
                    ${isCorrect ? "✓ CORRECT ANSWER" : "✗ INCORRECT ANSWER"}
                </p>

                <p>
                    <strong>Your Answer:</strong>
                    ${selectedAnswer}. ${answerText[questionName][selectedAnswer]}
                </p>

                <p>
                    <strong>Correct Answer:</strong>
                    ${correctAnswer}. ${answerText[questionName][correctAnswer]}
                </p>

                <p class="explanation">
                    <strong>Explanation:</strong> ${explanations[questionName]}
                </p>
            `;

            answerReview.appendChild(reviewItem);
        }
    }

    // RESET ASSESSMENT

    function resetAssessment() {
        const confirmed = confirm(
            "Are you sure you want to reset all answers and start again?"
        );

        if (!confirmed) {
            return;
        }

        form.reset();

        submitted = false;

        document.querySelectorAll(".question-card").forEach(function (card) {
            card.classList.remove("correct", "incorrect");

            const feedback = card.querySelector(".question-feedback");
            feedback.innerHTML = "";

            card.querySelectorAll("label").forEach(function (label) {
                label.classList.remove("correct-option", "wrong-option");
            });

            card.querySelectorAll("input").forEach(function (input) {
                input.disabled = false;
            });
        });

        const submitButton = document.querySelector(".submit-btn");
        submitButton.disabled = false;
        submitButton.textContent = "Submit Assessment →";
        submitButton.style.opacity = "1";
        submitButton.style.cursor = "pointer";

        formMessage.classList.remove("show");
        formMessage.textContent = "";

        resultContent.hidden = true;
        resultPlaceholder.hidden = false;

        document.getElementById("answerReview").innerHTML = "";

        updateProgress();

        document.getElementById("assessment").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    document.getElementById("resetBtn").addEventListener("click", resetAssessment);
    document.getElementById("tryAgainBtn").addEventListener("click", resetAssessment);

    // SIDEBAR ACTIVE LINK

    const sections = document.querySelectorAll(
        "#overview, #instructions, #assessment, #results"
    );

    const navLinks = document.querySelectorAll(".side-nav a");

    function updateActiveLink() {
        let currentSection = "";

        sections.forEach(function (section) {
            const sectionTop = section.offsetTop - 160;

            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(function (link) {
            link.classList.remove("active");

            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", updateActiveLink);

    // BACK TO TOP

    const backToTop = document.getElementById("backToTop");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 400) {
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
