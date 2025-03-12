const inputField = document.getElementById("username");
const saveButton = document.getElementById("save-btn");
const clearButton = document.getElementById("clear-btn");
const displayName = document.getElementById("display-name");
const welcomeMessage = document.getElementById("welcome-message");

displayName.textContent = localStorage.getItem("savedName") || "No Name Saved.";

saveButton.addEventListener("click", function() {
    const name = inputField.value.trim();
    if (name) {
        localStorage.setItem("savedName", name);
        displayName.textContent = `Saved Name: ${name}`;
    } else {
        alert("Please Enter A Name.");
    }
});

clearButton.addEventListener("click", function() {
    localStorage.removeItem("savedName");
    displayName.textContent = "No Name Saved.";
    inputField.value = "";
});

function getGreeting(name) {
    const hour = new Date().getHours();
    let greeting;

    if (hour < 12) {
        greeting = "Good Morning";
    } else if (hour < 18) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Evening";
    }

    return name ? `${greeting}, ${name}! 😊` : `${greeting}! Please enter your name.`;
}

function updateWelcomeMessage() {
    const savedName = localStorage.getItem("savedName");
    welcomeMessage.textContent = getGreeting(savedName);
}

clearButton.addEventListener("click", function() {
    localStorage.removeItem("savedName");
    inputField.value = "";
    updateWelcomeMessage();
});
updateWelcomeMessage();