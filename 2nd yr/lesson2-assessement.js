document.addEventListener("DOMContentLoaded", function () {

    const mcQuestions = [
        {
            question: "What is an operating system?",
            options: [
                "A physical component of a computer",
                "System software that manages hardware and software resources",
                "A type of computer virus",
                "A programming language"
            ],
            answer: 1,
            explanation: "An operating system manages computer hardware and software resources and provides services for applications."
        },
        {
            question: "Which type of operating system processes jobs in groups with little or no user interaction?",
            options: [
                "Real-Time Operating System",
                "Mobile Operating System",
                "Batch Operating System",
                "Distributed Operating System"
            ],
            answer: 2,
            explanation: "A batch operating system collects jobs into groups and processes them sequentially."
        },
        {
            question: "What technology allows multiple programs to remain in memory at the same time?",
            options: [
                "Multiprogramming",
                "File management",
                "Encryption",
                "Device scheduling"
            ],
            answer: 0,
            explanation: "Multiprogramming keeps multiple programs in memory so the CPU can work on another task when one program waits."
        },
        {
            question: "What is the main purpose of time-sharing systems?",
            options: [
                "To prevent users from accessing computers",
                "To allow multiple users to share computing resources interactively",
                "To remove the need for memory",
                "To run only one application"
            ],
            answer: 1,
            explanation: "Time-sharing systems distribute processor time among multiple users, allowing interactive access to a computer."
        },
        {
            question: "What does multitasking allow an operating system to do?",
            options: [
                "Delete multiple files automatically",
                "Replace the computer processor",
                "Execute multiple tasks seemingly at the same time",
                "Disable background applications"
            ],
            answer: 2,
            explanation: "Multitasking allows users to work with several applications by sharing processor time among tasks."
        },
        {
            question: "Which statement best describes multiprocessing?",
            options: [
                "Using multiple processors or processing cores",
                "Opening multiple folders",
                "Using only one application",
                "Storing files in different folders"
            ],
            answer: 0,
            explanation: "Multiprocessing uses multiple processors or cores to execute tasks and improve computing capacity."
        },
        {
            question: "What is a thread?",
            options: [
                "A type of storage device",
                "A computer network",
                "A hardware failure",
                "The smallest unit of execution within a process"
            ],
            answer: 3,
            explanation: "A thread is the smallest unit of execution within a process. Multiple threads can perform different operations."
        },
        {
            question: "What does virtual memory use when physical RAM becomes insufficient?",
            options: [
                "The keyboard",
                "Storage space",
                "The monitor",
                "The printer"
            ],
            answer: 1,
            explanation: "Virtual memory uses storage space to support memory management when physical RAM is under pressure."
        },
        {
            question: "What is a process in an operating system?",
            options: [
                "A program currently being executed",
                "A folder containing documents",
                "A computer's power supply",
                "A type of monitor"
            ],
            answer: 0,
            explanation: "A process is a program that is currently running or being executed by the computer."
        },
        {
            question: "Which process state means that a process is waiting for CPU time?",
            options: [
                "New",
                "Running",
                "Ready",
                "Terminated"
            ],
            answer: 2,
            explanation: "The Ready state means that a process is prepared to execute but is waiting for CPU allocation."
        },
        {
            question: "Which scheduling algorithm gives each process a fixed amount of CPU time?",
            options: [
                "First Come First Served",
                "Round Robin",
                "Priority Scheduling",
                "Memory Scheduling"
            ],
            answer: 1,
            explanation: "Round Robin assigns each process a fixed time quantum before moving to the next process."
        },
        {
            question: "What is the primary purpose of memory management?",
            options: [
                "To control the computer's screen brightness",
                "To manage internet connections only",
                "To create user passwords",
                "To allocate and monitor memory used by programs"
            ],
            answer: 3,
            explanation: "Memory management allocates, monitors, protects, and deallocates memory used by processes."
        },
        {
            question: "Which file system is commonly associated with Windows?",
            options: [
                "NTFS",
                "ext4",
                "HFS",
                "APFS"
            ],
            answer: 0,
            explanation: "NTFS is a file system commonly used by Windows and supports features such as permissions and large file storage."
        },
        {
            question: "What is the main function of a device driver?",
            options: [
                "To create presentations",
                "To organize folders",
                "To allow communication between the operating system and hardware",
                "To increase internet speed automatically"
            ],
            answer: 2,
            explanation: "Device drivers allow the operating system to communicate with hardware such as printers, graphics cards, and network adapters."
        },
        {
            question: "Which security method verifies the identity of a user?",
            options: [
                "File compression",
                "Authentication",
                "Multitasking",
                "Virtualization"
            ],
            answer: 1,
            explanation: "Authentication verifies a user's identity using methods such as passwords, PINs, fingerprints, or facial recognition."
        },
        {
            question: "Which user interface requires users to type text-based commands?",
            options: [
                "Graphical User Interface",
                "Touchscreen Interface",
                "Voice User Interface",
                "Command Line Interface"
            ],
            answer: 3,
            explanation: "A Command Line Interface (CLI) allows users to interact with the system by entering text-based commands."
        },
        {
            question: "Which component is considered the core of an operating system?",
            options: [
                "Kernel",
                "Monitor",
                "Keyboard",
                "Printer"
            ],
            answer: 0,
            explanation: "The kernel is the central component of an operating system and manages important system operations and hardware resources."
        },
        {
            question: "What is the main purpose of a bootloader?",
            options: [
                "To delete temporary files",
                "To manage user passwords",
                "To locate and load the operating system kernel",
                "To print documents"
            ],
            answer: 2,
            explanation: "The bootloader locates and loads the operating system kernel during startup."
        },
        {
            question: "What is a system call?",
            options: [
                "A phone call made through a computer",
                "A mechanism that allows applications to request services from the OS kernel",
                "A computer restart command only",
                "A type of computer hardware"
            ],
            answer: 1,
            explanation: "System calls provide a controlled way for applications to request services such as file operations and process management from the kernel."
        },
        {
            question: "What software creates and manages virtual machines?",
            options: [
                "Device driver",
                "File manager",
                "Text editor",
                "Hypervisor"
            ],
            answer: 3,
            explanation: "A hypervisor creates and manages virtual machines and distributes physical hardware resources among them."
        }
    ];

    const identificationQuestions = [
        {
            question: "The core component of an operating system that manages hardware resources and essential system operations.",
            answers: ["kernel"],
            explanation: "The kernel is the central part of an operating system."
        },
        {
            question: "The process of starting a computer and loading its operating system.",
            answers: ["booting", "booting process", "boot process"],
            explanation: "Booting prepares the hardware and loads the operating system into memory."
        },
        {
            question: "Software that enables communication between the operating system and a hardware device.",
            answers: ["device driver", "driver", "device drivers"],
            explanation: "Device drivers allow the operating system to communicate with hardware."
        },
        {
            question: "A mechanism that allows an application to request a service from the operating system kernel.",
            answers: ["system call", "system calls"],
            explanation: "System calls provide controlled access to operating system services."
        },
        {
            question: "Software or firmware that creates and manages virtual machines.",
            answers: ["hypervisor"],
            explanation: "A hypervisor manages virtual machines and distributes hardware resources."
        },
        {
            question: "A separate copy of important data that can be used to restore information after data loss.",
            answers: ["backup", "data backup"],
            explanation: "A backup is a separate copy of data used for recovery."
        },
        {
            question: "The modern firmware interface commonly used to initialize hardware and start a computer.",
            answers: ["uefi", "unified extensible firmware interface"],
            explanation: "UEFI initializes hardware and helps locate a bootable device."
        },
        {
            question: "The operating system function responsible for allocating, monitoring, and protecting RAM.",
            answers: ["memory management"],
            explanation: "Memory management controls how memory is assigned to running processes."
        },
        {
            question: "Malicious software designed to damage systems, steal information, or gain unauthorized access.",
            answers: ["malware", "malicious software"],
            explanation: "Malware includes viruses, worms, Trojans, spyware, and ransomware."
        },
        {
            question: "A software-based computer environment that operates like an independent physical computer.",
            answers: ["virtual machine", "vm"],
            explanation: "A virtual machine uses virtual hardware resources and can run its own operating system."
        }
    ];

    const trueFalseQuestions = [
        {
            question: "An operating system acts as an interface between computer hardware and users.",
            answer: true,
            explanation: "True. The operating system provides an environment that allows users and applications to interact with hardware."
        },
        {
            question: "Multitasking means that a computer can only execute one task and cannot switch between applications.",
            answer: false,
            explanation: "False. Multitasking allows the operating system to manage multiple tasks seemingly at the same time."
        },
        {
            question: "A device driver helps the operating system communicate with hardware devices.",
            answer: true,
            explanation: "True. Device drivers provide the software connection between the operating system and hardware."
        },
        {
            question: "A hypervisor is used to create and manage virtual machines.",
            answer: true,
            explanation: "True. A hypervisor manages virtual machines and allocates physical resources to them."
        },
        {
            question: "Regular operating system updates can help improve security and fix software problems.",
            answer: true,
            explanation: "True. Updates commonly include security patches, bug fixes, and compatibility improvements."
        }
    ];

    const mcContainer = document.getElementById("multipleChoiceContainer");
    const idContainer = document.getElementById("identificationContainer");
    const tfContainer = document.getElementById("trueFalseContainer");

    const form = document.getElementById("assessmentForm");
    const progressText = document.getElementById("progressText");
    const progressFill = document.getElementById("progressFill");

    const resultsSection = document.getElementById("results");
    const resetButton = document.getElementById("resetAssessment");
    const tryAgainButton = document.getElementById("tryAgain");

    const totalQuestions =
        mcQuestions.length +
        identificationQuestions.length +
        trueFalseQuestions.length;

    /* CREATE MULTIPLE CHOICE QUESTIONS */

    mcQuestions.forEach((item, index) => {
        const questionNumber = index + 1;

        const card = document.createElement("div");
        card.className = "assessment-question";

        const optionsHTML = item.options.map((option, optionIndex) => {
            const letter = String.fromCharCode(65 + optionIndex);

            return `
                <label class="option-label">
                    <input
                        type="radio"
                        name="mc${questionNumber}"
                        value="${optionIndex}"
                    >
                    <span><strong>${letter}.</strong> ${option}</span>
                </label>
            `;
        }).join("");

        card.innerHTML = `
            <div class="question-title">
                <span class="question-number">${questionNumber}</span>
                <span class="question-text">${item.question}</span>
            </div>

            <div class="options-list">
                ${optionsHTML}
            </div>
        `;

        mcContainer.appendChild(card);
    });

    /* CREATE IDENTIFICATION QUESTIONS */

    identificationQuestions.forEach((item, index) => {
        const questionNumber = index + 21;

        const card = document.createElement("div");
        card.className = "assessment-question";

        card.innerHTML = `
            <label class="question-title" for="id${questionNumber}">
                <span class="question-number">${questionNumber}</span>
                <span class="question-text">${item.question}</span>
            </label>

            <input
                type="text"
                class="identification-input"
                id="id${questionNumber}"
                name="id${questionNumber}"
                placeholder="Type your answer here..."
                spellcheck="false"
            >
        `;

        idContainer.appendChild(card);
    });

    /* CREATE TRUE OR FALSE QUESTIONS */

    trueFalseQuestions.forEach((item, index) => {
        const questionNumber = index + 31;

        const card = document.createElement("div");
        card.className = "assessment-question";

        card.innerHTML = `
            <div class="question-title">
                <span class="question-number">${questionNumber}</span>
                <span class="question-text">${item.question}</span>
            </div>

            <div class="tf-options">
                <label class="option-label">
                    <input
                        type="radio"
                        name="tf${questionNumber}"
                        value="true"
                    >
                    <span>TRUE</span>
                </label>

                <label class="option-label">
                    <input
                        type="radio"
                        name="tf${questionNumber}"
                        value="false"
                    >
                    <span>FALSE</span>
                </label>
            </div>
        `;

        tfContainer.appendChild(card);
    });

    /* PROGRESS TRACKER */

    function updateProgress() {
        let answered = 0;

        mcQuestions.forEach((item, index) => {
            const selected = document.querySelector(
                `input[name="mc${index + 1}"]:checked`
            );

            if (selected) answered++;
        });

        identificationQuestions.forEach((item, index) => {
            const input = document.getElementById(`id${index + 21}`);

            if (input.value.trim() !== "") {
                answered++;
            }
        });

        trueFalseQuestions.forEach((item, index) => {
            const selected = document.querySelector(
                `input[name="tf${index + 31}"]:checked`
            );

            if (selected) answered++;
        });

        const percentage = (answered / totalQuestions) * 100;

        progressText.textContent =
            `${answered} of ${totalQuestions} answered`;

        progressFill.style.width = `${percentage}%`;
    }

    form.addEventListener("change", updateProgress);
    form.addEventListener("input", updateProgress);

    /* NORMALIZE IDENTIFICATION ANSWERS */

    function normalizeAnswer(value) {
        return value
            .toLowerCase()
            .trim()
            .replace(/[.,!?]/g, "")
            .replace(/\s+/g, " ");
    }

    /* CHECK ALL QUESTIONS */

    function calculateResults() {
        let mcScore = 0;
        let idScore = 0;
        let tfScore = 0;

        const explanations = [];

        /* MULTIPLE CHOICE CHECKING */

        mcQuestions.forEach((item, index) => {
            const questionNumber = index + 1;

            const selected = document.querySelector(
                `input[name="mc${questionNumber}"]:checked`
            );

            const userAnswer = selected
                ? Number(selected.value)
                : null;

            const isCorrect = userAnswer === item.answer;

            if (isCorrect) mcScore++;

            const userAnswerText = userAnswer === null
                ? "No answer"
                : `${String.fromCharCode(65 + userAnswer)}. ${item.options[userAnswer]}`;

            const correctAnswerText =
                `${String.fromCharCode(65 + item.answer)}. ${item.options[item.answer]}`;

            explanations.push({
                number: questionNumber,
                question: item.question,
                userAnswer: userAnswerText,
                correctAnswer: correctAnswerText,
                explanation: item.explanation,
                isCorrect: isCorrect
            });
        });

        /* IDENTIFICATION CHECKING */

        identificationQuestions.forEach((item, index) => {
            const questionNumber = index + 21;
            const input = document.getElementById(`id${questionNumber}`);

            const userAnswer = normalizeAnswer(input.value);

            const isCorrect = item.answers.some(answer =>
                normalizeAnswer(answer) === userAnswer
            );

            if (isCorrect) idScore++;

            explanations.push({
                number: questionNumber,
                question: item.question,
                userAnswer: input.value.trim() || "No answer",
                correctAnswer: item.answers[0],
                explanation: item.explanation,
                isCorrect: isCorrect
            });
        });

        /* TRUE OR FALSE CHECKING */

        trueFalseQuestions.forEach((item, index) => {
            const questionNumber = index + 31;

            const selected = document.querySelector(
                `input[name="tf${questionNumber}"]:checked`
            );

            const userAnswer = selected
                ? selected.value === "true"
                : null;

            const isCorrect = userAnswer === item.answer;

            if (isCorrect) tfScore++;

            explanations.push({
                number: questionNumber,
                question: item.question,
                userAnswer: userAnswer === null
                    ? "No answer"
                    : userAnswer ? "TRUE" : "FALSE",
                correctAnswer: item.answer ? "TRUE" : "FALSE",
                explanation: item.explanation,
                isCorrect: isCorrect
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

    /* DISPLAY RESULTS */

    function displayResults(
        totalScore,
        percentage,
        mcScore,
        idScore,
        tfScore,
        explanations
    ) {
        document.getElementById("scoreNumber").textContent = totalScore;
        document.getElementById("scorePercentage").textContent =
            `${percentage}%`;

        document.getElementById("mcScore").textContent =
            `${mcScore} / 20`;

        document.getElementById("idScore").textContent =
            `${idScore} / 10`;

        document.getElementById("tfScore").textContent =
            `${tfScore} / 5`;

        const resultMessage = document.getElementById("resultMessage");
        const resultStatus = document.getElementById("resultStatus");

        if (percentage >= 90) {
            resultMessage.textContent =
                "Excellent work! You have demonstrated an excellent understanding of operating system concepts and functions.";

            resultStatus.textContent = "Excellent";
        } else if (percentage >= 80) {
            resultMessage.textContent =
                "Very good! You have a strong understanding of the lesson. Continue reviewing the topics.";

            resultStatus.textContent = "Very Good";
        } else if (percentage >= 75) {
            resultMessage.textContent =
                "Good job! You have reached the passing score. Review the explanations to strengthen your understanding.";

            resultStatus.textContent = "Passed";
        } else {
            resultMessage.textContent =
                "Keep practicing! Review the lesson materials and study the explanations before trying again.";

            resultStatus.textContent = "Needs Improvement";
        }

        document.getElementById("resultDetails").textContent =
            `You answered ${totalScore} out of ${totalQuestions} questions correctly. ` +
            `Your final percentage is ${percentage}%.`;

        const explanationList =
            document.getElementById("explanationList");

        explanationList.innerHTML = "";

        explanations.forEach(item => {
            const explanationCard = document.createElement("div");

            explanationCard.className =
                `explanation-item ${item.isCorrect ? "correct" : "incorrect"}`;

            explanationCard.innerHTML = `
                <h4>Question ${item.number}: ${item.isCorrect ? "Correct" : "Incorrect"}</h4>

                <p><strong>${item.question}</strong></p>

                <p>
                    Your Answer:
                    <span class="${item.isCorrect ? "correct-answer" : "wrong-answer"}">
                        ${item.userAnswer}
                    </span>
                </p>

                <p>
                    Correct Answer:
                    <span class="correct-answer">
                        ${item.correctAnswer}
                    </span>
                </p>

                <p class="explanation-text">
                    Explanation: ${item.explanation}
                </p>
            `;

            explanationList.appendChild(explanationCard);
        });

        resultsSection.hidden = false;
        form.closest(".content-section").querySelector(".submit-section").style.display = "none";

        resultsSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    /* SUBMIT ASSESSMENT */

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const unanswered = [];

        mcQuestions.forEach((item, index) => {
            const questionNumber = index + 1;

            const selected = document.querySelector(
                `input[name="mc${questionNumber}"]:checked`
            );

            if (!selected) unanswered.push(questionNumber);
        });

        identificationQuestions.forEach((item, index) => {
            const questionNumber = index + 21;
            const input = document.getElementById(`id${questionNumber}`);

            if (input.value.trim() === "") {
                unanswered.push(questionNumber);
            }
        });

        trueFalseQuestions.forEach((item, index) => {
            const questionNumber = index + 31;

            const selected = document.querySelector(
                `input[name="tf${questionNumber}"]:checked`
            );

            if (!selected) unanswered.push(questionNumber);
        });

        if (unanswered.length > 0) {
            alert(
                `Please answer all questions before submitting.\n\n` +
                `Unanswered questions: ${unanswered.join(", ")}`
            );

            const firstUnanswered = unanswered[0];

            const firstElement =
                document.querySelector(`[name="mc${firstUnanswered}"]`) ||
                document.getElementById(`id${firstUnanswered}`) ||
                document.querySelector(`[name="tf${firstUnanswered}"]`);

            if (firstElement) {
                firstElement.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            }

            return;
        }

        const confirmed = confirm(
            "Are you sure you want to submit your assessment?\n\n" +
            "You will see your final score and answer explanations after submission."
        );

        if (!confirmed) return;

        calculateResults();
    });

    /* RESET ASSESSMENT */

    function resetAssessment() {
        const confirmed = confirm(
            "Are you sure you want to reset all your answers?"
        );

        if (!confirmed) return;

        form.reset();

        resultsSection.hidden = true;

        form.closest(".content-section").querySelector(".submit-section").style.display = "";

        progressText.textContent = "0 of 35 answered";
        progressFill.style.width = "0%";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    resetButton.addEventListener("click", resetAssessment);
    tryAgainButton.addEventListener("click", resetAssessment);

    /* BACK TO TOP BUTTON */

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

    updateProgress();

});