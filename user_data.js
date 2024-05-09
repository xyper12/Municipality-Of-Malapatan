document.addEventListener("DOMContentLoaded", function() {
    // Retrieve the username from localStorage or another storage mechanism
    var username = "user"; // Example username, replace with actual user identification method

    // Retrieve user data from localStorage based on the username
    var userDataJSON = localStorage.getItem(username);
    if (userDataJSON) {
        var userData = JSON.parse(userDataJSON);
        displayUserData(userData);
    } else {
        document.getElementById("userData").innerHTML = "<p>No data available.</p>";
    }
});

function displayUserData(userData) {
    var userDataContainer = document.getElementById("userData");
    userDataContainer.innerHTML = `
        <p><strong>Username:</strong> ${userData.username}</p>
        <p><strong>Name:</strong> ${userData.name}</p>
        <p><strong>Address:</strong> ${userData.address}</p>
        <p><strong>Barangay:</strong> ${userData.barangay}</p>
    `;
}
