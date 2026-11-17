
document.addEventListener("DOMContentLoaded", function () {

    // =====================================
    // AUTOMATIC CSS-BASED ILLUSTRATIONS
    // NO IMAGE FILES REQUIRED
    // =====================================

    const illustrationData = {
        introduction: {
            cards: [["🖥️", "Host Computer"], ["⚙️", "Hypervisor"], ["💻", "Virtual Machines"]],
            arrows: true
        },
        fundamentals: {
            cards: [["🖥️", "Physical Hardware"], ["⚙️", "Virtualization"], ["💻", "Virtual Systems"]],
            arrows: true
        },
        history: {
            cards: [["🏢", "Mainframes"], ["💻", "Personal Computers"], ["☁️", "Cloud Computing"]],
            arrows: true
        },
        vmconcept: {
            cards: [["🖥️", "Host Machine"], ["⚙️", "Hypervisor"], ["💻", "Guest Machine"]],
            arrows: true
        },
        components: {
            cards: [["🖥️", "Hardware"], ["⚙️", "Hypervisor"], ["💻", "Virtual Machines"], ["📦", "Applications"]],
            arrows: true
        },
        characteristics: {
            cards: [["🔒", "Isolation"], ["📦", "Encapsulation"], ["🔄", "Independence"], ["⚖️", "Sharing"]]
        },
        types: {
            cards: [["🖥️", "Server"], ["💾", "Storage"], ["🌐", "Network"], ["🖱️", "Desktop"]]
        },
        hypervisor: {
            cards: [["🖥️", "Physical Host"], ["⚙️", "Hypervisor"], ["💻", "Virtual Machines"]],
            arrows: true
        },
        architecture: {
            cards: [["🖥️", "Hardware Layer"], ["⚙️", "Hypervisor Layer"], ["💻", "VM Layer"], ["📦", "Applications"]],
            arrows: true
        },
        techniques: {
            cards: [["🧩", "Full Virtualization"], ["🔧", "Para-Virtualization"], ["⚡", "Hardware-Assisted"], ["📦", "OS-Level"]]
        },
        resources: {
            cards: [["⚡", "CPU"], ["🧠", "Memory"], ["💾", "Storage"], ["🌐", "Network"]]
        },
        enterprise: {
            cards: [["🏢", "Business"], ["🖥️", "Virtual Servers"], ["📊", "Management"]],
            arrows: true
        },
        cloud: {
            cards: [["🖥️", "Virtual Machines"], ["☁️", "Cloud Platform"], ["🌐", "Internet Users"]],
            arrows: true
        },
        containers: {
            cards: [["📦", "Application"], ["🧩", "Dependencies"], ["🐳", "Container"]],
            arrows: true
        },
        security: {
            cards: [["🔒", "Access Control"], ["🛡️", "Protection"], ["🔍", "Monitoring"]],
            arrows: true
        },
        snapshots: {
            cards: [["💻", "Virtual Machine"], ["📸", "Snapshot"], ["↩️", "Restore"]],
            arrows: true
        },
        migration: {
            cards: [["🖥️", "Host A"], ["🔄", "Live Migration"], ["🖥️", "Host B"]],
            arrows: true
        },
        vdi: {
            cards: [["🖥️", "Central Server"], ["☁️", "Virtual Desktop"], ["💻", "User Device"]],
            arrows: true
        },
        recovery: {
            cards: [["💾", "Backup"], ["⚠️", "System Failure"], ["🔄", "Recovery"]],
            arrows: true
        },
        applications: {
            cards: [["🎓", "Education"], ["🏢", "Business"], ["🔬", "Research"], ["☁️", "Cloud"]]
        },
        server: {
            cards: [["🖥️", "Physical Server"], ["⚙️", "Hypervisor"], ["🗄️", "Virtual Servers"]],
            arrows: true
        },
        storage: {
            cards: [["💽", "Disk 1"], ["💽", "Disk 2"], ["📦", "Logical Storage"]],
            arrows: true
        },
        network: {
            cards: [["💻", "Virtual Machine"], ["🔀", "Virtual Switch"], ["🌐", "Network"]],
            arrows: true
        },
        desktop: {
            cards: [["🖥️", "Hosted Desktop"], ["☁️", "Remote Access"], ["💻", "User Device"]],
            arrows: true
        },
        benefits: {
            cards: [["💰", "Cost Savings"], ["⚡", "Efficiency"], ["🔄", "Flexibility"], ["📈", "Scalability"]]
        },
        challenges: {
            cards: [["⚠️", "Performance"], ["🔒", "Security"], ["⚙️", "Complexity"], ["💸", "Setup Cost"]]
        },
        cloudcomputing: {
            cards: [["🖥️", "Infrastructure"], ["☁️", "Cloud Services"], ["👥", "Users"]],
            arrows: true
        },
        trends: {
            cards: [["🤖", "Artificial Intelligence"], ["📡", "Edge Computing"], ["☁️", "Hybrid Cloud"], ["📦", "Containers"]]
        },
        activities: {
            cards: [["📖", "Learn"], ["🧪", "Practice"], ["📝", "Assessment"]],
            arrows: true
        },
        conclusion: {
            cards: [["🖥️", "Virtualization"], ["☁️", "Cloud Technology"], ["🚀", "Future of IT"]],
            arrows: true
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

        if (progress) {
            progress.style.width = percent + "%";
        }

        if (progressText) {
            progressText.textContent = percent + "% Completed";
        }

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
            navLinks.forEach(function (item) {
                item.classList.remove("active");
            });

            link.classList.add("active");
        });
    });

    handleScroll();
});
