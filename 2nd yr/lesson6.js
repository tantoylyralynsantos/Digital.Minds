document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".lesson-page");
    const navLinks = document.querySelectorAll(".side-nav a");
    const progressBar = document.getElementById("progressBar");
    const sideProgress = document.getElementById("sideProgress");
    const progressText = document.getElementById("progressText");
    const backToTop = document.getElementById("backToTop");

    // Smooth scrolling for lesson navigation
    navLinks.forEach(function (link) {
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

    // Reading progress
    function updateProgress() {
        const scrollTop = window.scrollY;
        const documentHeight =
            document.documentElement.scrollHeight - window.innerHeight;

        let percentage = documentHeight > 0
            ? Math.round((scrollTop / documentHeight) * 100)
            : 0;

        percentage = Math.min(100, Math.max(0, percentage));

        if (progressBar) progressBar.style.width = percentage + "%";
        if (sideProgress) sideProgress.style.width = percentage + "%";
        if (progressText) progressText.textContent = percentage + "%";

        if (backToTop) {
            backToTop.style.display = scrollTop > 400 ? "block" : "none";
        }
    }

    window.addEventListener("scroll", updateProgress);
    updateProgress();

    // Highlight current sidebar section
    function updateActiveLink() {
        let currentSection = "";

        sections.forEach(function (section) {
            const sectionTop = section.offsetTop - 150;

            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(function (link) {
            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + currentSection) {
                link.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", updateActiveLink);
    updateActiveLink();

    // Back to top button
    if (backToTop) {
        backToTop.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});

// =====================================
// AUTOMATIC LESSON ILLUSTRATIONS
// NO EXTERNAL IMAGES REQUIRED
// =====================================

document.addEventListener("DOMContentLoaded", function () {

    const illustrations = [
        {
            words: ["input", "keyboard", "mouse", "scanner"],
            icon: "⌨️",
            title: "Input Devices",
            description: "Devices used to enter data and instructions into a computer.",
            items: ["Keyboard", "Mouse", "Scanner"]
        },
        {
            words: ["output", "monitor", "printer", "speaker"],
            icon: "🖥️",
            title: "Output Devices",
            description: "Devices that present processed information to the user.",
            items: ["Monitor", "Printer", "Speakers"]
        },
        {
            words: ["controller", "driver"],
            icon: "⚙️",
            title: "Device Controllers and Drivers",
            description: "Software and hardware components that help the operating system communicate with devices.",
            items: ["Controller", "Driver", "Operating System"]
        },
        {
            words: ["interrupt"],
            icon: "🔔",
            title: "Interrupt-Driven I/O",
            description: "A device sends a signal to notify the processor when it needs attention.",
            items: ["Device Signal", "CPU", "Interrupt Handler"]
        },
        {
            words: ["dma", "direct memory"],
            icon: "🔄",
            title: "Direct Memory Access",
            description: "Allows devices to transfer data directly to or from memory with less CPU involvement.",
            items: ["I/O Device", "Memory", "DMA Controller"]
        },
        {
            words: ["buffer"],
            icon: "📦",
            title: "Buffering",
            description: "Temporarily stores data while it moves between devices or processes.",
            items: ["Temporary Storage", "Data Transfer"]
        },
        {
            words: ["cache", "caching"],
            icon: "⚡",
            title: "Caching",
            description: "Stores frequently accessed data so it can be retrieved more quickly.",
            items: ["Fast Access", "Temporary Data"]
        },
        {
            words: ["spooling"],
            icon: "🖨️",
            title: "Spooling",
            description: "Places tasks in a queue so a device can process them one at a time.",
            items: ["Print Queue", "Pending Jobs"]
        },
        {
            words: ["storage", "hard disk", "ssd"],
            icon: "💾",
            title: "Storage Device Management",
            description: "Organizes and manages data stored on computer storage devices.",
            items: ["Hard Drive", "SSD", "USB Drive"]
        },
        {
            words: ["network", "communication"],
            icon: "🌐",
            title: "Network Device Management",
            description: "Manages devices that connect computers and allow data communication.",
            items: ["Router", "Network Card", "Switch"]
        },
        {
            words: ["security", "protection"],
            icon: "🔐",
            title: "I/O Protection and Security",
            description: "Protects devices and data from unauthorized access and harmful activities.",
            items: ["Access Control", "Device Safety"]
        },
        {
            words: ["deadlock"],
            icon: "🔒",
            title: "Device Deadlocks",
            description: "A situation where processes wait indefinitely for resources held by one another.",
            items: ["Process A", "Process B", "Resource"]
        },
        {
            words: ["schedule", "queue", "allocation"],
            icon: "📋",
            title: "Device Scheduling and Allocation",
            description: "Organizes device requests and assigns resources to processes.",
            items: ["Requests", "Queue", "Resources"]
        },
        {
            words: ["plug", "play", "virtualization", "hot"],
            icon: "🔌",
            title: "Modern I/O Technologies",
            description: "Modern technologies make connecting and managing devices easier.",
            items: ["Plug-and-Play", "Virtualization", "Hot-Swapping"]
        },
        {
            words: ["performance", "optimization"],
            icon: "📈",
            title: "I/O Performance Optimization",
            description: "Improves the speed and efficiency of input and output operations.",
            items: ["Efficiency", "Speed", "Performance"]
        },
        {
            words: ["device management", "operating system"],
            icon: "🖥️",
            title: "Device Management",
            description: "The operating system controls and coordinates computer hardware devices.",
            items: ["Hardware", "Software", "Operating System"]
        }
    ];

    function getIllustrationInfo(img) {
        const parent = img.closest(".illustration") || img.parentElement;
        const caption = parent ? parent.querySelector(".image-caption") : null;

        const searchText = (
            (img.alt || "") + " " +
            (caption ? caption.textContent : "") + " " +
            (parent ? parent.textContent : "")
        ).toLowerCase();

        return illustrations.find(item =>
            item.words.some(word => searchText.includes(word))
        ) || {
            icon: "💻",
            title: img.alt || "Computer Device Management",
            description: "A visual representation related to Device and Input/Output Management.",
            items: ["Computer System", "Hardware", "Device Management"]
        };
    }

    document.querySelectorAll("img.lesson-image").forEach(function (img) {
        const info = getIllustrationInfo(img);

        const visual = document.createElement("div");
        visual.className = "auto-illustration";

        visual.innerHTML = `
            <div class="illustration-icon">${info.icon}</div>
            <h3>${info.title}</h3>
            <p>${info.description}</p>
            <div class="illustration-decoration">
                ${info.items.map(item => `<span>${item}</span>`).join("")}
            </div>
            <div class="illustration-label">DEVICE AND I/O MANAGEMENT</div>
        `;

        img.insertAdjacentElement("beforebegin", visual);
        img.style.display = "none";
    });

});
