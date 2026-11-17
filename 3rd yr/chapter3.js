
/* =========================================
   WEBTECH LEARN - CHAPTER 3
   HTML STRUCTURE AND SEMANTIC ELEMENTS
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================
       QUIZ ANSWERS
    ===================================== */

    const chapter3Quiz = document.getElementById("chapter3Quiz");

    const correctAnswers = {
        q1: "a",
        q2: "c",
        q3: "b",
        q4: "d",
        q5: "a"
    };

    /* =====================================
       SUBMIT QUIZ
    ===================================== */

    chapter3Quiz.addEventListener("submit", function (event) {

        event.preventDefault();

        let score = 0;
        let unanswered = [];

        for (let question in correctAnswers) {

            const selected = document.querySelector(
                `input[name="${question}"]:checked`
            );

            if (!selected) {
                unanswered.push(question);
            } 
            else if (selected.value === correctAnswers[question]) {
                score++;
            }
        }

        if (unanswered.length > 0) {
            alert("Please answer all 5 questions before submitting.");
            return;
        }

        const result = document.getElementById("chapter3QuizResult");
        const explanations = document.getElementById("chapter3Explanations");

        /* DISPLAY SCORE */

        result.className = "quiz-result show";

        if (score >= 3) {

            result.classList.add("success");

            result.innerHTML = `
                Your Score: ${score} / 5 <br>
                Great job! You have a good understanding of Semantic HTML.
            `;

        } else {

            result.classList.add("needs-improvement");

            result.innerHTML = `
                Your Score: ${score} / 5 <br>
                Keep practicing! Review the lesson and try again.
            `;

        }

        /* SHOW ANSWER EXPLANATIONS */

        explanations.classList.add("show");

        /* SCROLL TO RESULT */

        result.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    });


    /* =====================================
       RESET QUIZ
    ===================================== */

    const resetButton = document.getElementById("resetChapter3Quiz");

    resetButton.addEventListener("click", function () {

        chapter3Quiz.reset();

        const result = document.getElementById("chapter3QuizResult");
        const explanations = document.getElementById("chapter3Explanations");

        result.innerHTML = "";
        result.className = "quiz-result";

        explanations.classList.remove("show");

        /* REMOVE ANSWER COLORS */

        document.querySelectorAll(".quiz-question label").forEach(function (label) {
            label.classList.remove("correct-answer", "wrong-answer");
        });

    });


    /* =====================================
       BACK TO TOP BUTTON
    ===================================== */

    const backToTop = document.getElementById("backToTop");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }

    });

    backToTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    /* =====================================
       SIDEBAR ACTIVE LINK
    ===================================== */

    const sidebarLinks = document.querySelectorAll(".sidebar nav a");

    sidebarLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            sidebarLinks.forEach(function (item) {
                item.classList.remove("active");
            });

            this.classList.add("active");

        });

    });

});
/* =========================================
   DOWNLOAD LESSON AS PDF
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const downloadPDF = document.getElementById("downloadPDF");

    if (downloadPDF) {

        downloadPDF.addEventListener("click", function () {

            const originalTitle = document.title;

            document.title = "Chapter 2 - Web Browsers, Servers, and HTTP HTTPS";

            window.print();

            setTimeout(function () {
                document.title = originalTitle;
            }, 1000);

        });

    }

});

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================
       DOWNLOAD LESSON AS PDF
    ===================================== */

    const downloadPDF = document.getElementById("downloadPDF");

    if (downloadPDF) {
        downloadPDF.addEventListener("click", function () {
            window.print();
        });
    }


    /* =====================================
       BACK TO TOP
    ===================================== */

    const backToTop = document.getElementById("backToTop");

    if (backToTop) {

        window.addEventListener("scroll", function () {
            if (window.scrollY > 300) {
                backToTop.classList.add("show");
            } else {
                backToTop.classList.remove("show");
            }
        });

        backToTop.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });

    }


    /* =====================================
       ACTIVE SIDEBAR NAVIGATION
    ===================================== */

    const sections = document.querySelectorAll(
        ".lesson-banner[id], .content-section[id]"
    );

    const sidebarLinks = document.querySelectorAll(
        ".sidebar nav a"
    );

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        const currentId = entry.target.id;

                        sidebarLinks.forEach(function (link) {

                            link.classList.remove("active");

                            if (
                                link.getAttribute("href") === "#" + currentId
                            ) {
                                link.classList.add("active");
                            }

                        });

                    }

                });

            },
            {
                rootMargin: "-20% 0px -65% 0px",
                threshold: 0
            }
        );

        sections.forEach(function (section) {
            observer.observe(section);
        });

    }

});

