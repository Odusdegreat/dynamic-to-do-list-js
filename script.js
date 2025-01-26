// Step 1: Setup Event Listener for Page Load
document.addEventListener("DOMContentLoaded", () => {
  // Step 2: Select DOM Elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Step 3: Create the addTask Function
  function addTask() {
    // Retrieve and trim the task input value
    const taskText = taskInput.value.trim();

    // Check if the task input is empty
    if (taskText === "") {
      alert("Please enter a task!");
      return; // Exit the function if input is empty
    }

    // Create a new list item (li) element
    const listItem = document.createElement("li");
    listItem.textContent = taskText; // Set the text of the list item

    // Create a remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove"; // Set the text of the button
    removeButton.className = "remove-btn"; // Add a class for styling

    // Assign an onclick event to the remove button
    removeButton.onclick = () => {
      taskList.removeChild(listItem); // Remove the task from the list
    };

    // Append the remove button to the list item
    listItem.appendChild(removeButton);

    // Append the list item to the task list
    taskList.appendChild(listItem);

    // Clear the task input field
    taskInput.value = "";
  }

  // Step 4: Attach Event Listeners
  // Add click event listener to the "Add Task" button
  addButton.addEventListener("click", addTask);

  // Add keypress event listener for the "Enter" key
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask(); // Call addTask on "Enter" key press
    }
  });
});
