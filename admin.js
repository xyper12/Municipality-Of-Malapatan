document.addEventListener("DOMContentLoaded", function() {
    var userData = JSON.parse(localStorage.getItem("userData")) || [];

    var userDataContainer = document.getElementById("userData");

    if (userData.length === 0) {
        userDataContainer.innerHTML = "<p>No user data available.</p>";
    } else {
        var tableHTML = "<table><thead><tr><th>User ID</th><th>Username</th><th>Name</th><th>Email</th></tr></thead><tbody>";

        userData.forEach(function(user) {
            tableHTML += `<tr><td>${user.userId}</td><td>${user.username}</td><td>${user.name}</td><td>${user.email}</td></tr>`;
        });

        tableHTML += "</tbody></table>";

        userDataContainer.innerHTML = tableHTML;
    }
});
