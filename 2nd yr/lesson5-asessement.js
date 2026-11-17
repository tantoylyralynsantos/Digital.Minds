
document.addEventListener("DOMContentLoaded", () => {

    const multipleChoice = [
        {
            q: "What is the main purpose of user interface (UI) design?",
            options: [
                "To make a website colorful only",
                "To help users interact with a product clearly and efficiently",
                "To add as many animations as possible",
                "To replace all website content with images"
            ],
            answer: 1,
            explanation: "UI design arranges visible and interactive elements so users can understand and use a digital product."
        },
        {
            q: "Which statement best describes User Experience (UX)?",
            options: [
                "The colors used on a webpage",
                "The programming language of a website",
                "The overall experience a person has while using a product",
                "The size of images on a website"
            ],
            answer: 2,
            explanation: "UX covers the overall experience, including usefulness, ease of use, efficiency, and satisfaction."
        },
        {
            q: "Which UI principle means using understandable labels and straightforward instructions?",
            options: ["Clarity", "Complexity", "Decoration", "Animation"],
            answer: 0,
            explanation: "Clarity helps users understand the interface through familiar icons, clear labels, and simple instructions."
        },
        {
            q: "What does consistency mean in UI design?",
            options: [
                "Changing the design on every page",
                "Using different button styles everywhere",
                "Removing all navigation menus",
                "Keeping colors, typography, spacing, and controls consistent"
            ],
            answer: 3,
            explanation: "Consistency makes the interface predictable by maintaining similar design patterns."
        },
        {
            q: "Which principle makes important information stand out through size, position, contrast, and spacing?",
            options: ["Feedback", "Visual hierarchy", "Authentication", "Simplicity"],
            answer: 1,
            explanation: "Visual hierarchy guides attention toward important information."
        },
        {
            q: "What is feedback in user interface design?",
            options: [
                "Removing buttons",
                "Changing the website title",
                "Showing users that an action was received",
                "Hiding errors from users"
            ],
            answer: 2,
            explanation: "Feedback informs users about the result of an action, such as displaying a success message after submitting a form."
        },
        {
            q: "Which UI element helps users move between pages or sections?",
            options: ["Navigation menu", "Image gallery", "Footer image", "Background"],
            answer: 0,
            explanation: "A navigation menu helps users move between different pages or sections of a website."
        },
        {
            q: "What is the main purpose of a button?",
            options: [
                "To store website files",
                "To change the browser",
                "To display a background image",
                "To start an action such as Save or Submit"
            ],
            answer: 3,
            explanation: "Buttons allow users to perform actions such as saving information or submitting a form."
        },
        {
            q: "What is web accessibility?",
            options: [
                "Designing websites only for computer users",
                "Designing websites so people with different abilities can use them",
                "Making every webpage contain animations",
                "Limiting access to website information"
            ],
            answer: 1,
            explanation: "Accessibility allows people with different abilities to perceive, understand, navigate, and interact with websites."
        },
        {
            q: "Which user may rely on a screen reader to access website content?",
            options: [
                "A person who is blind",
                "A person who prefers dark mode",
                "A person using a large monitor",
                "A person with a fast internet connection"
            ],
            answer: 0,
            explanation: "People who are blind may use screen readers to understand digital content."
        },
        {
            q: "What does the letter P in the POUR principles stand for?",
            options: ["Practical", "Protected", "Perceivable", "Personal"],
            answer: 2,
            explanation: "Perceivable means information and interface components must be presented in ways users can perceive."
        },
        {
            q: "What does Operable mean in the POUR principles?",
            options: [
                "The website must contain many images",
                "The interface and navigation must be usable",
                "The website must use only one color",
                "The website must be available offline"
            ],
            answer: 1,
            explanation: "Operable means users must be able to use interface controls and navigation, including through a keyboard."
        },
        {
            q: "Which POUR principle focuses on clear and predictable information?",
            options: ["Robust", "Perceivable", "Operable", "Understandable"],
            answer: 3,
            explanation: "Understandable means information and website operations should be clear and predictable."
        },
        {
            q: "What does Robust mean in web accessibility?",
            options: [
                "Content should work reliably with different browsers and assistive technologies",
                "The website must use large images",
                "The website must contain animations",
                "The website must have complicated navigation"
            ],
            answer: 0,
            explanation: "Robust content should work reliably with browsers and assistive technologies."
        },
        {
            q: "What does WCAG stand for?",
            options: [
                "Web Computer Application Guidelines",
                "Website Content and Graphics",
                "Web Content Accessibility Guidelines",
                "World Computer Access Guide"
            ],
            answer: 2,
            explanation: "WCAG stands for Web Content Accessibility Guidelines, a widely used accessibility standard."
        },
        {
            q: "Which WCAG conformance level is the minimum level?",
            options: ["AAA", "A", "AA", "AB"],
            answer: 1,
            explanation: "Level A is the minimum conformance level defined by WCAG."
        },
        {
            q: "Which WCAG level addresses a broader range of accessibility barriers and is a common target?",
            options: ["Level C", "Level A", "Level AAA only", "Level AA"],
            answer: 3,
            explanation: "Level AA addresses a broader range of barriers and is a common target for organizations."
        },
        {
            q: "Which HTML attribute provides alternative text for an image?",
            options: ["src", "href", "alt", "class"],
            answer: 2,
            explanation: "The alt attribute provides a text alternative that communicates the purpose or information of an image."
        },
        {
            q: "Why should a website have a visible keyboard focus indicator?",
            options: [
                "To help keyboard users identify the currently focused element",
                "To make the page load faster",
                "To hide navigation links",
                "To change the page background"
            ],
            answer: 0,
            explanation: "A visible focus indicator helps keyboard users identify which link, button, or control is currently selected."
        },
        {
            q: "What is the recommended minimum WCAG 2.2 AA contrast ratio for normal text?",
            options: ["1:1", "2:1", "3:1", "4.5:1"],
            answer: 3,
            explanation: "WCAG 2.2 AA generally requires a contrast ratio of at least 4.5:1 for normal text."
        }
    ];

    const identification = [
        {
            q: "The visible and interactive part of a digital product.",
            answers: ["user interface", "ui"],
            display: "User Interface (UI)",
            explanation: "UI includes screens, menus, buttons, links, forms, icons, images, and text."
        },
        {
            q: "The overall experience a person has when using a product.",
            answers: ["user experience", "ux"],
            display: "User Experience (UX)",
            explanation: "UX includes usefulness, ease of use, efficiency, and satisfaction."
        },
        {
            q: "The principle that uses understandable labels and straightforward instructions.",
            answers: ["clarity"],
            display: "Clarity",
            explanation: "Clarity helps users understand what they can do and how to use the interface."
        },
        {
            q: "The principle that keeps colors, typography, spacing, and navigation patterns uniform.",
            answers: ["consistency"],
            display: "Consistency",
            explanation: "Consistency makes the interface predictable and easier to learn."
        },
        {
            q: "The international accessibility guidelines commonly known by the abbreviation WCAG.",
            answers: ["web content accessibility guidelines", "wcag"],
            display: "Web Content Accessibility Guidelines (WCAG)",
            explanation: "WCAG provides guidelines for making web content more accessible."
        },
        {
            q: "The four accessibility principles represented by the abbreviation POUR.",
            answers: ["perceivable operable understandable robust", "pour"],
            display: "POUR Principles",
            explanation: "POUR stands for Perceivable, Operable, Understandable, and Robust."
        },
        {
            q: "Software or hardware that helps people interact with digital content, such as screen readers.",
            answers: ["assistive technology", "assistive technologies"],
            display: "Assistive Technology",
            explanation: "Assistive technology supports people with disabilities when using digital products."
        },
        {
            q: "The text alternative that communicates the purpose or information of an image.",
            answers: ["alternative text", "alt text", "alt"],
            display: "Alternative Text (Alt Text)",
            explanation: "Alt text provides image information to users who may not be able to see the image."
        },
        {
            q: "The ability to operate a website without using a mouse.",
            answers: ["keyboard accessibility", "keyboard navigation"],
            display: "Keyboard Accessibility",
            explanation: "Keyboard accessibility allows users to reach and operate website controls using a keyboard."
        },
        {
            q: "HTML elements chosen according to their meaning and purpose.",
            answers: ["semantic html", "semantic markup"],
            display: "Semantic HTML",
            explanation: "Semantic HTML helps browsers and assistive technologies understand webpage structure and meaning."
        }
    ];

    const trueFalse = [
        {
            q: "A good user interface should only focus on making a website attractive.",
            answer: false,
            explanation: "UI design should also help users understand, navigate, and complete tasks efficiently."
        },
        {
            q: "A person who cannot use a mouse may rely on a keyboard to navigate a website.",
            answer: true,
            explanation: "Keyboard accessibility supports users who cannot operate a mouse."
        },
        {
            q: "Meaningful images should have appropriate alternative text.",
            answer: true,
            explanation: "Alternative text communicates the purpose or information of meaningful images."
        },
        {
            q: "Automated accessibility testing alone guarantees that a website is accessible.",
            answer: false,
            explanation: "Automated tools can find some issues, but manual testing and feedback from users are also important."
        },
        {
            q: "Clear form labels and helpful error messages can improve accessibility.",
            answer: true,
            explanation: "Labels and clear error guidance help users understand and complete forms."
        }
    ];

    const mcContainer = document.getElementById("multipleChoiceQuestions");
    const idContainer = document.getElementById("identificationQuestions");
    const tfContainer = document.getElementById("trueFalseQuestions");
    const form = document.getElementById("assessmentForm");

    function renderMultipleChoice() {
        mcContainer.innerHTML = multipleChoice.map((item, index) => `
            <article class="question-card">
                <p class="question-title">
                    <span class="question-number">${index + 1}.</span>
                    ${item.q}
                </p>
                <div class="options-list">
                    ${item.options.map((option, optionIndex) => `
                        <label class="option-label">
                            <input type="radio" name="mc${index}" value="${optionIndex}">
                            <span><strong>${String.fromCharCode(65 + optionIndex)}.</strong> ${option}</span>
                        </label>
                    `).join("")}
                </div>
            </article>
        `).join("");
    }

    function renderIdentification() {
        idContainer.innerHTML = identification.map((item, index) => `
            <article class="question-card">
                <p class="question-title">
                    <span class="question-number">${index + 21}.</span>
                    ${item.q}
                </p>
                <input
                    class="answer-input"
                    type="text"
                    name="id${index}"
                    placeholder="Type your answer here..."
                    autocomplete="off"
                >
            </article>
        `).join("");
    }

    function renderTrueFalse() {
        tfContainer.innerHTML = trueFalse.map((item, index) => `
            <article class="question-card">
                <p class="question-title">
                    <span class="question-number">${index + 31}.</span>
                    ${item.q}
                </p>
                <div class="tf-options">
                    <label class="option-label">
                        <input type="radio" name="tf${index}" value="true">
                        <span>True</span>
                    </label>
                    <label class="option-label">
                        <input type="radio" name="tf${index}" value="false">
                        <span>False</span>
                    </label>
                </div>
            </article>
        `).join("");
    }

    renderMultipleChoice();
    renderIdentification();
    renderTrueFalse();

    const totalQuestions =
        multipleChoice.length + identification.length + trueFalse.length;

    function getAnsweredCount() {
        let count = 0;

        multipleChoice.forEach((_, i) => {
            if (form.querySelector(`input[name="mc${i}"]:checked`)) count++;
        });

        identification.forEach((_, i) => {
            if (form.querySelector(`input[name="id${i}"]`).value.trim()) count++;
        });

        trueFalse.forEach((_, i) => {
            if (form.querySelector(`input[name="tf${i}"]:checked`)) count++;
        });

        return count;
    }

    function updateProgress() {
        const answered = getAnsweredCount();
        const percentage = (answered / totalQuestions) * 100;

        document.getElementById("progressText").textContent =
            `${answered} of ${totalQuestions} answered`;

        document.getElementById("progressBar").style.width =
            `${percentage}%`;
    }

    form.addEventListener("input", updateProgress);
    form.addEventListener("change", updateProgress);

    function normalizeAnswer(value) {
        return value
            .toLowerCase()
            .trim()
            .replace(/[.,!?]/g, "")
            .replace(/\s+/g, " ");
    }

    function addReview(container, number, question, userAnswer, correctAnswer, isCorrect, explanation) {
        const item = document.createElement("article");
        item.className = `review-item ${isCorrect ? "correct" : "incorrect"}`;

        const status = document.createElement("div");
        status.className = "review-status";
        status.textContent = isCorrect ? "✓ Correct" : "✗ Incorrect";

        const questionText = document.createElement("p");
        questionText.textContent = `${number}. ${question}`;

        const yourAnswer = document.createElement("p");
        yourAnswer.className = "review-answer";
        yourAnswer.textContent = `Your answer: ${userAnswer || "No answer"}`;

        const correct = document.createElement("p");
        correct.className = "review-answer";
        correct.textContent = `Correct answer: ${correctAnswer}`;

        const reason = document.createElement("p");
        reason.className = "review-explanation";
        reason.textContent = `Explanation: ${explanation}`;

        item.append(status, questionText, yourAnswer, correct, reason);
        container.appendChild(item);
    }

    function showResults() {
        let score = 0;
        const review = document.getElementById("answerReview");
        review.innerHTML = "";

        multipleChoice.forEach((item, index) => {
            const selected = form.querySelector(`input[name="mc${index}"]:checked`);
            const selectedIndex = selected ? Number(selected.value) : -1;
            const isCorrect = selectedIndex === item.answer;

            if (isCorrect) score++;

            const userAnswer = selected
                ? `${String.fromCharCode(65 + selectedIndex)}. ${item.options[selectedIndex]}`
                : "";

            const correctAnswer =
                `${String.fromCharCode(65 + item.answer)}. ${item.options[item.answer]}`;

            addReview(
                review,
                index + 1,
                item.q,
                userAnswer,
                correctAnswer,
                isCorrect,
                item.explanation
            );
        });

        identification.forEach((item, index) => {
            const input = form.querySelector(`input[name="id${index}"]`);
            const userAnswer = input.value.trim();

            const normalized = normalizeAnswer(userAnswer);
            const isCorrect = item.answers.some(answer =>
                normalizeAnswer(answer) === normalized
            );

            if (isCorrect) score++;

            addReview(
                review,
                index + 21,
                item.q,
                userAnswer,
                item.display,
                isCorrect,
                item.explanation
            );
        });

        trueFalse.forEach((item, index) => {
            const selected = form.querySelector(`input[name="tf${index}"]:checked`);
            const userAnswer = selected
                ? selected.value === "true" ? "True" : "False"
                : "";

            const isCorrect = selected &&
                (selected.value === "true") === item.answer;

            if (isCorrect) score++;

            addReview(
                review,
                index + 31,
                item.q,
                userAnswer,
                item.answer ? "True" : "False",
                isCorrect,
                item.explanation
            );
        });

        const percentage = Math.round((score / totalQuestions) * 100);
        const incorrect = totalQuestions - score;

        document.getElementById("scoreDisplay").textContent =
            `${score}/${totalQuestions}`;

        document.getElementById("percentageDisplay").textContent =
            `${percentage}%`;

        document.getElementById("correctDisplay").textContent = score;
        document.getElementById("incorrectDisplay").textContent = incorrect;

        let message;

        if (percentage >= 90) {
            message = "Excellent! You have a very strong understanding of UI design and accessibility.";
        } else if (percentage >= 80) {
            message = "Very good! You understand most of the important concepts.";
        } else if (percentage >= 75) {
            message = "Good job! Review the explanations to strengthen your knowledge.";
        } else if (percentage >= 60) {
            message = "Keep practicing. Review the lesson and try the assessment again.";
        } else {
            message = "You need more practice. Study the lesson carefully and retake the assessment.";
        }

        document.getElementById("resultMessage").textContent = message;

        document.getElementById("feedbackBox").textContent =
            `You answered ${score} out of ${totalQuestions} questions correctly. ` +
            `Your final score is ${percentage}%. Review the explanations below to learn from your answers.`;

        document.getElementById("resultSection").hidden = false;
        document.getElementById("resultSection").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    form.addEventListener("submit", event => {
        event.preventDefault();

        const answered = getAnsweredCount();

        if (answered < totalQuestions) {
            alert(`Please answer all questions first. You have answered ${answered} out of ${totalQuestions}.`);
            return;
        }

        if (!confirm("Are you sure you want to submit your assessment?")) {
            return;
        }

        showResults();
    });

    function resetAssessment() {
        if (!confirm("Are you sure you want to reset all your answers?")) {
            return;
        }

        form.reset();
        document.getElementById("resultSection").hidden = true;
        document.getElementById("answerReview").innerHTML = "";
        updateProgress();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    document.getElementById("resetBtn").addEventListener("click", resetAssessment);
    document.getElementById("retakeBtn").addEventListener("click", resetAssessment);

    const backToTop = document.getElementById("backToTop");

    window.addEventListener("scroll", () => {
        backToTop.style.display = window.scrollY > 350 ? "block" : "none";
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    updateProgress();

});
