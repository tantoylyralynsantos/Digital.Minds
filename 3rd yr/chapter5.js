
document.addEventListener("DOMContentLoaded", function () {

    // CHAPTER 5 QUIZ

    const quizForm = document.getElementById("chapter5Quiz");
    const quizResult = document.getElementById("chapter5QuizResult");
    const explanations = document.getElementById("chapter5Explanations");

    const correctAnswers = {
        q1: "b",
        q2: "c",
        q3: "a",
        q4: "b",
        q5: "c",
        q6: "a",
        q7: "b",
        q8: "b",
        q9: "c",
        q10: "a"
    };

    const answerExplanations = [
        "Responsive Web Design allows websites to adjust to different screen sizes and devices.",
        "The viewport meta tag helps the browser display a webpage according to the device's screen width.",
        "CSS media queries apply styles depending on screen conditions such as width.",
        "max-width: 100% prevents an image from becoming wider than its container.",
        "Mobile-first design starts with smaller screens before adding layouts for larger screens.",
        "Flexbox arranges and aligns elements in a row or column.",
        "CSS Grid organizes content using rows and columns.",
        "Breakpoints are screen-width points where the website layout changes.",
        "The vw unit represents a percentage of the viewport width.",
        "Testing helps developers check the website's layout and usability on different devices."
    ];

    if (quizForm) {

        quizForm.addEventListener("submit", function (event) {
            event.preventDefault();

            let score = 0;
            let unanswered = [];

            // Remove previous highlighting
            quizForm.querySelectorAll("label").forEach(label => {
                label.classList.remove("correct-answer", "wrong-answer");
            });

            for (let i = 1; i <= 10; i++) {

                const selected = quizForm.querySelector(
                    `input[name="q${i}"]:checked`
                );

                if (!selected) {
                    unanswered.push(i);
                } else if (selected.value === correctAnswers[`q${i}`]) {
                    score++;
                }
            }

            if (unanswered.length > 0) {

                quizResult.className = "quiz-result show needs-improvement";
                quizResult.textContent =
                    "Please answer all questions first. Unanswered: " +
                    unanswered.join(", ");

                explanations.innerHTML = "";
                explanations.classList.remove("show");

                return;
            }

            // Highlight correct and incorrect answers
            for (let i = 1; i <= 10; i++) {

                const selected = quizForm.querySelector(
                    `input[name="q${i}"]:checked`
                );

                const correctInput = quizForm.querySelector(
                    `input[name="q${i}"][value="${correctAnswers[`q${i}`]}"]`
                );

                if (correctInput) {
                    correctInput.closest("label").classList.add("correct-answer");
                }

                if (selected.value !== correctAnswers[`q${i}`]) {
                    selected.closest("label").classList.add("wrong-answer");
                }
            }

            const percentage = score * 10;

            quizResult.className = "quiz-result show";

            if (score >= 7) {
                quizResult.classList.add("success");
                quizResult.textContent =
                    `Excellent work! Your score is ${score}/10 (${percentage}%).`;
            } else {
                quizResult.classList.add("needs-improvement");
                quizResult.textContent =
                    `Your score is ${score}/10 (${percentage}%). Review the chapter and try again.`;
            }

            // Display explanations
            explanations.innerHTML = "<h3>Answer Explanations</h3>";

            for (let i = 1; i <= 10; i++) {

                const selected = quizForm.querySelector(
                    `input[name="q${i}"]:checked`
                );

                const isCorrect =
                    selected.value === correctAnswers[`q${i}`];

                const item = document.createElement("div");
                item.className = "explanation";

                const heading = document.createElement("strong");
                heading.textContent =
                    `Question ${i}: ${isCorrect ? "Correct!" : "Incorrect."}`;

                const paragraph = document.createElement("p");
                paragraph.textContent = answerExplanations[i - 1];

                item.appendChild(heading);
                item.appendChild(paragraph);

                explanations.appendChild(item);
            }

            explanations.classList.add("show");

            quizResult.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        });

        // RESET QUIZ
        quizForm.addEventListener("reset", function () {

            quizResult.className = "quiz-result";
            quizResult.textContent = "";

            explanations.innerHTML = "";
            explanations.classList.remove("show");

            quizForm.querySelectorAll("label").forEach(label => {
                label.classList.remove("correct-answer", "wrong-answer");
            });

        });
    }


    // BACK TO TOP

    const backToTop = document.getElementById("backToTop");

    function checkScroll() {

        if (!backToTop) return;

        if (window.scrollY > 350) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();

    if (backToTop) {
        backToTop.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }


    // SIDEBAR ACTIVE LINK

    const sections = document.querySelectorAll(".content-section[id]");
    const sidebarLinks = document.querySelectorAll(".sidebar nav a");

    function updateActiveLink() {

        let currentSection = "";

        sections.forEach(section => {
            if (section.getBoundingClientRect().top <= 180) {
                currentSection = section.id;
            }
        });

        sidebarLinks.forEach(link => {
            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + currentSection) {
                link.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", updateActiveLink);
    updateActiveLink();

});
/* DOWNLOAD LESSON 5 AS PDF */

document.addEventListener("DOMContentLoaded", function () {

    const downloadPDF = document.getElementById("downloadPDF");

    if (downloadPDF) {

        downloadPDF.addEventListener("click", function () {

            const originalTitle = document.title;

            document.title = "Lesson 5 - Responsive Web Design";

            window.print();

            setTimeout(function () {
                document.title = originalTitle;
            }, 1000);

        });

    }

});
