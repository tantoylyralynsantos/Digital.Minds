document.addEventListener("DOMContentLoaded", function () {

    const mcqQuestions = [
        {
            q: "What is the primary purpose of device management in an operating system?",
            options: [
                "A. To design websites",
                "B. To control and coordinate hardware devices",
                "C. To create documents",
                "D. To edit images"
            ],
            answer: "B",
            explanation: "Device management controls, monitors, and coordinates hardware devices connected to a computer."
        },
        {
            q: "Which of the following is an input device?",
            options: [
                "A. Monitor",
                "B. Printer",
                "C. Keyboard",
                "D. Speaker"
            ],
            answer: "C",
            explanation: "A keyboard is an input device because it sends data and instructions to the computer."
        },
        {
            q: "Which device produces visual output?",
            options: [
                "A. Scanner",
                "B. Monitor",
                "C. Mouse",
                "D. Microphone"
            ],
            answer: "B",
            explanation: "A monitor displays text, images, videos, and other visual information."
        },
        {
            q: "What is a device controller?",
            options: [
                "A. Software used to edit files",
                "B. Hardware that manages the operation of a device",
                "C. A type of computer virus",
                "D. A storage folder"
            ],
            answer: "B",
            explanation: "A device controller is a hardware component that manages communication and operations for a device."
        },
        {
            q: "What is the main purpose of a device driver?",
            options: [
                "A. To connect the computer to electricity",
                "B. To allow the OS to communicate with hardware",
                "C. To increase screen brightness",
                "D. To delete temporary files"
            ],
            answer: "B",
            explanation: "A device driver is software that allows the operating system to communicate with a hardware device."
        },
        {
            q: "Which technique requires the CPU to repeatedly check device status?",
            options: [
                "A. Programmed I/O",
                "B. DMA",
                "C. Spooling",
                "D. Caching"
            ],
            answer: "A",
            explanation: "Programmed I/O uses polling, in which the CPU repeatedly checks whether the device is ready."
        },
        {
            q: "Which I/O technique allows a device to notify the CPU when it needs attention?",
            options: [
                "A. Buffering",
                "B. Interrupt-driven I/O",
                "C. Caching",
                "D. Formatting"
            ],
            answer: "B",
            explanation: "Interrupt-driven I/O uses interrupt signals to notify the processor about device events."
        },
        {
            q: "What does DMA stand for?",
            options: [
                "A. Digital Memory Allocation",
                "B. Direct Memory Access",
                "C. Data Management Application",
                "D. Device Monitoring Access"
            ],
            answer: "B",
            explanation: "DMA means Direct Memory Access, which allows devices to transfer data to or from memory with less CPU involvement."
        },
        {
            q: "What is the main advantage of DMA?",
            options: [
                "A. It removes the need for memory",
                "B. It reduces CPU involvement in data transfers",
                "C. It prevents all computer errors",
                "D. It replaces the operating system"
            ],
            answer: "B",
            explanation: "DMA allows a controller to manage data transfers, freeing the CPU to perform other work."
        },
        {
            q: "What is an interrupt?",
            options: [
                "A. A signal that requests the CPU's attention",
                "B. A type of printer",
                "C. A storage device",
                "D. A programming language"
            ],
            answer: "A",
            explanation: "An interrupt is a signal that temporarily requests the processor to handle an event."
        },
        {
            q: "What is the purpose of device scheduling?",
            options: [
                "A. To choose the order of I/O requests",
                "B. To remove device drivers",
                "C. To create new hardware",
                "D. To change the operating system"
            ],
            answer: "A",
            explanation: "Device scheduling determines the order in which pending input/output requests are processed."
        },
        {
            q: "What is a device queue?",
            options: [
                "A. A list of installed programs",
                "B. A storage area for pending device requests",
                "C. A type of memory chip",
                "D. A computer monitor setting"
            ],
            answer: "B",
            explanation: "A device queue stores requests that are waiting for a hardware device to become available."
        },
        {
            q: "What is buffering?",
            options: [
                "A. Permanently deleting data",
                "B. Temporarily storing data during transfer",
                "C. Encrypting a hard drive",
                "D. Installing a device driver"
            ],
            answer: "B",
            explanation: "Buffering temporarily stores data while it moves between devices or components."
        },
        {
            q: "What is the primary purpose of caching?",
            options: [
                "A. To store frequently accessed data for faster access",
                "B. To remove all stored files",
                "C. To stop the CPU",
                "D. To disconnect devices"
            ],
            answer: "A",
            explanation: "Caching keeps frequently used data in faster storage to reduce access time."
        },
        {
            q: "Which technology is commonly used to manage print jobs before printing?",
            options: [
                "A. DMA",
                "B. Spooling",
                "C. Interrupt masking",
                "D. Virtual memory"
            ],
            answer: "B",
            explanation: "Spooling stores print jobs temporarily and sends them to the printer in an organized order."
        },
        {
            q: "What is a deadlock?",
            options: [
                "A. A successful data transfer",
                "B. A situation where processes wait indefinitely for resources",
                "C. A computer startup process",
                "D. A type of output device"
            ],
            answer: "B",
            explanation: "A deadlock happens when processes wait for resources held by one another and cannot proceed."
        },
        {
            q: "Which of the following is a storage device?",
            options: [
                "A. Microphone",
                "B. Speaker",
                "C. Solid-State Drive",
                "D. Projector"
            ],
            answer: "C",
            explanation: "An SSD is a storage device that uses flash memory to store data."
        },
        {
            q: "What does a Network Interface Card (NIC) do?",
            options: [
                "A. Connects a computer to a network",
                "B. Prints documents",
                "C. Captures sound",
                "D. Displays images"
            ],
            answer: "A",
            explanation: "A NIC provides a network connection for a computer or other device."
        },
        {
            q: "What is the main purpose of Plug-and-Play?",
            options: [
                "A. To automatically detect and configure compatible devices",
                "B. To increase the size of the monitor",
                "C. To erase computer memory",
                "D. To prevent users from installing applications"
            ],
            answer: "A",
            explanation: "Plug-and-Play allows compatible devices to be detected and configured with minimal user intervention."
        },
        {
            q: "What is hot-swapping?",
            options: [
                "A. Replacing a supported device while the system is operating",
                "B. Turning off a monitor",
                "C. Formatting a storage device",
                "D. Restarting every application"
            ],
            answer: "A",
            explanation: "Hot-swapping allows compatible hardware to be connected or removed while the system remains operating."
        }
    ];

    const identificationQuestions = [
        {
            q: "The operating system function responsible for controlling and coordinating hardware devices.",
            answer: ["device management"],
            explanation: "Device management coordinates hardware resources and their operations."
        },
        {
            q: "The hardware component that manages the operation of a specific device.",
            answer: ["device controller", "controller"],
            explanation: "A device controller manages communication and operations for a hardware device."
        },
        {
            q: "Software that allows the operating system to communicate with hardware.",
            answer: ["device driver", "driver"],
            explanation: "A device driver translates operating system requests into device-specific instructions."
        },
        {
            q: "The technique that transfers data between a device and memory with reduced CPU involvement.",
            answer: ["direct memory access", "dma"],
            explanation: "DMA allows a controller to handle data transfers between a device and memory."
        },
        {
            q: "A signal that temporarily requests the attention of the CPU.",
            answer: ["interrupt"],
            explanation: "An interrupt informs the CPU that an event needs attention."
        },
        {
            q: "The temporary storage of data while it is being transferred between devices.",
            answer: ["buffering", "buffer"],
            explanation: "Buffering uses temporary memory to hold data during transfer."
        },
        {
            q: "The process of storing frequently accessed data in faster storage.",
            answer: ["caching", "cache"],
            explanation: "Caching improves access speed by keeping frequently used data in a faster location."
        },
        {
            q: "The process of temporarily storing output jobs before a device processes them.",
            answer: ["spooling"],
            explanation: "Spooling organizes jobs, commonly print jobs, before they are processed by a device."
        },
        {
            q: "A situation in which processes wait indefinitely for resources held by one another.",
            answer: ["deadlock"],
            explanation: "A deadlock prevents processes from proceeding because of circular resource waiting."
        },
        {
            q: "A technology that automatically detects and configures compatible hardware devices.",
            answer: ["plug and play", "plug-and-play", "pnp"],
            explanation: "Plug-and-Play simplifies hardware installation and configuration."
        }
    ];

    const trueFalseQuestions = [
        {
            q: "A keyboard is an example of an input device.",
            answer: "true",
            explanation: "A keyboard sends data and instructions to the computer."
        },
        {
            q: "A monitor is primarily an input device.",
            answer: "false",
            explanation: "A monitor is an output device because it displays information from the computer."
        },
        {
            q: "DMA reduces the amount of CPU involvement in data transfers.",
            answer: "true",
            explanation: "DMA allows a controller to manage data movement between devices and memory."
        },
        {
            q: "Device drivers are physical hardware components.",
            answer: "false",
            explanation: "Device drivers are software programs that allow the OS to communicate with hardware."
        },
        {
            q: "Spooling is commonly used in printing systems.",
            answer: "true",
            explanation: "Print spooling stores print jobs temporarily before sending them to the printer."
        }
    ];

    const mcqContainer = document.getElementById("mcqContainer");
    const identificationContainer = document.getElementById("identificationContainer");
    const trueFalseContainer = document.getElementById("trueFalseContainer");
    const form = document.getElementById("assessmentForm");

    const totalQuestions = 35;
    let submitted = false;

    // Create Multiple Choice Questions
    mcqQuestions.forEach(function (question, index) {
        const number = index + 1;

        const card = document.createElement("div");
        card.className = "question-card";
        card.id = "question-" + number;

        let optionsHTML = "";

        question.options.forEach(function (option) {
            const letter = option.charAt(0);

            optionsHTML += `
                <label class="option">
                    <input type="radio" name="q${number}" value="${letter}">
                    <span>${option}</span>
                </label>
            `;
        });

        card.innerHTML = `
            <div class="question-title">
                <span class="question-number">${number}.</span>
                ${question.q}
            </div>
            <div class="option-list">${optionsHTML}</div>
            <div class="feedback" id="feedback-${number}"></div>
        `;

        mcqContainer.appendChild(card);
    });

    // Create Identification Questions
    identificationQuestions.forEach(function (question, index) {
        const number = index + 21;

        const card = document.createElement("div");
        card.className = "question-card";
        card.id = "question-" + number;

        card.innerHTML = `
            <div class="question-title">
                <span class="question-number">${number}.</span>
                ${question.q}
            </div>
            <input
                type="text"
                class="answer-input"
                name="q${number}"
                placeholder="Type your answer here"
                autocomplete="off"
            >
            <div class="feedback" id="feedback-${number}"></div>
        `;

        identificationContainer.appendChild(card);
    });

    // Create True or False Questions
    trueFalseQuestions.forEach(function (question, index) {
        const number = index + 31;

        const card = document.createElement("div");
        card.className = "question-card";
        card.id = "question-" + number;

        card.innerHTML = `
            <div class="question-title">
                <span class="question-number">${number}.</span>
                ${question.q}
            </div>
            <div class="option-list">
                <label class="option">
                    <input type="radio" name="q${number}" value="true">
                    <span>True</span>
                </label>
                <label class="option">
                    <input type="radio" name="q${number}" value="false">
                    <span>False</span>
                </label>
            </div>
            <div class="feedback" id="feedback-${number}"></div>
        `;

        trueFalseContainer.appendChild(card);
    });

    // Get current answer
    function getAnswer(number) {
        const selected = document.querySelector(
            `input[name="q${number}"]:checked`
        );

        if (selected) return selected.value;

        const textInput = document.querySelector(
            `input[name="q${number}"][type="text"]`
        );

        if (textInput) return textInput.value.trim();

        return "";
    }

    // Count answered questions
    function updateProgress() {
        let answered = 0;

        for (let i = 1; i <= totalQuestions; i++) {
            if (getAnswer(i) !== "") {
                answered++;
            }
        }

        const percentage = (answered / totalQuestions) * 100;

        document.getElementById("sideProgress").style.width =
            percentage + "%";

        document.getElementById("mainProgress").style.width =
            percentage + "%";

        document.getElementById("progressText").textContent =
            answered + " / " + totalQuestions;

        document.getElementById("progressLabel").textContent =
            answered + " of " + totalQuestions + " answered";
    }

    form.addEventListener("change", updateProgress);
    form.addEventListener("input", updateProgress);

    // Normalize identification answers
    function normalizeAnswer(value) {
        return value
            .toLowerCase()
            .trim()
            .replace(/[.,!?]/g, "")
            .replace(/\s+/g, " ");
    }

    // Submit and calculate results
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        if (submitted) return;

        const unanswered = [];

        for (let i = 1; i <= totalQuestions; i++) {
            if (getAnswer(i) === "") {
                unanswered.push(i);

                const card = document.getElementById("question-" + i);
                card.classList.add("unanswered");
            } else {
                document.getElementById("question-" + i)
                    .classList.remove("unanswered");
            }
        }

        if (unanswered.length > 0) {
            alert(
                "Please answer all questions before submitting.\n\n" +
                "Unanswered questions: " + unanswered.join(", ")
            );

            document.getElementById("question-" + unanswered[0])
                .scrollIntoView({ behavior: "smooth", block: "center" });

            return;
        }

        let score = 0;
        let mcqScore = 0;
        let identificationScore = 0;
        let trueFalseScore = 0;
        let reviewHTML = "";

        // Check Multiple Choice
        mcqQuestions.forEach(function (question, index) {
            const number = index + 1;
            const userAnswer = getAnswer(number);
            const correct = userAnswer === question.answer;

            if (correct) {
                score++;
                mcqScore++;
            }

            showFeedback(
                number,
                correct,
                correct ? "Correct!" : "Incorrect. Correct answer: " + question.answer,
                question.explanation
            );

            reviewHTML += createReview(
                number,
                question.q,
                userAnswer,
                question.answer,
                correct,
                question.explanation
            );
        });

        // Check Identification
        identificationQuestions.forEach(function (question, index) {
            const number = index + 21;
            const userAnswer = normalizeAnswer(getAnswer(number));

            const correct = question.answer.some(function (answer) {
                return normalizeAnswer(answer) === userAnswer;
            });

            if (correct) {
                score++;
                identificationScore++;
            }

            showFeedback(
                number,
                correct,
                correct ? "Correct!" : "Incorrect. Correct answer: " + question.answer[0],
                question.explanation
            );

            reviewHTML += createReview(
                number,
                question.q,
                getAnswer(number),
                question.answer[0],
                correct,
                question.explanation
            );
        });

        // Check True or False
        trueFalseQuestions.forEach(function (question, index) {
            const number = index + 31;
            const userAnswer = getAnswer(number);
            const correct = userAnswer === question.answer;

            if (correct) {
                score++;
                trueFalseScore++;
            }

            showFeedback(
                number,
                correct,
                correct ? "Correct!" : "Incorrect. Correct answer: " + question.answer.toUpperCase(),
                question.explanation
            );

            reviewHTML += createReview(
                number,
                question.q,
                userAnswer.toUpperCase(),
                question.answer.toUpperCase(),
                correct,
                question.explanation
            );
        });

        const percentage = Math.round((score / totalQuestions) * 100);
        let remark = "";

        if (percentage >= 90) {
            remark = "Excellent! You have an outstanding understanding of the lesson.";
        } else if (percentage >= 80) {
            remark = "Very Good! You understand most of the lesson concepts.";
        } else if (percentage >= 75) {
            remark = "Passed! Continue reviewing the topics to improve your knowledge.";
        } else {
            remark = "Needs Improvement. Review the lesson and try again.";
        }

        document.getElementById("resultContent").innerHTML = `
            <div class="result-score">
                <strong>${score} / ${totalQuestions}</strong>
                <span>${percentage}% Overall Score</span>
            </div>

            <h3>${remark}</h3>

            <div class="result-summary">
                <div>
                    <strong>${mcqScore}/20</strong>
                    <span>Multiple Choice</span>
                </div>
                <div>
                    <strong>${identificationScore}/10</strong>
                    <span>Identification</span>
                </div>
                <div>
                    <strong>${trueFalseScore}/5</strong>
                    <span>True or False</span>
                </div>
            </div>

            <h3>Answer Review and Explanations</h3>
            <p>Review your answers below to understand the correct concepts.</p>
            ${reviewHTML}

            <button type="button" id="tryAgainBtn">Try Again</button>
        `;

        submitted = true;

        document.querySelectorAll("#assessmentForm input").forEach(function (input) {
            input.disabled = true;
        });

        document.getElementById("submitBtn").disabled = true;
        document.getElementById("submitBtn").style.opacity = ".5";

        document.getElementById("results").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        document.getElementById("tryAgainBtn").addEventListener("click", resetAssessment);
    });

    function showFeedback(number, correct, message, explanation) {
        const feedback = document.getElementById("feedback-" + number);

        feedback.className = correct
            ? "feedback correct"
            : "feedback incorrect";

        feedback.innerHTML = `
            <strong>${message}</strong><br>
            Explanation: ${explanation}
        `;
    }

    function createReview(number, question, userAnswer, correctAnswer, correct, explanation) {
        return `
            <div class="answer-review ${correct ? "correct-review" : "wrong-review"}">
                <strong>Question ${number}: ${correct ? "Correct" : "Incorrect"}</strong>
                <p>${question}</p>
                <p><b>Your Answer:</b> ${userAnswer || "No answer"}</p>
                <p><b>Correct Answer:</b> ${correctAnswer}</p>
                <p><b>Explanation:</b> ${explanation}</p>
            </div>
        `;
    }

    // Reset assessment
    function resetAssessment() {
        submitted = false;
        form.reset();

        document.querySelectorAll(".question-card").forEach(function (card) {
            card.classList.remove("unanswered");
        });

        document.querySelectorAll(".feedback").forEach(function (feedback) {
            feedback.className = "feedback";
            feedback.innerHTML = "";
        });

        document.querySelectorAll("#assessmentForm input").forEach(function (input) {
            input.disabled = false;
        });

        document.getElementById("submitBtn").disabled = false;
        document.getElementById("submitBtn").style.opacity = "1";

        document.getElementById("resultContent").innerHTML =
            "<p>Your score and answer explanations will appear here after you submit your assessment.</p>";

        updateProgress();

        document.getElementById("overview").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    document.getElementById("resetBtn").addEventListener("click", function () {
        if (confirm("Are you sure you want to reset all your answers?")) {
            resetAssessment();
        }
    });

    // Back to top
    const backToTop = document.getElementById("backToTop");

    window.addEventListener("scroll", function () {
        backToTop.style.display = window.scrollY > 400 ? "block" : "none";
    });

    backToTop.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Initial progress
    updateProgress();

});