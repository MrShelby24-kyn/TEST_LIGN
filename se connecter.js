document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        if (email === "" || password === "") {
            alert("Veuillez remplir tous les champs.");
        } else {
            // Simuler une connexion réussie
            window.location.href = "dashboard.html";
        }
    });
});