// Function to fetch user data
async function fetchUserData() {
  const apiUrl = "https://jsonplaceholder.typicode.com/users"; // Define the API URL
  const dataContainer = document.getElementById("api-data"); // Select the data container element

  try {
    // Fetch the user data
    const response = await fetch(apiUrl); // Use fetch to get the data
    const users = await response.json(); // Convert the response to JSON

    // Clear the loading message
    dataContainer.innerHTML = ""; // Clear existing content

    // Create a <ul> element to hold the user list
    const userList = document.createElement("ul"); // Create a <ul> element

    // Loop through the users array
    users.forEach((user) => {
      const listItem = document.createElement("li"); // Create a <li> element
      listItem.textContent = user.name; // Set the text content to the user's name
      userList.appendChild(listItem); // Append the <li> to the <ul>
    });

    // Append the user list to the data container
    dataContainer.appendChild(userList); // Append the <ul> to the dataContainer
  } catch (error) {
    // Clear existing content in case of an error
    dataContainer.innerHTML = ""; // Clear existing content
    dataContainer.textContent = "Failed to load user data."; // Set error message
  }
}

// Event listener for DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  fetchUserData(); // Invoke fetchUserData once the DOM is fully loaded
});
