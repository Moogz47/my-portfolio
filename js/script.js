document.addEventListener("DOMContentLoaded", function () {
    const toggleButtons = document.querySelectorAll(".toggle-btn");
    toggleButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            const projectDetails = this.previousElementSibling;
            if (projectDetails.style.display === "none" || projectDetails.style.display === "") {
                projectDetails.style.display = "block";
                this.textContent = "Hide Details";
            } else {
                projectDetails.style.display = "none";
                this.textContent = "View Details";
            }
        });
    });

    const toggle = document.getElementById("darkModeToggle");

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        toggle.checked = true;
    }

    toggle.addEventListener("change", () => {
        if (toggle.checked) {
            document.body.classList.add("dark-mode");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("theme", "light");
        }
    });

    const contactForm = document.getElementById("contact-form");
    const formStatus = document.getElementById("form-status");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        const nameError = document.getElementById("name-error");
        const emailError = document.getElementById("email-error");
        const messageError = document.getElementById("message-error");

        let valid = true;

        if (name === "") {
            nameError.textContent = "Name is required.";
            valid = false;
        } else {
            nameError.textContent = "";
        }

        if (email === "") {
            emailError.textContent = "Email is required.";
            valid = false;
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            emailError.textContent = "Enter a valid email address.";
            valid = false;
        } else {
            emailError.textContent = "";
        }

        if (message === "") {
            messageError.textContent = "Message cannot be empty.";
            valid = false;
        } else {
            messageError.textContent = "";
        }

        if (valid) {
            formStatus.textContent = "Message sent successfully!";
            formStatus.style.color = "green";
            contactForm.reset();
        }
    });
});