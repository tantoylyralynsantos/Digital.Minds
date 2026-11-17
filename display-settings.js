/* =========================================
   WEBTECH LEARN - DISPLAY SETTINGS
   DARK MODE + WORKING TEXT SIZE
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const settingsToggle = document.getElementById("settingsToggle");
    const settingsPanel = document.getElementById("settingsPanel");
    const darkModeButton = document.getElementById("darkModeButton");
    const decreaseText = document.getElementById("decreaseText");
    const increaseText = document.getElementById("increaseText");
    const resetSettings = document.getElementById("resetSettings");
    const textSizeValue = document.getElementById("textSizeValue");

    if (
        !settingsToggle ||
        !settingsPanel ||
        !darkModeButton ||
        !decreaseText ||
        !increaseText ||
        !resetSettings ||
        !textSizeValue
    ) {
        return;
    }

    const root = document.documentElement;

    const MIN_SCALE = 0.8;
    const MAX_SCALE = 1.5;
    const STEP = 0.1;

    let savedScale = Number(localStorage.getItem("webtechTextScale"));

    let textScale = Number.isFinite(savedScale) &&
        savedScale >= MIN_SCALE &&
        savedScale <= MAX_SCALE
        ? savedScale
        : 1;

    let darkMode = localStorage.getItem("webtechDarkMode") === "true";


    /* =====================================
       OPEN AND CLOSE SETTINGS
    ===================================== */

    settingsToggle.addEventListener("click", function (event) {
        event.stopPropagation();
        settingsPanel.classList.toggle("show");
    });

    settingsPanel.addEventListener("click", function (event) {
        event.stopPropagation();
    });

    document.addEventListener("click", function () {
        settingsPanel.classList.remove("show");
    });


    /* =====================================
       DARK MODE
    ===================================== */

    function applyDarkMode() {

        root.classList.toggle("dark-mode", darkMode);

        darkModeButton.textContent = darkMode
            ? "☀️ Switch to Light Mode"
            : "🌙 Switch to Dark Mode";

        localStorage.setItem(
            "webtechDarkMode",
            String(darkMode)
        );
    }

    darkModeButton.addEventListener("click", function () {

        darkMode = !darkMode;

        applyDarkMode();

    });


    /* =====================================
       TEXT SIZE
       APPLIES TO ALL TEXT ELEMENTS
    ===================================== */

    function applyTextSize() {

        const textElements = document.querySelectorAll(
            "body *:not(#displaySettings):not(#displaySettings *)"
        );

        textElements.forEach(function (element) {

            // Ignore elements without their own direct text.
            const hasDirectText = Array.from(element.childNodes).some(
                function (node) {
                    return node.nodeType === Node.TEXT_NODE &&
                        node.textContent.trim().length > 0;
                }
            );

            const isFormControl = element.matches(
                "input, textarea, select, button"
            );

            if (!hasDirectText && !isFormControl) {
                return;
            }

            // Save the original font size only once.
            if (!element.dataset.originalTextSize) {

                const originalSize = parseFloat(
                    window.getComputedStyle(element).fontSize
                );

                if (originalSize) {
                    element.dataset.originalTextSize = originalSize;
                }
            }

            const originalSize = Number(
                element.dataset.originalTextSize
            );

            if (originalSize) {

                element.classList.add("display-scaled-text");

                element.style.setProperty(
                    "--original-text-size",
                    originalSize + "px"
                );
            }

        });

        root.style.setProperty(
            "--display-text-scale",
            textScale
        );

        textSizeValue.textContent =
            Math.round(textScale * 100) + "%";

        localStorage.setItem(
            "webtechTextScale",
            String(textScale)
        );
    }


    /* =====================================
       INCREASE TEXT
    ===================================== */

    increaseText.addEventListener("click", function () {

        textScale = Math.min(
            MAX_SCALE,
            Math.round((textScale + STEP) * 10) / 10
        );

        applyTextSize();

    });


    /* =====================================
       DECREASE TEXT
    ===================================== */

    decreaseText.addEventListener("click", function () {

        textScale = Math.max(
            MIN_SCALE,
            Math.round((textScale - STEP) * 10) / 10
        );

        applyTextSize();

    });


    /* =====================================
       RESET SETTINGS
    ===================================== */

    resetSettings.addEventListener("click", function () {

        darkMode = false;
        textScale = 1;

        applyDarkMode();
        applyTextSize();

    });


    /* =====================================
       APPLY SAVED SETTINGS
    ===================================== */

    applyDarkMode();
    applyTextSize();


    /* =====================================
       DETECT NEW CONTENT
       EXAMPLE: ASSESSMENT RESULTS
    ===================================== */

    const observer = new MutationObserver(function (mutations) {

        let hasNewElements = false;

        mutations.forEach(function (mutation) {

            mutation.addedNodes.forEach(function (node) {

                if (node.nodeType === Node.ELEMENT_NODE) {
                    hasNewElements = true;
                }

            });

        });

        if (hasNewElements) {
            applyTextSize();
        }

    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

});