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
});
