
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("assessmentForm");
    const results = document.getElementById("results");
    const resetButton = document.getElementById("resetAssessment");
    const tryAgainButton = document.getElementById("tryAgain");
    const explanationList = document.getElementById("explanationList");

    if (!form || !results) return;

    const totalQuestions = 35;

    // =====================================
    // ANSWER KEY
    // =====================================

    const multipleChoiceAnswers = {
        mc1: "a",
        mc2: "b",
        mc3: "c",
        mc4: "a",
        mc5: "b",
        mc6: "c",
        mc7: "b",
        mc8: "b",
        mc9: "c",
        mc10: "b",
        mc11: "c",
        mc12: "b",
        mc13: "a",
        mc14: "c",
        mc15: "a",
        mc16: "b",
        mc17: "b",
        mc18: "c",
        mc19: "a",
        mc20: "c"
    };

    const identificationAnswers = {
        id21: ["internet"],
        id22: ["arpanet"],
        id23: [
            "national science foundation",
            "nsf",
            "national science foundation (nsf)"
        ],
        id24: ["tcp/ip", "tcp ip", "transmission control protocol/internet protocol"],
        id25: ["tim berners-lee", "tim berners lee"],
        id26: ["html", "hypertext markup language"],
        id27: ["ftp", "file transfer protocol"],
        id28: ["ray tomlinson"],
        id29: ["client"],
        id30: ["mosaic", "mosaic browser"]
    };

    const trueFalseAnswers = {
        tf31: "false",
        tf32: "true",
        tf33: "true",
        tf34: "true",
        tf35: "false"
    };

    // =====================================
    // EXPLANATIONS
    // =====================================

    const explanations = [
        ["1. ARPANET", "Advanced Research Projects Agency Network.", "ARPANET was an early packet-switching network developed through ARPA."],
        ["2. Sputnik", "The launch of Sputnik.", "The Soviet satellite launch in 1957 helped motivate the United States to establish ARPA in 1958."],
        ["3. Purpose of ARPANET", "To connect research computers and share resources.", "ARPANET connected research institutions and allowed computers to communicate."],
        ["4. NSF", "National Science Foundation.", "The NSF supported scientific research and helped develop academic networking."],
        ["5. NSFNET", "NSFNET.", "NSFNET connected academic and research institutions and helped expand Internet access."],
        ["6. Internet", "A global network of interconnected computer networks.", "The Internet links networks around the world using common communication protocols."],
        ["7. Internet2", "Research and education.", "Internet2 supports advanced networking for educational and research institutions."],
        ["8. Packet switching", "Packet switching.", "Data is divided into smaller packets that travel through a network."],
        ["9. Vinton Cerf", "Vinton Cerf.", "Vinton Cerf, together with Bob Kahn, helped develop TCP/IP and is widely known as a Father of the Internet."],
        ["10. TCP/IP", "To support communication and data transmission between networks.", "TCP/IP provides the protocols that allow devices and networks to communicate."],
        ["11. World Wide Web", "Tim Berners-Lee.", "Tim Berners-Lee invented the World Wide Web."],
        ["12. CERN", "CERN.", "The World Wide Web was developed at CERN, a European research organization."],
        ["13. HTML", "Hypertext Markup Language.", "HTML is the standard markup language used to structure web pages."],
        ["14. E-mail", "E-mail.", "Electronic mail is used to send and receive digital messages."],
        ["15. Ray Tomlinson", "Ray Tomlinson.", "Ray Tomlinson developed an early network email system in 1971."],
        ["16. FTP", "To transfer files between computers.", "File Transfer Protocol is used to transfer files over a network."],
        ["17. Client", "It requests information or services.", "A client is a device or program that requests resources from a server."],
        ["18. Server", "To provide data, resources, or services to clients.", "A server responds to requests from clients and provides requested resources."],
        ["19. Mosaic", "Mosaic.", "Mosaic was an influential early graphical web browser developed at NCSA."],
        ["20. Web browser", "To access and display web content.", "A web browser retrieves and displays web pages and other online content."],
        ["21. Internet", "Internet.", "The Internet is the worldwide network connecting many computer networks."],
        ["22. ARPANET", "ARPANET.", "ARPANET was developed by the Advanced Research Projects Agency."],
        ["23. National Science Foundation", "National Science Foundation (NSF).", "The NSF supported the development and expansion of NSFNET."],
        ["24. TCP/IP", "TCP/IP.", "TCP/IP is the main protocol suite used for Internet communication."],
        ["25. Tim Berners-Lee", "Tim Berners-Lee.", "He created the World Wide Web while working at CERN."],
        ["26. HTML", "HTML.", "HTML structures the content of web pages."],
        ["27. FTP", "FTP.", "FTP stands for File Transfer Protocol."],
        ["28. Ray Tomlinson", "Ray Tomlinson.", "He developed an early network email program in 1971."],
        ["29. Client", "Client.", "A client requests information or services from a server."],
        ["30. Mosaic", "Mosaic.", "Mosaic was an early graphical browser developed at the National Center for Supercomputing Applications."],
        ["31. Internet and WWW", "False.", "The Internet is the global network infrastructure, while the Web is a service that operates on it."],
        ["32. ARPANET", "True.", "ARPANET was a research network supported by the U.S. Department of Defense through ARPA."],
        ["33. Tim Berners-Lee", "True.", "Tim Berners-Lee developed the World Wide Web at CERN."],
        ["34. FTP", "True.", "FTP is designed for transferring files between computers."],
        ["35. Client-server roles", "False.", "The server provides resources or services, while the client requests them."]
    ];

    // =====================================
    // PROGRESS BAR
    // =====================================

    const progressContainer = document.createElement("div");
    progressContainer.className = "assessment-progress";

    progressContainer.innerHTML = `
        <div class="progress-top">
            <span>Assessment Progress</span>
            <span id="progressCount">0 / 35 Answered</span>
        </div>
        <div class="progress-track">
            <div class="progress-fill" id="progressFill"></div>
        </div>
    `;

    form.parentNode.insertBefore(progressContainer, form);

    const progressCount = document.getElementById("progressCount");
    const progressFill = document.getElementById("progressFill");

    function updateProgress() {
        const answeredNames = new Set();

        form.querySelectorAll("input").forEach(function (input) {
            if (input.type === "radio" && input.checked) {
                answeredNames.add(input.name);
            }

            if (input.type === "text" && input.value.trim() !== "") {
                answeredNames.add(input.name);
            }
        });

        const answered = answeredNames.size;
        const percentage = (answered / totalQuestions) * 100;

        progressCount.textContent =
            answered + " / " + totalQuestions + " Answered";

        progressFill.style.width = percentage + "%";
    }

    form.addEventListener("change", updateProgress);
    form.addEventListener("input", updateProgress);

    // =====================================
    // IDENTIFICATION NORMALIZATION
    // =====================================

    function normalizeAnswer(answer) {
        return answer
            .toLowerCase()
            .trim()
            .replace(/[.,!?]/g, "")
            .replace(/\s+/g, " ");
    }

    // =====================================
    // FIND UNANSWERED QUESTIONS
    // =====================================

    function findUnanswered() {
        const unanswered = [];

        for (let i = 1; i <= 20; i++) {
            if (!form.querySelector(`input[name="mc${i}"]:checked`)) {
                unanswered.push(i);
            }
        }

        for (let i = 21; i <= 30; i++) {
            const input = form.querySelector(`input[name="id${i}"]`);

            if (!input || !input.value.trim()) {
                unanswered.push(i);
            }
        }

        for (let i = 31; i <= 35; i++) {
            if (!form.querySelector(`input[name="tf${i}"]:checked`)) {
                unanswered.push(i);
            }
        }

        return unanswered;
    }

    // =====================================
    // SCORE ASSESSMENT
    // =====================================

    function calculateScore() {
        let mcScore = 0;
        let idScore = 0;
        let tfScore = 0;

        const studentAnswers = [];

        // Multiple Choice
        for (let i = 1; i <= 20; i++) {
            const name = "mc" + i;
            const selected = form.querySelector(
                `input[name="${name}"]:checked`
            );

            const correct = multipleChoiceAnswers[name];
            const isCorrect = selected && selected.value === correct;

            if (isCorrect) mcScore++;

            studentAnswers.push({
                number: i,
                answer: correct.toUpperCase(),
                correct: isCorrect
            });
        }

        // Identification
        for (let i = 21; i <= 30; i++) {
            const name = "id" + i;
            const input = form.querySelector(`input[name="${name}"]`);
            const studentAnswer = normalizeAnswer(input.value);

            const acceptedAnswers = identificationAnswers[name].map(
                normalizeAnswer
            );

            const isCorrect = acceptedAnswers.includes(studentAnswer);

            if (isCorrect) idScore++;

            studentAnswers.push({
                number: i,
                answer: identificationAnswers[name][0],
                correct: isCorrect
            });
        }

        // True or False
        for (let i = 31; i <= 35; i++) {
            const name = "tf" + i;
            const selected = form.querySelector(
                `input[name="${name}"]:checked`
            );

            const correct = trueFalseAnswers[name];
            const isCorrect = selected && selected.value === correct;

            if (isCorrect) tfScore++;

            studentAnswers.push({
                number: i,
                answer: correct.toUpperCase(),
                correct: isCorrect
            });
        }

        return {
            mcScore,
            idScore,
            tfScore,
            total: mcScore + idScore + tfScore,
            studentAnswers
        };
    }

    // =====================================
    // DISPLAY EXPLANATIONS
    // =====================================

    function displayExplanations(studentAnswers) {
        explanationList.innerHTML = "";

        explanations.forEach(function (item, index) {
            const answer = studentAnswers[index];

            const explanationItem = document.createElement("div");
            explanationItem.className = "explanation-item";

            const title = document.createElement("strong");
            title.textContent = item[0];

            const correctAnswer = document.createElement("span");
            correctAnswer.className = "correct-answer";
            correctAnswer.textContent = "Correct Answer: " + item[1];

            const explanationText = document.createElement("span");
            explanationText.className = "explanation-text";
            explanationText.textContent = item[2];

            const status = document.createElement("span");
            status.style.display = "block";
            status.style.marginTop = "5px";
            status.style.fontWeight = "700";
            status.style.color = answer.correct ? "#16845b" : "#d97706";
            status.textContent = answer.correct
                ? "✓ Your answer is correct"
                : "✗ Review this question";

            explanationItem.appendChild(title);
            explanationItem.appendChild(correctAnswer);
            explanationItem.appendChild(explanationText);
            explanationItem.appendChild(status);

            explanationList.appendChild(explanationItem);
        });
    }

    // =====================================
    // SUBMIT
    // =====================================

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const unanswered = findUnanswered();

        if (unanswered.length > 0) {
            alert(
                "You still have " + unanswered.length +
                " unanswered question(s). Please complete all 35 questions."
            );

            const firstNumber = unanswered[0];
            let target;

            if (firstNumber <= 20) {
                target = form.querySelector(
                    `input[name="mc${firstNumber}"]`
                );
            } else if (firstNumber <= 30) {
                target = form.querySelector(
                    `input[name="id${firstNumber}"]`
                );
            } else {
                target = form.querySelector(
                    `input[name="tf${firstNumber}"]`
                );
            }

            if (target) {
                target.closest(".assessment-question").scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            }

            return;
        }

        const score = calculateScore();
        const percentage = Math.round(
            (score.total / totalQuestions) * 100
        );

        document.getElementById("scoreNumber").textContent =
            score.total + "/35";

        document.getElementById("scorePercentage").textContent =
            percentage + "%";

        document.getElementById("mcScore").textContent =
            score.mcScore + "/20";

        document.getElementById("idScore").textContent =
            score.idScore + "/10";

        document.getElementById("tfScore").textContent =
            score.tfScore + "/5";

        let message;

        if (percentage >= 90) {
            message = "Excellent Work!";
        } else if (percentage >= 80) {
            message = "Very Good!";
        } else if (percentage >= 75) {
            message = "Good Job!";
        } else {
            message = "Keep Practicing!";
        }

        document.getElementById("resultMessage").textContent = message;

        document.getElementById("resultDetails").textContent =
            "You answered " + score.total +
            " out of 35 questions correctly. Your final score is " +
            percentage + "%.";

        displayExplanations(score.studentAnswers);

        results.hidden = false;

        results.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });

    // =====================================
    // RESET ASSESSMENT
    // =====================================

    function resetAssessment() {
        const confirmed = confirm(
            "Are you sure you want to reset all your answers?"
        );

        if (!confirmed) return;

        form.reset();

        results.hidden = true;
        explanationList.innerHTML = "";

        updateProgress();

        form.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    resetButton.addEventListener("click", resetAssessment);
    tryAgainButton.addEventListener("click", resetAssessment);

    // =====================================
    // SIDEBAR SMOOTH SCROLL
    // =====================================

    document.querySelectorAll('.sidebar nav a[href^="#"]').forEach(
        function (link) {
            link.addEventListener("click", function (event) {
                const target = document.querySelector(
                    link.getAttribute("href")
                );

                if (target) {
                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            });
        }
    );

    // =====================================
    // BACK TO TOP
    // =====================================

    const backToTop = document.getElementById("backToTop");

    if (backToTop) {
        window.addEventListener("scroll", function () {
            backToTop.style.display =
                window.scrollY > 350 ? "flex" : "none";
        });

        backToTop.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    updateProgress();
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("assessmentForm");
    const results = document.getElementById("results");
    const resetButton = document.getElementById("resetAssessment");
    const tryAgainButton = document.getElementById("tryAgain");
    const explanationList = document.getElementById("explanationList");

    if (!form || !results) return;

    const totalQuestions = 35;

    const multipleChoiceAnswers = {
        mc1:"a", mc2:"b", mc3:"c", mc4:"a", mc5:"b",
        mc6:"c", mc7:"b", mc8:"b", mc9:"c", mc10:"b",
        mc11:"c", mc12:"b", mc13:"a", mc14:"c", mc15:"a",
        mc16:"b", mc17:"b", mc18:"c", mc19:"a", mc20:"c"
    };

    const identificationAnswers = {
        id21:["internet"],
        id22:["arpanet"],
        id23:["national science foundation","nsf","national science foundation (nsf)"],
        id24:["tcp/ip","tcp ip","transmission control protocol/internet protocol"],
        id25:["tim berners-lee","tim berners lee"],
        id26:["html","hypertext markup language"],
        id27:["ftp","file transfer protocol"],
        id28:["ray tomlinson"],
        id29:["client"],
        id30:["mosaic","mosaic browser"]
    };

    const trueFalseAnswers = {
        tf31:"false", tf32:"true", tf33:"true",
        tf34:"true", tf35:"false"
    };

    const explanations = [
        ["1. ARPANET","Advanced Research Projects Agency Network.","ARPANET was an early packet-switching network developed through ARPA."],
        ["2. Sputnik","The launch of Sputnik.","The Soviet satellite launch in 1957 helped motivate the United States to establish ARPA in 1958."],
        ["3. Purpose of ARPANET","To connect research computers and share resources.","ARPANET connected research institutions and allowed computers to communicate."],
        ["4. NSF","National Science Foundation.","The NSF supported scientific research and helped develop academic networking."],
        ["5. NSFNET","NSFNET.","NSFNET connected academic and research institutions and helped expand Internet access."],
        ["6. Internet","A global network of interconnected computer networks.","The Internet links networks around the world using common communication protocols."],
        ["7. Internet2","Research and education.","Internet2 supports advanced networking for educational and research institutions."],
        ["8. Packet switching","Packet switching.","Data is divided into smaller packets that travel through a network."],
        ["9. Vinton Cerf","Vinton Cerf.","Vinton Cerf, together with Bob Kahn, helped develop TCP/IP."],
        ["10. TCP/IP","To support communication and data transmission between networks.","TCP/IP provides the protocols that allow devices and networks to communicate."],
        ["11. World Wide Web","Tim Berners-Lee.","Tim Berners-Lee invented the World Wide Web."],
        ["12. CERN","CERN.","The World Wide Web was developed at CERN."],
        ["13. HTML","Hypertext Markup Language.","HTML is the standard markup language used to structure web pages."],
        ["14. E-mail","E-mail.","Electronic mail is used to send and receive digital messages."],
        ["15. Ray Tomlinson","Ray Tomlinson.","Ray Tomlinson developed an early network email system in 1971."],
        ["16. FTP","To transfer files between computers.","FTP is used to transfer files over a network."],
        ["17. Client","It requests information or services.","A client requests resources from a server."],
        ["18. Server","To provide data, resources, or services to clients.","A server responds to requests from clients."],
        ["19. Mosaic","Mosaic.","Mosaic was an influential early graphical web browser."],
        ["20. Web browser","To access and display web content.","A web browser retrieves and displays web pages."],
        ["21. Internet","Internet.","The Internet is the worldwide network connecting many computer networks."],
        ["22. ARPANET","ARPANET.","ARPANET was developed by the Advanced Research Projects Agency."],
        ["23. National Science Foundation","National Science Foundation (NSF).","The NSF supported the development and expansion of NSFNET."],
        ["24. TCP/IP","TCP/IP.","TCP/IP is the main protocol suite used for Internet communication."],
        ["25. Tim Berners-Lee","Tim Berners-Lee.","He created the World Wide Web while working at CERN."],
        ["26. HTML","HTML.","HTML structures the content of web pages."],
        ["27. FTP","FTP.","FTP stands for File Transfer Protocol."],
        ["28. Ray Tomlinson","Ray Tomlinson.","He developed an early network email program in 1971."],
        ["29. Client","Client.","A client requests information or services from a server."],
        ["30. Mosaic","Mosaic.","Mosaic was an early graphical browser developed at NCSA."],
        ["31. Internet and WWW","False.","The Internet is the global network infrastructure, while the Web is a service that operates on it."],
        ["32. ARPANET","True.","ARPANET was a research network supported through ARPA."],
        ["33. Tim Berners-Lee","True.","Tim Berners-Lee developed the World Wide Web at CERN."],
        ["34. FTP","True.","FTP is designed for transferring files between computers."],
        ["35. Client-server roles","False.","The server provides resources or services, while the client requests them."]
    ];

    // PROGRESS BAR
    let progressContainer = document.querySelector(".assessment-progress");

    if (!progressContainer) {
        progressContainer = document.createElement("div");
        progressContainer.className = "assessment-progress";
        progressContainer.innerHTML = `
            <div class="progress-top">
                <span>Assessment Progress</span>
                <span id="progressCount">0 / 35 Answered</span>
            </div>
            <div class="progress-track">
                <div class="progress-fill" id="progressFill"></div>
            </div>
        `;
        form.parentNode.insertBefore(progressContainer, form);
    }

    const progressCount = document.getElementById("progressCount");
    const progressFill = document.getElementById("progressFill");

    function updateProgress() {
        const answeredNames = new Set();

        form.querySelectorAll("input").forEach(input => {
            if (input.type === "radio" && input.checked) {
                answeredNames.add(input.name);
            }

            if (input.type === "text" && input.value.trim() !== "") {
                answeredNames.add(input.name);
            }
        });

        const answered = answeredNames.size;

        if (progressCount) {
            progressCount.textContent = `${answered} / ${totalQuestions} Answered`;
        }

        if (progressFill) {
            progressFill.style.width = `${(answered / totalQuestions) * 100}%`;
        }
    }

    form.addEventListener("change", updateProgress);
    form.addEventListener("input", updateProgress);

    function normalizeAnswer(answer) {
        return answer.toLowerCase()
            .trim()
            .replace(/[.,!?]/g, "")
            .replace(/\s+/g, " ");
    }

    function findUnanswered() {
        const unanswered = [];

        for (let i = 1; i <= 20; i++) {
            if (!form.querySelector(`input[name="mc${i}"]:checked`)) {
                unanswered.push(i);
            }
        }

        for (let i = 21; i <= 30; i++) {
            const input = form.querySelector(`input[name="id${i}"]`);
            if (!input || !input.value.trim()) unanswered.push(i);
        }

        for (let i = 31; i <= 35; i++) {
            if (!form.querySelector(`input[name="tf${i}"]:checked`)) {
                unanswered.push(i);
            }
        }

        return unanswered;
    }

    function calculateScore() {
        let mcScore = 0;
        let idScore = 0;
        let tfScore = 0;
        const studentAnswers = [];

        for (let i = 1; i <= 20; i++) {
            const name = "mc" + i;
            const selected = form.querySelector(`input[name="${name}"]:checked`);
            const correct = multipleChoiceAnswers[name];
            const isCorrect = !!selected && selected.value === correct;

            if (isCorrect) mcScore++;

            studentAnswers.push({
                number: i,
                answer: correct.toUpperCase(),
                correct: isCorrect
            });
        }

        for (let i = 21; i <= 30; i++) {
            const name = "id" + i;
            const input = form.querySelector(`input[name="${name}"]`);
            const studentAnswer = normalizeAnswer(input.value);
            const accepted = identificationAnswers[name].map(normalizeAnswer);
            const isCorrect = accepted.includes(studentAnswer);

            if (isCorrect) idScore++;

            studentAnswers.push({
                number: i,
                answer: identificationAnswers[name][0],
                correct: isCorrect
            });
        }

        for (let i = 31; i <= 35; i++) {
            const name = "tf" + i;
            const selected = form.querySelector(`input[name="${name}"]:checked`);
            const correct = trueFalseAnswers[name];
            const isCorrect = !!selected && selected.value === correct;

            if (isCorrect) tfScore++;

            studentAnswers.push({
                number: i,
                answer: correct.toUpperCase(),
                correct: isCorrect
            });
        }

        return {
            mcScore,
            idScore,
            tfScore,
            total: mcScore + idScore + tfScore,
            studentAnswers
        };
    }

    function displayExplanations(studentAnswers) {
        if (!explanationList) return;

        explanationList.innerHTML = "";

        explanations.forEach((item, index) => {
            const answer = studentAnswers[index];
            const explanationItem = document.createElement("div");
            explanationItem.className = "explanation-item";

            const title = document.createElement("strong");
            title.textContent = item[0];

            const correctAnswer = document.createElement("span");
            correctAnswer.className = "correct-answer";
            correctAnswer.textContent = "Correct Answer: " + item[1];

            const explanationText = document.createElement("span");
            explanationText.className = "explanation-text";
            explanationText.textContent = item[2];

            const status = document.createElement("span");
            status.className = answer.correct ? "answer-status correct" : "answer-status incorrect";
            status.textContent = answer.correct
                ? "✓ Your answer is correct"
                : "✗ Review this question";

            explanationItem.append(title, correctAnswer, explanationText, status);
            explanationList.appendChild(explanationItem);
        });
    }

    function showResult(score) {
        const percentage = Math.round((score.total / totalQuestions) * 100);
        const incorrect = totalQuestions - score.total;

        document.getElementById("scoreNumber").textContent =
            `${score.total}/${totalQuestions}`;

        document.getElementById("scorePercentage").textContent =
            `${percentage}%`;

        document.getElementById("mcScore").textContent =
            `${score.mcScore}/20`;

        document.getElementById("idScore").textContent =
            `${score.idScore}/10`;

        document.getElementById("tfScore").textContent =
            `${score.tfScore}/5`;

        let message;
        let status;

        if (percentage >= 90) {
            message = "Outstanding Performance!";
            status = "Excellent";
        } else if (percentage >= 80) {
            message = "Very Good Work!";
            status = "Very Good";
        } else if (percentage >= 75) {
            message = "Good Job! Keep Improving!";
            status = "Passed";
        } else {
            message = "Keep Practicing!";
            status = "Needs Improvement";
        }

        document.getElementById("resultMessage").textContent = message;

        document.getElementById("resultDetails").textContent =
            `${status} | You answered ${score.total} correctly and ${incorrect} incorrectly out of 35 questions. Your final score is ${percentage}%.`;

        displayExplanations(score.studentAnswers);

        results.hidden = false;

        results.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    // SUBMIT
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const unanswered = findUnanswered();

        if (unanswered.length > 0) {
            alert(
                `You still have ${unanswered.length} unanswered question(s). Please complete all 35 questions.`
            );

            const firstNumber = unanswered[0];
            let target;

            if (firstNumber <= 20) {
                target = form.querySelector(`input[name="mc${firstNumber}"]`);
            } else if (firstNumber <= 30) {
                target = form.querySelector(`input[name="id${firstNumber}"]`);
            } else {
                target = form.querySelector(`input[name="tf${firstNumber}"]`);
            }

            if (target) {
                target.closest(".assessment-question")?.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            }

            return;
        }

        const score = calculateScore();
        showResult(score);
    });

    // RESET AND RETAKE
    function resetAssessment() {
        const confirmed = confirm("Are you sure you want to reset all your answers?");

        if (!confirmed) return;

        form.reset();
        results.hidden = true;

        if (explanationList) {
            explanationList.innerHTML = "";
        }

        updateProgress();

        form.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    if (resetButton) {
        resetButton.addEventListener("click", resetAssessment);
    }

    if (tryAgainButton) {
        tryAgainButton.addEventListener("click", resetAssessment);
    }

    // SIDEBAR SMOOTH SCROLL
    document.querySelectorAll('.sidebar nav a[href^="#"]').forEach(link => {
        link.addEventListener("click", function (event) {
            const target = document.querySelector(link.getAttribute("href"));

            if (target) {
                event.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // BACK TO TOP
    const backToTop = document.getElementById("backToTop");

    if (backToTop) {
        window.addEventListener("scroll", function () {
            backToTop.style.display = window.scrollY > 350 ? "flex" : "none";
        });

        backToTop.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    updateProgress();
});
