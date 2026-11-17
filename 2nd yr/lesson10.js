
const lessonPages = document.querySelectorAll(".lesson-page");
const pageLinks = document.querySelectorAll(".page-link");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const pageNumber = document.getElementById("pageNumber");
const currentPageLabel = document.getElementById("currentPageLabel");
const pageTopic = document.getElementById("pageTopic");

const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");

const backToTop = document.getElementById("backToTop");

let currentPage = 0;

const totalPages = lessonPages.length;

const pageTopics = [
    "Introduction",
    "Definition of Mobile Platforms",
    "Mobile Platform Environment",
    "Examples of Mobile Platforms",
    "Early Mobile Devices",
    "Feature Phones",
    "Smartphones",
    "Modern Mobile Platforms",
    "Android Platform",
    "iOS Platform",
    "HarmonyOS",
    "Mobile Operating Systems",
    "Functions of Mobile OS",
    "Definition of Application Platforms",
    "Purpose of Application Platforms",
    "Native Applications",
    "Web Applications",
    "Hybrid Applications",
    "Cross-Platform Applications",
    "Operating System Component",
    "Application Programming Interface",
    "Software Development Kit",
    "Database Systems",
    "User Interface",
    "Native Development",
    "Hybrid Development",
    "Cross-Platform Development",
    "Features and Functions",
    "Importance and Learning Resources",
    "Activities and References"
];

function showPage(pageIndex) {
    if (pageIndex < 0 || pageIndex >= totalPages) {
        return;
    }

    currentPage = pageIndex;

    lessonPages.forEach((page, index) => {
        page.classList.toggle("active", index === currentPage);
    });

    pageLinks.forEach((link, index) => {
        link.classList.toggle("active", index === currentPage);
    });

    const pageDisplay = currentPage + 1;

    pageNumber.textContent = `${pageDisplay} / ${totalPages}`;
    currentPageLabel.textContent = `PAGE ${pageDisplay} OF ${totalPages}`;
    pageTopic.textContent = pageTopics[currentPage] || "Lesson Content";

    const progress = (pageDisplay / totalPages) * 100;

    progressBar.style.width = `${progress}%`;
    progressText.textContent = `${pageDisplay} / ${totalPages}`;

    prevBtn.disabled = currentPage === 0;
    nextBtn.disabled = currentPage === totalPages - 1;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

prevBtn.addEventListener("click", () => {
    showPage(currentPage - 1);
});

nextBtn.addEventListener("click", () => {
    showPage(currentPage + 1);
});

pageLinks.forEach(link => {
    link.addEventListener("click", () => {
        const pageIndex = Number(link.dataset.page);
        showPage(pageIndex);
    });
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

window.addEventListener("scroll", () => {
    backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});

/* KEYBOARD NAVIGATION */
document.addEventListener("keydown", event => {
    if (event.key === "ArrowRight") {
        showPage(currentPage + 1);
    }

    if (event.key === "ArrowLeft") {
        showPage(currentPage - 1);
    }
});

/* INITIAL PAGE */
showPage(0);
