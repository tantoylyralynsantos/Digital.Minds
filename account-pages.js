
document.addEventListener("DOMContentLoaded", function () {

    // CHECK STUDENT LOGIN
    const loggedIn =
        sessionStorage.getItem("webtechLoggedIn") === "true";

    if (!loggedIn) {
        alert("Please login first to access your account.");
        window.location.replace("login.html");
        return;
    }

    // GET STUDENT INFORMATION
    function getStudent() {
        try {
            return JSON.parse(
                sessionStorage.getItem("webtechStudent")
            ) || {};
        } catch (error) {
            return {};
        }
    }

    let student = getStudent();

    function saveStudent(updatedStudent) {
        student = updatedStudent;

        sessionStorage.setItem(
            "webtechStudent",
            JSON.stringify(student)
        );
    }

    function getName() {
        return student.fullName || student.username || "Student";
    }

    function getEmail() {
        return student.email || "No email available";
    }

    // ==================================
    // MY PROFILE
    // ==================================

    const studentName = document.getElementById("studentName");
    const studentEmail = document.getElementById("studentEmail");
    const profileAvatar = document.getElementById("profileAvatar");
    const infoName = document.getElementById("infoName");
    const infoEmail = document.getElementById("infoEmail");
    const infoYear = document.getElementById("infoYear");

    function displayProfile() {

        const name = getName();
        const email = getEmail();

        const initials = name
            .split(" ")
            .filter(Boolean)
            .map(word => word.charAt(0))
            .join("")
            .substring(0, 2)
            .toUpperCase();

        if (studentName) studentName.textContent = name;
        if (studentEmail) studentEmail.textContent = email;
        if (profileAvatar) profileAvatar.textContent = initials;
        if (infoName) infoName.textContent = name;
        if (infoEmail) infoEmail.textContent = email;

        if (infoYear) {
            infoYear.textContent =
                student.yearLevel || student.year || "Not specified";
        }
    }

    displayProfile();

    // EDIT PROFILE
    const editButton = document.getElementById("editProfile");
    const profileForm = document.getElementById("profileForm");
    const cancelEdit = document.getElementById("cancelEdit");

    const editName = document.getElementById("editName");
    const editEmail = document.getElementById("editEmail");
    const profileMessage = document.getElementById("profileMessage");

    if (editButton && profileForm) {

        editButton.addEventListener("click", function () {

            editName.value = getName();
            editEmail.value = getEmail();

            profileForm.hidden = false;
            editButton.style.display = "none";
            profileMessage.textContent = "";

        });

        profileForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const newName = editName.value.trim();
            const newEmail = editEmail.value.trim();

            if (!newName || !newEmail) {
                profileMessage.textContent =
                    "Please complete all required fields.";
                return;
            }

            saveStudent({
                ...student,
                fullName: newName,
                email: newEmail
            });

            displayProfile();

            profileForm.hidden = true;
            editButton.style.display = "inline-block";

            profileMessage.textContent =
                "Your profile has been updated successfully.";

        });

        cancelEdit.addEventListener("click", function () {

            profileForm.hidden = true;
            editButton.style.display = "inline-block";

        });
    }

    // ==================================
    // MY LEARNING ACCOUNT
    // ==================================

    const learningName = document.getElementById("learningName");

    if (learningName) {
        learningName.textContent = getName();
    }

    // ==================================
    // ACCOUNT SETTINGS
    // ==================================

    const settingsForm = document.getElementById("settingsForm");
    const settingsName = document.getElementById("settingsName");
    const settingsEmail = document.getElementById("settingsEmail");
    const settingsMessage = document.getElementById("settingsMessage");

    if (settingsForm) {

        settingsName.value = getName();
        settingsEmail.value = getEmail();

        settingsForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const newName = settingsName.value.trim();
            const newEmail = settingsEmail.value.trim();

            if (!newName || !newEmail) {
                settingsMessage.textContent =
                    "Please complete all fields.";
                return;
            }

            saveStudent({
                ...student,
                fullName: newName,
                email: newEmail
            });

            settingsMessage.textContent =
                "Account information updated successfully.";

        });
    }

    // ==================================
    // LOGOUT
    // ==================================

    function logout() {

        if (confirm("Are you sure you want to logout?")) {

            sessionStorage.removeItem("webtechLoggedIn");
            sessionStorage.removeItem("webtechStudent");

            window.location.replace("index.html");

        }
    }

    const settingsLogout =
        document.getElementById("settingsLogout");

    if (settingsLogout) {
        settingsLogout.addEventListener("click", logout);
    }

});
