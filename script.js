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
