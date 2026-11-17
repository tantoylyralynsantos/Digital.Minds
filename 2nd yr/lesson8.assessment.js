
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("lesson8Assessment");
    const results = document.getElementById("results");
    const resetButton = document.getElementById("resetAssessment");
    const tryAgainButton = document.getElementById("tryAgain");
    const explanationList = document.getElementById("explanationList");

    const progressBar = document.getElementById("progressBar");
    const progressText = document.getElementById("progressText");

    if (!form || !results) return;

    const totalQuestions = 20;

    const answerKey = {
        q1: "b",
        q2: "c",
        q3: "a",
        q4: "d",
        q5: "b",
        q6: "c",
        q7: "b",
        q8: "a",
        q9: "d",
        q10: "b",
        q11: "a",
        q12: "c",
        q13: "b",
        q14: "d",
        q15: "a",
        q16: "c",
        q17: "b",
        q18: "d",
        q19: "c",
        q20: "a"
    };

    const explanations = {
        q1: "Virtualization is the process of creating virtual versions of computing resources, such as servers, storage, networks, and operating systems.",
        q2: "Virtualization allows one physical machine to host multiple independent virtual environments, improving resource utilization and flexibility.",
        q3: "A Virtual Machine is a software-based computer that behaves like a physical computer and can run its own operating system and applications.",
        q4: "A hypervisor is the software or firmware layer responsible for creating, running, and managing virtual machines.",
        q5: "A hypervisor is also called a Virtual Machine Monitor or VMM because it manages the execution of virtual machines.",
        q6: "A Type 1 hypervisor, also known as a bare-metal hypervisor, runs directly on the physical hardware.",
        q7: "A Type 2 hypervisor runs as an application on top of an existing host operating system.",
        q8: "Oracle VirtualBox is an example of a Type 2 hypervisor commonly installed on an existing operating system.",
        q9: "Virtualization improves hardware utilization by allowing multiple workloads to share the resources of one physical machine.",
        q10: "Virtual CPU allocation assigns processing capacity to virtual machines so they can execute their operating systems and applications.",
        q11: "Storage virtualization combines multiple physical storage devices into a logical storage resource that can be managed more efficiently.",
        q12: "Network virtualization creates logical network resources that can operate independently of the underlying physical network hardware.",
        q13: "Containers typically share the host operating system kernel, while traditional virtual machines usually run separate guest operating systems.",
        q14: "Docker is a widely used platform for creating, managing, and running containerized applications.",
        q15: "A snapshot records the state of a virtual machine at a particular point in time and can help restore it to that state.",
        q16: "Live migration moves a running virtual machine from one physical host to another while aiming to minimize service interruption.",
        q17: "VDI stands for Virtual Desktop Infrastructure. It hosts desktop environments on centralized servers for remote access.",
        q18: "Virtualization supports disaster recovery through backups, replication, and the restoration of virtual machines on available infrastructure.",
        q19: "Security practices include applying updates, controlling user access, monitoring activity, and protecting virtual machine resources.",
        q20: "Virtualization allows cloud providers to divide and allocate physical computing resources among multiple customers and services efficiently."
    };

    function updateProgress() {

        let answered = 0;

        for (let i = 1; i <= totalQuestions; i++) {

            const selected = form.querySelector(
                'input[name="q' + i + '"]:checked'
            );

            if (selected) {
                answered++;
            }
        }

        const percentage = (answered / totalQuestions) * 100;

        progressBar.style.width = percentage + "%";

        progressText.textContent =
            answered + " of " + totalQuestions + " answered";
    }

    form.addEventListener("change", updateProgress);

    function getGradeMessage(percentage) {

        if (percentage >= 90) {
            return {
                title: "Outstanding Performance!",
                message: "Excellent work! You have demonstrated a strong understanding of virtualization and virtual machines."
            };
        }

        if (percentage >= 80) {
            return {
                title: "Very Good!",
                message: "Great job! You understand most of the important virtualization concepts."
            };
        }

        if (percentage >= 70) {
            return {
                title: "Good Work!",
                message: "You have a good foundation. Review the topics you missed to improve further."
            };
        }

        if (percentage >= 60) {
            return {
                title: "Keep Practicing!",
                message: "You are making progress. Review Lesson 8 and try the assessment again."
            };
        }

        return {
            title: "Needs Improvement",
            message: "Continue studying the lesson and review the explanations before trying again."
        };
    }

    function submitAssessment(event) {

        event.preventDefault();

        let score = 0;
        let correctCount = 0;
        let incorrectCount = 0;

        const unanswered = [];

        for (let i = 1; i <= totalQuestions; i++) {

            const questionName = "q" + i;

            const selected = form.querySelector(
                'input[name="' + questionName + '"]:checked'
            );

            if (!selected) {
                unanswered.push(i);
            }
        }

        if (unanswered.length > 0) {

            alert(
                "Please answer all questions before submitting.\n\n" +
                "Unanswered questions: " + unanswered.join(", ")
            );

            const firstUnanswered = form.querySelector(
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

        explanationList.innerHTML = "";

        for (let i = 1; i <= totalQuestions; i++) {

            const questionName = "q" + i;

            const selected = form.querySelector(
                'input[name="' + questionName + '"]:checked'
            );

            const correctAnswer = answerKey[questionName];
            const userAnswer = selected.value;

            const questionCard = selected.closest(".question-card");

            const questionText =
                questionCard.querySelector("h3").textContent;

            const correctLabel = questionCard.querySelector(
                'input[value="' + correctAnswer + '"]'
            ).parentElement.textContent.trim();

            const userLabel =
                selected.parentElement.textContent.trim();

            const isCorrect = userAnswer === correctAnswer;

            if (isCorrect) {
                score++;
                correctCount++;
            } else {
                incorrectCount++;
            }

            const explanationItem = document.createElement("div");

            explanationItem.className = isCorrect
                ? "explanation-item"
                : "explanation-item wrong";

            explanationItem.innerHTML = `
                <h4>Question ${i}: ${questionText}</h4>

                <p class="${isCorrect ? "answer-correct" : "answer-wrong"}">
                    ${isCorrect ? "✓ Correct Answer" : "✗ Incorrect Answer"}
                </p>

                <p>
                    <strong>Your Answer:</strong>
                    ${userLabel}
                </p>

                <p>
                    <strong>Correct Answer:</strong>
                    ${correctLabel}
                </p>

                <p>
                    <strong>Explanation:</strong>
                    ${explanations[questionName]}
                </p>
            `;

            explanationList.appendChild(explanationItem);
        }

        const percentage = Math.round(
            (score / totalQuestions) * 100
        );

        const grade = getGradeMessage(percentage);

        document.getElementById("scoreNumber").textContent =
            score + "/" + totalQuestions;

        document.getElementById("scorePercentage").textContent =
            percentage + "%";

        document.getElementById("resultMessage").textContent =
            grade.title;

        document.getElementById("resultDetails").textContent =
            grade.message;

        document.getElementById("correctCount").textContent =
            correctCount;

        document.getElementById("incorrectCount").textContent =
            incorrectCount;

        results.hidden = false;

        results.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    form.addEventListener("submit", submitAssessment);

    function resetAssessment() {

        form.reset();

        results.hidden = true;

        explanationList.innerHTML = "";

        progressBar.style.width = "0%";

        progressText.textContent =
            "0 of " + totalQuestions + " answered";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    if (resetButton) {

        resetButton.addEventListener("click", function () {
            setTimeout(resetAssessment, 0);
        });

    }

    if (tryAgainButton) {
        tryAgainButton.addEventListener("click", resetAssessment);
    }

    /* BACK TO TOP */

    const backToTop = document.getElementById("backToTop");

    if (backToTop) {

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

    }

    updateProgress();

});
