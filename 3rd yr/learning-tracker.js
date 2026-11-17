
document.addEventListener("DOMContentLoaded", function () {

    // CHECK LOGIN
    if (sessionStorage.getItem("webtechLoggedIn") !== "true") {
        return;
    }

    // GET STUDENT
    let student = {};

    try {
        student = JSON.parse(
            sessionStorage.getItem("webtechStudent")
        ) || {};
    } catch (error) {
        return;
    }

    // IDENTIFY STUDENT
    const studentIdentity = (
        student.email ||
        student.username ||
        student.fullName
    );

    if (!studentIdentity) return;

    const storageKey =
        "digitalMindsProgress_" +
        studentIdentity.trim().toLowerCase();

    // GET EXISTING PROGRESS
    function getProgress() {
        try {
            return JSON.parse(
                localStorage.getItem(storageKey)
            ) || {
                completedLessons: [],
                assessmentResults: []
            };
        } catch (error) {
            return {
                completedLessons: [],
                assessmentResults: []
            };
        }
    }

    function saveProgress(progress) {
        localStorage.setItem(
            storageKey,
            JSON.stringify(progress)
        );
    }

    // CURRENT LESSON
    const lessonId = document.body.dataset.lessonId;
    const yearLevel = document.body.dataset.year;

    if (!lessonId) {
        console.warn("Lesson ID is missing.");
        return;
    }

    const lessonTitle =
        document.querySelector(".lesson-banner h1")?.textContent.trim()
        || document.title;

    let progress = getProgress();

    // CHECK IF ALREADY COMPLETED
    if (progress.completedLessons.includes(lessonId)) {
        console.log("Lesson already completed.");
        return;
    }

    // READING TRACKING
    const startTime = Date.now();

    let completed = false;

    function checkReadingProgress() {

        if (completed || document.visibilityState !== "visible") {
            return;
        }

        const scrollableHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const currentPosition =
            window.scrollY + window.innerHeight;

        const percentage = scrollableHeight <= 0
            ? 100
            : (currentPosition / document.documentElement.scrollHeight) * 100;

        // REQUIRE AT LEAST 90% PAGE PROGRESS
        // AND 30 SECONDS OF ACTIVE TIME
        const readingTime = (Date.now() - startTime) / 1000;

        if (percentage >= 90 && readingTime >= 30) {

            completed = true;

            progress = getProgress();

            if (!progress.completedLessons.includes(lessonId)) {

                progress.completedLessons.push(lessonId);

                // SAVE LESSON INFORMATION
                if (!progress.lessonDetails) {
                    progress.lessonDetails = {};
                }

                progress.lessonDetails[lessonId] = {
                    title: lessonTitle,
                    year: yearLevel,
                    completedAt: new Date().toISOString()
                };

                saveProgress(progress);

                // SHOW COMPLETION MESSAGE
                const message = document.createElement("div");

                message.className = "lesson-completion-message";

                message.textContent =
                    "✓ Congratulations! This lesson is marked as completed.";

                document.body.appendChild(message);

                setTimeout(function () {
                    message.remove();
                }, 5000);

                console.log("Lesson completed:", lessonTitle);
            }
        }
    }

    window.addEventListener(
        "scroll",
        checkReadingProgress,
        { passive: true }
    );

    window.addEventListener(
        "resize",
        checkReadingProgress
    );

    document.addEventListener(
        "visibilitychange",
        checkReadingProgress
    );

});
