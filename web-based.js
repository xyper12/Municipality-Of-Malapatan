document.addEventListener("DOMContentLoaded", function() {
    // Toggle between login and registration forms
    document.getElementById("registrationButton").addEventListener("click", function() {
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("registrationForm").style.display = "block";
    });

    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault();

        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        var role = document.getElementById("role").value;

        // Debugging: Log the values of username, password, and role
        console.log("Username:", username);
        console.log("Password:", password);
        console.log("Role:", role);

        var adminUsername = "malapatan";
        var adminPassword = "admin123"; // Example password, replace with your actual admin password

        // Check if the selected role is admin and validate credentials
        if (role === "admin.html") {
            if (username === adminUsername && password === adminPassword) {
                // Redirect to admin dashboard
                window.location.href = "admin.html";
            } else {
                alert("Invalid admin credentials. Please try again.");
            }
        } else if (username && password) {
            // Redirect to user dashboard for non-admin users
            window.location.href = role;
        } else {
            alert("Invalid credentials. Please try again.");
        }
    });
});
