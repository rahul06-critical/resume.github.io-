// Smooth scroll
document.querySelectorAll("a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        if (this.hash !== "") {
            e.preventDefault();
            document.querySelector(this.hash).scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Form validation
const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;
        let error = document.getElementById("error");

        if (name === "" || email === "" || message === "") {
            error.innerText = "All fields are required!";
            error.style.color = "red";
        } else {
            error.innerText = "Message sent successfully!";
            error.style.color = "green";
        }
    });
}

// Dark Mode Toggle
const toggleBtn = document.getElementById("darkModeToggle");

if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        // Save preference
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            toggleBtn.innerText = "☀️";
        } else {
            localStorage.setItem("theme", "light");
            toggleBtn.innerText = "🌙";
        }
    });

    // Load saved theme
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        toggleBtn.innerText = "☀️";
    }
}
