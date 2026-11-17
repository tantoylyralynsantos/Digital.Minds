
document.addEventListener("DOMContentLoaded", function () {

    // =====================================
    // REGISTRATION FORM VALIDATION
    // =====================================

    const form = document.getElementById("registrationForm");

    if (form) {
        const fields = {
            name: document.getElementById("studentName"),
            email: document.getElementById("studentEmail"),
            phone: document.getElementById("studentPhone"),
            password: document.getElementById("studentPassword"),
            city: document.getElementById("studentCity"),
            terms: document.getElementById("agreeTerms")
        };

        const submitButton = document.getElementById("registerButton");
        const successMessage = document.getElementById("registrationSuccess");
        const passwordStrength = document.getElementById("passwordStrength");

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\d{10}$/;
        const nameRegex = /^[A-Za-z\s]{2,}$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

        const errors = {
            name: document.getElementById("nameError"),
            email: document.getElementById("emailError"),
            phone: document.getElementById("phoneError"),
            password: document.getElementById("passwordError"),
            city: document.getElementById("cityError"),
            terms: document.getElementById("termsError")
        };

        const validity = {
            name: false,
            email: false,
            phone: false,
            password: false,
            city: false,
            terms: false
        };

        function showFieldError(field, errorElement, message) {
            field.classList.add("invalid");
            field.classList.remove("valid");
            errorElement.textContent = message;
        }

        function showFieldSuccess(field, errorElement) {
            field.classList.remove("invalid");
            field.classList.add("valid");
            errorElement.textContent = "";
        }

        function updateSubmitButton() {
            const allValid = Object.values(validity).every(Boolean);
            submitButton.disabled = !allValid;
        }

        function validateName() {
            const value = fields.name.value.trim();

            if (value === "") {
                showFieldError(fields.name, errors.name, "Full name is required.");
                validity.name = false;
            } else if (!nameRegex.test(value)) {
                showFieldError(fields.name, errors.name, "Enter a valid name using letters and spaces.");
                validity.name = false;
            } else {
                showFieldSuccess(fields.name, errors.name);
                validity.name = true;
            }

            updateSubmitButton();
        }

        function validateEmail() {
            const value = fields.email.value.trim();

            if (value === "") {
                showFieldError(fields.email, errors.email, "Email address is required.");
                validity.email = false;
            } else if (!emailRegex.test(value)) {
                showFieldError(fields.email, errors.email, "Please enter a valid email address.");
                validity.email = false;
            } else {
                showFieldSuccess(fields.email, errors.email);
                validity.email = true;
            }

            updateSubmitButton();
        }

        function validatePhone() {
            const value = fields.phone.value.trim();

            if (value === "") {
                showFieldError(fields.phone, errors.phone, "Phone number is required.");
                validity.phone = false;
            } else if (!phoneRegex.test(value)) {
                showFieldError(fields.phone, errors.phone, "Enter exactly 10 digits.");
                validity.phone = false;
            } else {
                showFieldSuccess(fields.phone, errors.phone);
                validity.phone = true;
            }

            updateSubmitButton();
        }

        function validatePassword() {
            const value = fields.password.value;

            if (value === "") {
                showFieldError(fields.password, errors.password, "Password is required.");
                validity.password = false;
                passwordStrength.textContent = "";
            } else if (!passwordRegex.test(value)) {
                showFieldError(
                    fields.password,
                    errors.password,
                    "Use at least 8 characters with uppercase, lowercase, and a number."
                );
                validity.password = false;
                passwordStrength.textContent = "Password requirements not yet met.";
                passwordStrength.style.color = "#c62828";
            } else {
                showFieldSuccess(fields.password, errors.password);
                validity.password = true;
                passwordStrength.textContent = "Strong password format!";
                passwordStrength.style.color = "#198754";
            }

            updateSubmitButton();
        }

        function validateCity() {
            if (fields.city.value === "") {
                showFieldError(fields.city, errors.city, "Please select your city.");
                validity.city = false;
            } else {
                showFieldSuccess(fields.city, errors.city);
                validity.city = true;
            }

            updateSubmitButton();
        }

        function validateTerms() {
            if (!fields.terms.checked) {
                errors.terms.textContent = "You must agree before registering.";
                validity.terms = false;
            } else {
                errors.terms.textContent = "";
                validity.terms = true;
            }

            updateSubmitButton();
        }

        // Real-time validation
        fields.name.addEventListener("input", validateName);
        fields.email.addEventListener("input", validateEmail);
        fields.phone.addEventListener("input", validatePhone);
        fields.password.addEventListener("input", validatePassword);

        fields.city.addEventListener("change", validateCity);
        fields.terms.addEventListener("change", validateTerms);

        // Final validation on submit
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            validateName();
            validateEmail();
            validatePhone();
            validatePassword();
            validateCity();
            validateTerms();

            const allValid = Object.values(validity).every(Boolean);

            if (!allValid) {
                successMessage.style.display = "none";
                return;
            }

            successMessage.style.display = "block";
            successMessage.textContent =
                "Registration successful! Welcome, " +
                fields.name.value.trim() + ".";

            successMessage.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            });

            form.reset();

            Object.keys(validity).forEach(function (key) {
                validity[key] = false;
            });

            Object.values(fields).forEach(function (field) {
                if (field.type !== "checkbox") {
                    field.classList.remove("valid", "invalid");
                }
            });

            Object.values(errors).forEach(function (error) {
                error.textContent = "";
            });

            passwordStrength.textContent = "";

            updateSubmitButton();
        });
    }


    // =====================================
    // INTERACTIVE QUIZ
    // =====================================

    const questions = [
        {
            question: "1. What is form validation?",
            options: [
                "The process of designing a website",
                "The process of checking user input",
                "The process of deleting form fields",
                "The process of creating images"
            ],
            answer: 1,
            explanation: "Form validation checks whether user input follows the required rules before processing."
        },
        {
            question: "2. Which event occurs when a form is submitted?",
            options: ["click", "input", "submit", "mouseover"],
            answer: 2,
            explanation: "The submit event occurs when a user submits a form."
        },
        {
            question: "3. What does preventDefault() do?",
            options: [
                "Deletes the form",
                "Prevents the browser's default action",
                "Changes the font size",
                "Creates a new input"
            ],
            answer: 1,
            explanation: "preventDefault() stops the browser's default action, such as automatically submitting and reloading a page."
        },
        {
            question: "4. Which property gets the value entered in a text input?",
            options: [".checked", ".value", ".classList", ".style"],
            answer: 1,
            explanation: "The value property returns the current value entered in an input field."
        },
        {
            question: "5. What is the purpose of a regular expression?",
            options: [
                "To style a webpage",
                "To create a database",
                "To check whether text matches a pattern",
                "To display an image"
            ],
            answer: 2,
            explanation: "Regular expressions define patterns used to check strings such as emails, phone numbers, and passwords."
        },
        {
            question: "6. Which method checks whether a string matches a regular expression?",
            options: ["test()", "submit()", "appendChild()", "remove()"],
            answer: 0,
            explanation: "The test() method returns true or false depending on whether the string matches the regular expression."
        },
        {
            question: "7. Which event is commonly used for real-time input validation?",
            options: ["load", "input", "mouseout", "dblclick"],
            answer: 1,
            explanation: "The input event fires whenever the value of an input field changes."
        },
        {
            question: "8. What does the checked property return for a checkbox?",
            options: ["A number", "A string", "A Boolean value", "An HTML element"],
            answer: 2,
            explanation: "The checked property returns true if the checkbox is selected and false otherwise."
        },
        {
            question: "9. Why should developers also validate data on the server?",
            options: [
                "Client-side validation can be bypassed",
                "The browser cannot display forms",
                "CSS cannot style inputs",
                "JavaScript cannot read text"
            ],
            answer: 0,
            explanation: "Client-side validation can be bypassed, so server-side validation is necessary for data protection."
        },
        {
            question: "10. When should a submit button be enabled?",
            options: [
                "Immediately when the page loads",
                "Only when all required validations pass",
                "Only when the user refreshes",
                "When one field is completed"
            ],
            answer: 1,
            explanation: "A submit button can be enabled when all required fields pass validation. The form should still be checked again during submission."
        }
    ];

    const quizForm = document.getElementById("quizForm");
    const quizQuestions = document.getElementById("quizQuestions");
    const quizResult = document.getElementById("quizResult");
    const resetQuiz = document.getElementById("resetQuiz");

    function displayQuestions() {
        if (!quizQuestions) return;

        quizQuestions.innerHTML = "";

        questions.forEach(function (item, index) {
            const box = document.createElement("div");
            box.className = "question";

            const heading = document.createElement("h3");
            heading.textContent = item.question;
            box.appendChild(heading);

            item.options.forEach(function (option, optionIndex) {
                const label = document.createElement("label");

                const radio = document.createElement("input");
                radio.type = "radio";
                radio.name = "question" + index;
                radio.value = optionIndex;
                radio.required = true;

                label.appendChild(radio);
                label.appendChild(document.createTextNode(option));

                box.appendChild(label);
            });

            quizQuestions.appendChild(box);
        });
    }

    displayQuestions();

    if (quizForm) {
        quizForm.addEventListener("submit", function (event) {
            event.preventDefault();

            let score = 0;
            let explanations = "";

            questions.forEach(function (item, index) {
                const selected = document.querySelector(
                    'input[name="question' + index + '"]:checked'
                );

                const isCorrect = selected &&
                    Number(selected.value) === item.answer;

                if (isCorrect) {
                    score++;
                }

                explanations += `
                    <div class="answer-explanation">
                        <strong>${item.question}</strong>
                        <p class="${isCorrect ? "correct-answer" : "wrong-answer"}">
                            ${
                                isCorrect
                                ? "Correct!"
                                : "Incorrect. Correct answer: " + item.options[item.answer]
                            }
                        </p>
                        <p>${item.explanation}</p>
                    </div>
                `;
            });

            const percentage = (score / questions.length) * 100;

            let remark;

            if (percentage >= 90) {
                remark = "Excellent! You have mastered the main concepts.";
            } else if (percentage >= 80) {
                remark = "Very Good! Keep practicing.";
            } else if (percentage >= 70) {
                remark = "Good effort! Review the lesson to improve.";
            } else {
                remark = "Keep studying! Review the chapter and try again.";
            }

            quizResult.style.display = "block";
            quizResult.innerHTML = `
                <h3>Quiz Result</h3>
                <h2>${score} / ${questions.length}</h2>
                <p><strong>Score:</strong> ${percentage.toFixed(0)}%</p>
                <p>${remark}</p>
                <h3>Answer Explanations</h3>
                ${explanations}
            `;

            quizResult.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    }

    if (resetQuiz) {
        resetQuiz.addEventListener("click", function () {
            quizForm.reset();
            quizResult.style.display = "none";
            quizResult.innerHTML = "";

            displayQuestions();

            quizForm.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    }

});

/* =====================================
   DOWNLOAD CHAPTER 7 AS PDF
===================================== */

document.addEventListener("DOMContentLoaded", function () {

    const downloadPDF = document.getElementById("downloadPDF");

    if (downloadPDF) {

        downloadPDF.addEventListener("click", function () {

            const originalTitle = document.title;

            document.title = "Chapter 7 - Forms and Input Validation";

            window.print();

            setTimeout(function () {
                document.title = originalTitle;
            }, 1000);

        });

    }

});

