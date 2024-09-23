// scripts.js

document.addEventListener("DOMContentLoaded", function () {
    // Login functionality
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            // Add your authentication logic here
            // For example, make a POST request to your login endpoint
            const response = await fetch("/api/admin/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, password })
            });

            if (response.ok) {
                window.location.href = "/public/dashboard.html"; // Redirect to dashboard
            } else {
                alert("Login failed. Please try again.");
            }
        });
    }
});
