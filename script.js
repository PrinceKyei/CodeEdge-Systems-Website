// Dark mode toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    themeToggle.textContent =
        document.body.classList.contains("dark-mode") ? "☀" : "🌙";
});

// Subscribe form validation
const form = document.getElementById("subscribe-form");
const emailInput = document.getElementById("email");
const message = document.getElementById("form-message");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const emailValue = emailInput.value.trim();

    if (emailValue === "") {
        message.textContent = "⚠ Please enter your email!";
        message.style.color = "yellow";
    } else if (!/\S+@\S+\.\S+/.test(emailValue)) {
        message.textContent = "❌ Invalid email format!";
        message.style.color = "red";
    } else {
        message.textContent = "✅ Thank you for subscribing!";
        message.style.color = "limegreen";
        emailInput.value = "";
    }
});