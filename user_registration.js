document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    // Generate unique user ID
    var userId = generateUserId();

    // Perform validation (you can add more validation rules as needed)
    if (username && password && email) {
        // Store registration data in an object
        var userData = {
            userId: userId,
            username: username,
            password: password,
            name: name,
            email: email
        };

        // Save data to local storage
        saveUserData(userData);

        alert("Registration successful!");

        // Optionally, you can redirect the user to a login page after successful registration
        // window.location.href = "login.html";
    } else {
        alert("Please fill in all required fields.");
    }
});

// Function to generate a unique user ID (you can implement your own logic)
function generateUserId() {
    // Example: You can generate a random alphanumeric string
    return 'user_' + Math.random().toString(36).substr(2, 9);
}

// Function to save user data to local storage
function saveUserData(userData) {
    var existingData = JSON.parse(localStorage.getItem("userData")) || [];
    existingData.push(userData);
    localStorage.setItem("userData", JSON.stringify(existingData));
}
