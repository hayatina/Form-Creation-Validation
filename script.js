document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registration-form"); // Selecting the form
  const feedbackDiv = document.getElementById("form-feedback"); // Selecting the feedback div

  // Add event listener for form submission
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission

    // Retrieve and trim input values
    const username = document.getElementById("username").value.trim(); // Trimmed username
    const email = document.getElementById("email").value.trim(); // Trimmed email
    const password = document.getElementById("password").value.trim(); // Trimmed password

    // Initialize validation variables
    let isValid = true; // Track overall validation status
    const messages = []; // Store validation error messages

    // Username Validation
    if (username.length < 3) {
      isValid = false; // Set isValid to false
      messages.push("Username must be at least 3 characters long."); // Add error message
    }

    // Email Validation
    if (!email.includes("@") || !email.includes(".")) {
      isValid = false; // Set isValid to false
      messages.push('Email must contain "@" and "." characters.'); // Add error message
    }

    // Password Validation
    if (password.length < 8) {
      isValid = false; // Set isValid to false
      messages.push("Password must be at least 8 characters long."); // Add error message
    }

    // Display feedback
    feedbackDiv.style.display = "block"; // Make feedbackDiv visible
    if (isValid) {
      feedbackDiv.textContent = "Registration successful!"; // Success message
      feedbackDiv.style.color = "#28a745"; // Green for success
    } else {
      feedbackDiv.innerHTML = messages.join("<br>"); // Join error messages
      feedbackDiv.style.color = "#dc3545"; // Red for errors
    }
  });
});
