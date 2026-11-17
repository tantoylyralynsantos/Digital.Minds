// ==========================================
// LESSON 3 ASSESSMENT
// Processes, Threads, and Process Scheduling
// ==========================================

const mcQuestions = [
    {
        question: "What is a process in an operating system?",
        options: [
            "A program stored permanently on a hard drive",
            "A program currently being executed",
            "A physical component of the computer",
            "A type of computer network"
        ],
        answer: 1,
        explanation: "A process is a program that is currently being executed by the operating system."
    },
    {
        question: "Which component of a process contains information about its current state, program counter, and CPU registers?",
        options: [
            "Hard Disk",
            "Process Control Block",
            "File System",
            "Device Driver"
        ],
        answer: 1,
        explanation: "The Process Control Block (PCB) stores important information about a process, including its state, program counter, and CPU registers."
    },
    {
        question: "Which of the following is NOT a common process state?",
        options: [
            "New",
            "Ready",
            "Running",
            "Deleted"
        ],
        answer: 3,
        explanation: "Common process states include New, Ready, Running, Waiting or Blocked, and Terminated."
    },
    {
        question: "What does the Ready state mean?",
        options: [
            "The process is waiting for CPU execution",
            "The process has already finished",
            "The process is waiting for an input device",
            "The process is being removed"
        ],
        answer: 0,
        explanation: "A process in the Ready state is prepared to execute and is waiting to be assigned to the CPU."
    },
    {
        question: "What happens during a context switch?",
        options: [
            "The computer shuts down",
            "The operating system saves one process state and loads another",
            "A file is permanently deleted",
            "The CPU stops working"
        ],
        answer: 1,
        explanation: "A context switch occurs when the operating system saves the state of the current process and restores the state of another process."
    },
    {
        question: "Which operating system operation creates a new process?",
        options: [
            "Process creation",
            "Process scheduling",
            "Process synchronization",
            "Process termination"
        ],
        answer: 0,
        explanation: "Process creation is the operation performed by the operating system to create a new process."
    },
    {
        question: "What is the main purpose of Interprocess Communication (IPC)?",
        options: [
            "To delete unnecessary files",
            "To allow processes to exchange information",
            "To increase monitor brightness",
            "To replace the CPU"
        ],
        answer: 1,
        explanation: "Interprocess Communication allows processes to communicate and exchange data with one another."
    },
    {
        question: "Which of the following is an example of an IPC method?",
        options: [
            "Shared memory",
            "Screen resolution",
            "Keyboard layout",
            "Power settings"
        ],
        answer: 0,
        explanation: "Shared memory is an IPC method that allows processes to access a common region of memory."
    },
    {
        question: "What is a thread?",
        options: [
            "A separate computer",
            "The smallest unit of CPU execution within a process",
            "A type of storage device",
            "A computer virus"
        ],
        answer: 1,
        explanation: "A thread is the smallest unit of CPU execution within a process. Multiple threads may exist in one process."
    },
    {
        question: "What do threads within the same process commonly share?",
        options: [
            "Their own separate address spaces",
            "Code, data, and resources of the process",
            "Different operating systems",
            "Separate computers"
        ],
        answer: 1,
        explanation: "Threads within one process share the process's code, data, and resources, while each thread maintains its own execution state and stack."
    },
    {
        question: "Which type of thread is managed by a thread library in user space?",
        options: [
            "Kernel thread",
            "User-level thread",
            "System process",
            "Hardware thread"
        ],
        answer: 1,
        explanation: "User-level threads are managed by a thread library without requiring the kernel to manage each individual thread."
    },
    {
        question: "Which type of thread is managed directly by the operating system kernel?",
        options: [
            "User-level thread",
            "Kernel-level thread",
            "Application thread",
            "Background file"
        ],
        answer: 1,
        explanation: "Kernel-level threads are managed and scheduled by the operating system kernel."
    },
    {
        question: "What is the main purpose of CPU scheduling?",
        options: [
            "To select which process will use the CPU next",
            "To permanently remove processes",
            "To increase storage capacity",
            "To change the operating system"
        ],
        answer: 0,
        explanation: "CPU scheduling determines which ready process should be assigned to the CPU for execution."
    },
    {
        question: "Which scheduling algorithm executes processes in the order they arrive?",
        options: [
            "Round Robin",
            "Shortest Job First",
            "First Come, First Served",
            "Priority Scheduling"
        ],
        answer: 2,
        explanation: "First Come, First Served (FCFS) schedules processes according to their arrival order."
    },
    {
        question: "Which scheduling algorithm selects the process with the shortest CPU burst time?",
        options: [
            "FCFS",
            "Shortest Job First",
            "Round Robin",
            "Priority Scheduling"
        ],
        answer: 1,
        explanation: "Shortest Job First (SJF) selects the process with the shortest expected CPU burst time."
    },
    {
        question: "Which scheduling algorithm assigns each process a fixed time interval called a time quantum?",
        options: [
            "Round Robin",
            "FCFS",
            "Shortest Job First",
            "First In, Last Out"
        ],
        answer: 0,
        explanation: "Round Robin gives each process a fixed time quantum. If the process does not finish, it returns to the ready queue."
    },
    {
        question: "What is starvation in CPU scheduling?",
        options: [
            "A process receives too much CPU time",
            "A process waits indefinitely because other processes keep getting priority",
            "The CPU becomes physically damaged",
            "The operating system automatically shuts down"
        ],
        answer: 1,
        explanation: "Starvation occurs when a process waits indefinitely because other processes continue to receive CPU resources."
    },
    {
        question: "What is aging in priority scheduling?",
        options: [
            "Removing old files",
            "Gradually increasing the priority of waiting processes",
            "Reducing CPU speed",
            "Deleting inactive threads"
        ],
        answer: 1,
        explanation: "Aging gradually increases the priority of waiting processes to prevent starvation."
    },
    {
        question: "What is a race condition?",
        options: [
            "A situation where the result depends on the timing of concurrent operations",
            "A process that runs only once",
            "A method of deleting data",
            "A type of CPU scheduling algorithm"
        ],
        answer: 0,
        explanation: "A race condition occurs when multiple processes or threads access shared data and the final result depends on the order or timing of execution."
    },
    {
        question: "Which of the following is one of the necessary conditions for deadlock?",
        options: [
            "Mutual exclusion",
            "High screen resolution",
            "Fast internet connection",
            "Large storage capacity"
        ],
        answer: 0,
        explanation: "Mutual exclusion is one of the four necessary conditions for deadlock, along with hold and wait, no preemption, and circular wait."
    }
];

const identificationQuestions = [
    {
        question: "The smallest unit of CPU execution within a process.",
        answer: ["thread", "a thread"],
        displayAnswer: "Thread",
        explanation: "A thread is the smallest unit of execution that can be scheduled by the CPU."
    },
    {
        question: "A data structure used by the operating system to store information about a process.",
        answer: ["process control block", "pcb"],
        displayAnswer: "Process Control Block (PCB)",
        explanation: "The PCB contains information needed by the operating system to manage a process."
    },
    {
        question: "The process state in which a process is waiting to be assigned to the CPU.",
        answer: ["ready", "ready state"],
        displayAnswer: "Ready State",
        explanation: "A process in the Ready state is prepared to run but is waiting for CPU allocation."
    },
    {
        question: "The operation of saving the state of one process and restoring another process.",
        answer: ["context switch", "context switching"],
        displayAnswer: "Context Switching",
        explanation: "Context switching allows the CPU to switch from one process to another."
    },
    {
        question: "The communication method that allows processes to exchange information.",
        answer: ["interprocess communication", "ipc", "inter process communication"],
        displayAnswer: "Interprocess Communication (IPC)",
        explanation: "IPC enables processes to communicate and share information."
    },
    {
        question: "The CPU scheduling algorithm that executes processes according to their arrival order.",
        answer: ["first come first served", "fcfs", "first come, first served"],
        displayAnswer: "First Come, First Served (FCFS)",
        explanation: "FCFS gives the CPU to the process that arrives first."
    },
    {
        question: "The scheduling algorithm that assigns a fixed time interval to each process.",
        answer: ["round robin", "round-robin"],
        displayAnswer: "Round Robin",
        explanation: "Round Robin uses a time quantum to give processes a fair share of CPU time."
    },
    {
        question: "The technique that gradually increases the priority of waiting processes.",
        answer: ["aging", "ageing", "priority aging", "priority ageing"],
        displayAnswer: "Aging",
        explanation: "Aging helps prevent starvation by increasing the priority of processes that have waited for a long time."
    },
    {
        question: "A situation where processes wait indefinitely for resources held by one another.",
        answer: ["deadlock", "a deadlock"],
        displayAnswer: "Deadlock",
        explanation: "Deadlock occurs when processes are permanently blocked because each is waiting for a resource held by another."
    },
    {
        question: "A situation where the result of accessing shared data depends on the timing of concurrent execution.",
        answer: ["race condition", "a race condition"],
        displayAnswer: "Race Condition",
        explanation: "A race condition can occur when multiple threads or processes access shared data without proper synchronization."
    }
];

const trueFalseQuestions = [
    {
        question: "A process is a program that is currently being executed.",
        answer: true,
        explanation: "True. A process is an active instance of a program being executed by the operating system."
    },
    {
        question: "Threads belonging to the same process always have completely separate code and data sections.",
        answer: false,
        explanation: "False. Threads in the same process generally share code and data, but each thread has its own stack and execution state."
    },
    {
        question: "Round Robin scheduling uses a time quantum to allocate CPU time to processes.",
        answer: true,
        explanation: "True. Round Robin assigns each process a fixed time quantum before moving to the next process."
    },
    {
        question: "Starvation happens when a process receives unlimited CPU time.",
        answer: false,
        explanation: "False. Starvation happens when a process waits indefinitely because other processes keep receiving resources or CPU time."
    },
    {
        question: "Deadlock can occur when processes wait for resources held by one another.",
        answer: true,
        explanation: "True. Deadlock may occur when processes are stuck waiting for resources held by other processes."
    }
];

// ==========================================
// ELEMENTS
// ==========================================

const mcContainer = document.getElementById("multipleChoiceContainer");
const idContainer = document.getElementById("identificationContainer");
const tfContainer = document.getElementById("trueFalseContainer");

const assessmentForm = document.getElementById("assessmentForm");

const progressText = document.getElementById("progressText");
const progressPercent = document.getElementById("progressPercent");
const progressFill = document.getElementById("progressFill");

const resultsSection = document.getElementById("resultsSection");
const explanationsContainer = document.getElementById("explanationsContainer");

const totalQuestions =
    mcQuestions.length +
    identificationQuestions.length +
    trueFalseQuestions.length;

// ==========================================
// DISPLAY MULTIPLE CHOICE
// ==========================================

function displayMultipleChoice() {

    mcContainer.innerHTML = "";

    mcQuestions.forEach((item, index) => {

        const questionNumber = index + 1;

        let optionsHTML = "";

        item.options.forEach((option, optionIndex) => {

            const letter = String.fromCharCode(65 + optionIndex);

            optionsHTML += `
                <label class="option-label">
                    <input
                        type="radio"
                        name="mc${questionNumber}"
                        value="${optionIndex}"
                    >
                    <span><strong>${letter}.</strong> ${option}</span>
                </label>
            `;

        });

        mcContainer.innerHTML += `
            <div class="question-card">

                <div class="question-top">
                    <span class="question-number">${questionNumber}</span>

                    <p class="question-text">
                        ${item.question}
                    </p>
                </div>

                <div class="options-list">
                    ${optionsHTML}
                </div>

            </div>
        `;

    });

}

// ==========================================
// DISPLAY IDENTIFICATION
// ==========================================

function displayIdentification() {

    idContainer.innerHTML = "";

    identificationQuestions.forEach((item, index) => {

        const questionNumber = index + 21;

        idContainer.innerHTML += `
            <div class="question-card">

                <div class="question-top">
                    <span class="question-number">${questionNumber}</span>

                    <p class="question-text">
                        ${item.question}
                    </p>
                </div>

                <input
                    type="text"
                    class="answer-input"
                    id="id${questionNumber}"
                    name="id${questionNumber}"
                    placeholder="Type your answer here..."
                    autocomplete="off"
                >

            </div>
        `;

    });

}

// ==========================================
// DISPLAY TRUE OR FALSE
// ==========================================

function displayTrueFalse() {

    tfContainer.innerHTML = "";

    trueFalseQuestions.forEach((item, index) => {

        const questionNumber = index + 31;

        tfContainer.innerHTML += `
            <div class="question-card">

                <div class="question-top">
                    <span class="question-number">${questionNumber}</span>

                    <p class="question-text">
                        ${item.question}
                    </p>
                </div>

                <div class="tf-options">

                    <label class="option-label">
                        <input
                            type="radio"
                            name="tf${questionNumber}"
                            value="true"
                        >
                        <span>True</span>
                    </label>

                    <label class="option-label">
                        <input
                            type="radio"
                            name="tf${questionNumber}"
                            value="false"
                        >
                        <span>False</span>
                    </label>

                </div>

            </div>
        `;

    });

}

// ==========================================
// INITIALIZE QUESTIONS
// ==========================================

displayMultipleChoice();
displayIdentification();
displayTrueFalse();

// ==========================================
// PROGRESS TRACKING
// ==========================================

function updateProgress() {

    let answered = 0;

    // Multiple Choice
    mcQuestions.forEach((item, index) => {

        const selected = document.querySelector(
            `input[name="mc${index + 1}"]:checked`
        );

        if (selected) {
            answered++;
        }

    });

    // Identification
    identificationQuestions.forEach((item, index) => {

        const input = document.getElementById(`id${index + 21}`);

        if (input && input.value.trim() !== "") {
            answered++;
        }

    });

    // True or False
    trueFalseQuestions.forEach((item, index) => {

        const selected = document.querySelector(
            `input[name="tf${index + 31}"]:checked`
        );

        if (selected) {
            answered++;
        }

    });

    const percentage = Math.round((answered / totalQuestions) * 100);

    progressText.textContent =
        `${answered} out of ${totalQuestions} questions answered`;

    progressPercent.textContent = `${percentage}%`;

    progressFill.style.width = `${percentage}%`;

}

assessmentForm.addEventListener("change", updateProgress);
assessmentForm.addEventListener("input", updateProgress);

// ==========================================
// NORMALIZE IDENTIFICATION ANSWERS
// ==========================================

function normalizeAnswer(answer) {

    return answer
        .toLowerCase()
        .trim()
        .replace(/[.,!?]/g, "")
        .replace(/\s+/g, " ");

}

// ==========================================
// CHECK IDENTIFICATION
// ==========================================

function checkIdentification(userAnswer, correctAnswers) {

    const normalizedUserAnswer = normalizeAnswer(userAnswer);

    return correctAnswers.some(answer => {

        return normalizeAnswer(answer) === normalizedUserAnswer;

    });

}

// ==========================================
// SUBMIT ASSESSMENT
// ==========================================

assessmentForm.addEventListener("submit", function(event) {

    event.preventDefault();

    let unanswered = [];

    // Check Multiple Choice
    mcQuestions.forEach((item, index) => {

        const selected = document.querySelector(
            `input[name="mc${index + 1}"]:checked`
        );

        if (!selected) {
            unanswered.push(index + 1);
        }

    });

    // Check Identification
    identificationQuestions.forEach((item, index) => {

        const input = document.getElementById(`id${index + 21}`);

        if (!input.value.trim()) {
            unanswered.push(index + 21);
        }

    });

    // Check True or False
    trueFalseQuestions.forEach((item, index) => {

        const selected = document.querySelector(
            `input[name="tf${index + 31}"]:checked`
        );

        if (!selected) {
            unanswered.push(index + 31);
        }

    });

    // Require all answers
    if (unanswered.length > 0) {

        alert(
            `Please answer all questions before submitting.\n\n` +
            `${unanswered.length} question(s) are still unanswered.\n` +
            `First unanswered question: ${unanswered[0]}`
        );

        const firstQuestion = document.querySelector(
            `.question-card:nth-child(${unanswered[0]})`
        );

        const target = document.querySelector(
            `input[name="mc${unanswered[0]}"]`
        ) || document.getElementById(
            `id${unanswered[0]}`
        ) || document.querySelector(
            `input[name="tf${unanswered[0]}"]`
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

    const confirmSubmit = confirm(
        "Are you sure you want to submit your assessment?\n\n" +
        "You cannot change your answers after submission."
    );

    if (!confirmSubmit) {
        return;
    }

    calculateResults();

});

// ==========================================
// CALCULATE RESULTS
// ==========================================

function calculateResults() {

    let mcScore = 0;
    let idScore = 0;
    let tfScore = 0;

    const review = [];

    // MULTIPLE CHOICE SCORE
    mcQuestions.forEach((item, index) => {

        const questionNumber = index + 1;

        const selected = document.querySelector(
            `input[name="mc${questionNumber}"]:checked`
        );

        const userAnswerIndex = Number(selected.value);

        const isCorrect = userAnswerIndex === item.answer;

        if (isCorrect) {
            mcScore++;
        }

        const userLetter = String.fromCharCode(65 + userAnswerIndex);
        const correctLetter = String.fromCharCode(65 + item.answer);

        review.push({
            number: questionNumber,
            question: item.question,
            userAnswer: `${userLetter}. ${item.options[userAnswerIndex]}`,
            correctAnswer: `${correctLetter}. ${item.options[item.answer]}`,
            isCorrect: isCorrect,
            explanation: item.explanation
        });

    });

    // IDENTIFICATION SCORE
    identificationQuestions.forEach((item, index) => {

        const questionNumber = index + 21;

        const input = document.getElementById(`id${questionNumber}`);

        const userAnswer = input.value.trim();

        const isCorrect = checkIdentification(
            userAnswer,
            item.answer
        );

        if (isCorrect) {
            idScore++;
        }

        review.push({
            number: questionNumber,
            question: item.question,
            userAnswer: userAnswer,
            correctAnswer: item.displayAnswer,
            isCorrect: isCorrect,
            explanation: item.explanation
        });

    });

    // TRUE OR FALSE SCORE
    trueFalseQuestions.forEach((item, index) => {

        const questionNumber = index + 31;

        const selected = document.querySelector(
            `input[name="tf${questionNumber}"]:checked`
        );

        const userAnswer = selected.value === "true";

        const isCorrect = userAnswer === item.answer;

        if (isCorrect) {
            tfScore++;
        }

        review.push({
            number: questionNumber,
            question: item.question,
            userAnswer: userAnswer ? "True" : "False",
            correctAnswer: item.answer ? "True" : "False",
            isCorrect: isCorrect,
            explanation: item.explanation
        });

    });

    const totalScore = mcScore + idScore + tfScore;

    const percentage = Math.round(
        (totalScore / totalQuestions) * 100
    );

    displayResults(
        totalScore,
        percentage,
        mcScore,
        idScore,
        tfScore,
        review
    );

}

// ==========================================
// DISPLAY RESULTS
// ==========================================

function displayResults(
    totalScore,
    percentage,
    mcScore,
    idScore,
    tfScore,
    review
) {

    document.getElementById("scoreValue").textContent = totalScore;

    document.getElementById("scorePercent").textContent =
        `${percentage}%`;

    document.getElementById("mcResult").textContent =
        `${mcScore} / 20`;

    document.getElementById("idResult").textContent =
        `${idScore} / 10`;

    document.getElementById("tfResult").textContent =
        `${tfScore} / 5`;

    const resultIcon = document.getElementById("resultIcon");
    const resultTitle = document.getElementById("resultTitle");
    const resultMessage = document.getElementById("resultMessage");
    const scoreStatus = document.getElementById("scoreStatus");

    if (percentage >= 90) {

        resultIcon.textContent = "🏆";
        resultTitle.textContent = "Excellent Work!";
        resultMessage.textContent =
            "Outstanding! You have demonstrated an excellent understanding of processes, threads, and process scheduling.";
        scoreStatus.textContent = "Excellent Performance";

    } else if (percentage >= 80) {

        resultIcon.textContent = "🌟";
        resultTitle.textContent = "Very Good!";
        resultMessage.textContent =
            "Great job! You have a very good understanding of the lesson. Keep improving your knowledge.";
        scoreStatus.textContent = "Very Good Performance";

    } else if (percentage >= 75) {

        resultIcon.textContent = "👏";
        resultTitle.textContent = "Good Job!";
        resultMessage.textContent =
            "You passed the assessment. Continue reviewing the topics to strengthen your understanding.";
        scoreStatus.textContent = "Passed";

    } else {

        resultIcon.textContent = "📖";
        resultTitle.textContent = "Keep Practicing!";
        resultMessage.textContent =
            "Do not give up. Review the lesson and study the explanations to improve your understanding.";
        scoreStatus.textContent = "Needs Improvement";

    }

    displayExplanations(review);

    // Hide submit section after submission
    document.querySelector(".submit-section").style.display = "none";

    // Show results
    resultsSection.hidden = false;

    // Disable answer changes
    assessmentForm.querySelectorAll("input").forEach(input => {
        input.disabled = true;
    });

    // Scroll to results
    resultsSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}

// ==========================================
// DISPLAY ANSWER EXPLANATIONS
// ==========================================

function displayExplanations(review) {

    explanationsContainer.innerHTML = "";

    review.forEach(item => {

        const statusClass = item.isCorrect ? "correct" : "incorrect";

        const statusText = item.isCorrect
            ? "✓ Correct"
            : "✗ Incorrect";

        const answerClass = item.isCorrect
            ? "answer-correct"
            : "answer-wrong";

        const card = document.createElement("div");

        card.className = `explanation-card ${statusClass}`;

        const heading = document.createElement("h4");
        heading.textContent =
            `Question ${item.number}: ${statusText}`;

        const question = document.createElement("p");
        question.textContent = item.question;

        const userAnswer = document.createElement("p");
        userAnswer.className = answerClass;
        userAnswer.textContent =
            `Your Answer: ${item.userAnswer}`;

        const correctAnswer = document.createElement("p");
        correctAnswer.className = "answer-correct";
        correctAnswer.textContent =
            `Correct Answer: ${item.correctAnswer}`;

        const explanation = document.createElement("p");
        explanation.textContent =
            `Explanation: ${item.explanation}`;

        card.appendChild(heading);
        card.appendChild(question);
        card.appendChild(userAnswer);

        if (!item.isCorrect) {
            card.appendChild(correctAnswer);
        }

        card.appendChild(explanation);

        explanationsContainer.appendChild(card);

    });

}

// ==========================================
// RESET ASSESSMENT
// ==========================================

function resetAssessment() {

    const confirmReset = confirm(
        "Are you sure you want to reset the assessment?\n\n" +
        "All your answers and results will be cleared."
    );

    if (!confirmReset) {
        return;
    }

    assessmentForm.reset();

    assessmentForm.querySelectorAll("input").forEach(input => {
        input.disabled = false;
    });

    document.querySelector(".submit-section").style.display = "block";

    resultsSection.hidden = true;

    explanationsContainer.innerHTML = "";

    document.getElementById("scoreValue").textContent = "0";
    document.getElementById("scorePercent").textContent = "0%";

    document.getElementById("mcResult").textContent = "0 / 20";
    document.getElementById("idResult").textContent = "0 / 10";
    document.getElementById("tfResult").textContent = "0 / 5";

    updateProgress();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

// ==========================================
// RESET AND TRY AGAIN BUTTONS
// ==========================================

document.getElementById("resetButton").addEventListener(
    "click",
    resetAssessment
);

document.getElementById("tryAgainButton").addEventListener(
    "click",
    resetAssessment
);

// ==========================================
// SIDEBAR ACTIVE LINK
// ==========================================

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    link.addEventListener("click", function() {

        navLinks.forEach(nav => nav.classList.remove("active"));

        this.classList.add("active");

    });

});

// ==========================================
// BACK TO TOP
// ==========================================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function() {

    if (window.scrollY > 350) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }

});

backToTop.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});