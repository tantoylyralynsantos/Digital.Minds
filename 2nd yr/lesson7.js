
document.addEventListener("DOMContentLoaded", function () {

    // =====================================
    // AUTOMATIC CSS-BASED ILLUSTRATIONS
    // NO IMAGE FILES REQUIRED
    // =====================================

    const illustrationData = {
        computer: {
            cards: [["💻", "Computer"], ["⚙️", "Operating System"], ["📦", "Resources"]],
            arrows: true
        },
        allocation: {
            cards: [["👤", "Process 1"], ["⚙️", "OS Manager"], ["🧠", "Memory"], ["🖨️", "Printer"]],
            arrows: true
        },
        resources: {
            cards: [["🖥️", "Hardware"], ["💿", "Software"], ["📁", "Files"]],
            arrows: true
        },
        classification: {
            cards: [["🖥️", "Hardware"], ["💻", "Software"], ["🔁", "Reusable"], ["📨", "Consumable"]]
        },
        process: {
            cards: [["📩", "Request"], ["✅", "Allocation"], ["⚙️", "Use"], ["🔓", "Release"]],
            arrows: true
        },
        policy: {
            cards: [["1️⃣", "FCFS"], ["⭐", "Priority"], ["🔄", "Dynamic"]]
        },
        rag: {
            cards: [["⭕", "Process P1"], ["▭", "Resource R1"], ["⭕", "Process P2"]],
            arrows: true
        },
        deadlock: {
            cards: [["🖨️", "Printer held by A"], ["⏳", "Waiting"], ["📠", "Scanner held by B"]]
        },
        conditions: {
            cards: [["🚫", "Mutual Exclusion"], ["🤝", "Hold and Wait"], ["🔒", "No Preemption"], ["🔄", "Circular Wait"]]
        },
        model: {
            cards: [["1️⃣", "Single Resource"], ["2️⃣", "Multiple Resources"], ["📊", "Graph Model"], ["🔎", "State Model"]]
        },
        single: {
            cards: [["👤", "Process A"], ["🖨️", "One Printer"], ["👤", "Process B"]],
            arrows: true
        },
        multiple: {
            cards: [["🖨️", "Printer"], ["📠", "Scanner"], ["💾", "Storage"]],
            arrows: true
        },
        cycle: {
            cards: [["⭕", "P1"], ["▭", "R1"], ["⭕", "P2"], ["▭", "R2"]],
            arrows: true
        },
        prevention: {
            cards: [["🛡️", "Remove a Condition"], ["⚙️", "Control Requests"], ["✅", "Prevent Deadlock"]],
            arrows: true
        },
        avoidance: {
            cards: [["📩", "Request"], ["🔎", "Safety Check"], ["✅", "Safe Allocation"]],
            arrows: true
        },
        states: {
            cards: [["🟢", "Safe State"], ["🟠", "Unsafe State"], ["🔴", "Deadlock"]],
            arrows: true
        },
        banker: {
            cards: [["🏦", "Banker's Algorithm"], ["📊", "Check Resources"], ["🟢", "Safe Sequence"]],
            arrows: true
        },
        comparison: {
            cards: [["🛡️", "Prevention"], ["🔎", "Avoidance"]]
        },
        detection: {
            cards: [["🔍", "Monitor Processes"], ["📊", "Analyze Requests"], ["⚠️", "Find Deadlock"]],
            arrows: true
        },
        waitfor: {
            cards: [["⭕", "P1"], ["⭕", "P2"], ["⭕", "P3"]],
            arrows: true
        },
        algorithm: {
            cards: [["📋", "Resource Data"], ["🔎", "Detection"], ["⚠️", "Deadlock Found"]],
            arrows: true
        },
        termination: {
            cards: [["⚙️", "Blocked Process"], ["✖️", "Terminate"], ["🔓", "Release Resources"]],
            arrows: true
        },
        preemption: {
            cards: [["📦", "Take Resource"], ["🔄", "Reassign"], ["▶️", "Resume Process"]],
            arrows: true
        },
        rollback: {
            cards: [["💾", "Checkpoint"], ["↩️", "Rollback"], ["▶️", "Restart"]],
            arrows: true
        },
        operatingsystems: {
            cards: [["🪟", "Windows"], ["🐧", "Linux"], ["🍎", "macOS"]]
        },
        distributed: {
            cards: [["🖥️", "Server 1"], ["🌐", "Network"], ["🖥️", "Server 2"]],
            arrows: true
        },
        realtime: {
            cards: [["🏥", "Medical"], ["✈️", "Air Traffic"], ["🤖", "Robotics"], ["🏭", "Industry"]]
        },
        starvation: {
            cards: [["👤", "Low Priority"], ["⏳", "Waiting"], ["⭐", "High Priority"]],
            arrows: true
        },
        applications: {
            cards: [["🏦", "Banking"], ["☁️", "Cloud"], ["🏥", "Healthcare"], ["🏭", "Industry"]]
        },
        future: {
            cards: [["🤖", "Artificial Intelligence"], ["☁️", "Cloud"], ["🌐", "IoT"], ["📡", "Edge Computing"]]
        }
    };

    document.querySelectorAll(".illustration[data-illustration]").forEach(function (box) {
        const key = box.dataset.illustration;
        const data = illustrationData[key];

        if (!data) return;

        const cardsHTML = data.cards.map(function (card, index) {
            const arrow = data.arrows && index < data.cards.length - 1
                ? '<span class="art-arrow">→</span>'
                : '';

            return `
                <div class="art-card">
                    <span class="art-icon">${card[0]}</span>
                    <strong>${card[1]}</strong>
                </div>
                ${arrow}
            `;
        }).join("");

        const caption = box.querySelector(".image-caption");

        box.innerHTML = `
            <div class="illustration-art">${cardsHTML}</div>
            ${caption ? caption.outerHTML : ""}
        `;
    });

    // =====================================
    // SIDEBAR ACTIVE LINK
    // =====================================

    const pages = document.querySelectorAll(".lesson-page");
    const navLinks = document.querySelectorAll(".side-nav a");

    function updateActiveLink() {
        let currentPage = "";

        pages.forEach(function (page) {
            const top = page.getBoundingClientRect().top;

            if (top <= 160) {
                currentPage = page.id;
            }
        });

        navLinks.forEach(function (link) {
            link.classList.toggle(
                "active",
                link.getAttribute("href") === "#" + currentPage
            );
        });
    }

    // =====================================
    // READING PROGRESS
    // =====================================

    function updateProgress() {
        const totalPages = pages.length;
        let completedPages = 0;

        pages.forEach(function (page) {
            if (page.getBoundingClientRect().top < window.innerHeight * 0.65) {
                completedPages++;
            }
        });

        const percent = Math.round((completedPages / totalPages) * 100);

        const progress = document.getElementById("sideProgress");
        const progressText = document.getElementById("progressText");
        const pageCounter = document.getElementById("pageCounter");

        if (progress) progress.style.width = percent + "%";
        if (progressText) progressText.textContent = percent + "% Completed";

        let currentNumber = 1;

        pages.forEach(function (page, index) {
            if (page.getBoundingClientRect().top < window.innerHeight * 0.55) {
                currentNumber = index + 1;
            }
        });

        if (pageCounter) {
            pageCounter.textContent = "Page " + currentNumber + " of " + totalPages;
        }
    }

    // =====================================
    // BACK TO TOP
    // =====================================

    const backToTop = document.getElementById("backToTop");

    function handleScroll() {
        updateActiveLink();
        updateProgress();

        if (backToTop) {
            backToTop.style.display = window.scrollY > 400 ? "block" : "none";
        }
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    if (backToTop) {
        backToTop.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.forEach(item => item.classList.remove("active"));
            link.classList.add("active");
        });
    });

    handleScroll();
});
