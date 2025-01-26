// Wait for the DOM content to fully load
document.addEventListener("DOMContentLoaded", () => {
  // Select DOM elements
  const addButton = document.getElementById("add-task-btn"); // "Add Task" button
  const taskInput = document.getElementById("task-input"); // Input field for tasks
  const taskList = document.getElementById("task-list"); // Unordered list for displaying tasks

  // Function to add a task to the list
  function addTask() {
    // Wait for the DOM content to fully load
    document.addEventListener("DOMContentLoaded", () => {
      // Select DOM elements
      const addButton = document.getElementById("add-task-btn"); // "Add Task" button
      const taskInput = document.getElementById("task-input"); // Input field for tasks
      const taskList = document.getElementById("task-list"); // Unordered list for displaying tasks

      // Function to add a task to the list
      function addTask() {
        // Retrieve and trim the input value
        const taskText = taskInput.value.trim();

        // Check if input is empty
        if (taskText === "") {
          alert("Please enter a task!");
          return; // Exit function if input is empty
        }

        // Create a new list item (li) element for the task
        const listItem = document.createElement("li");
        listItem.textContent = taskText; // Set the text of the list item

        // Create a "Remove" button for the task
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove"; // Set the button text
        removeButton.className = "remove-btn"; // Add a class for styling

        // Assign an event to remove the task when the button is clicked
        removeButton.onclick = () => {
          taskList.removeChild(listItem); // Remove the list item from the task list
        };

        // Append the "Remove" button to the list item
        listItem.appendChild(removeButton);

        // Append the list item to the task list
        taskList.appendChild(listItem);

        // Clear the task input field
        taskInput.value = "";
      }

      // Attach event listener to "Add Task" button
      addButton.addEventListener("click", addTask);

      // Attach event listener to input field for the "Enter" key
      taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
          addTask(); // Add task when "Enter" key is pressed
        }
      });
    });
  }

  // Attach event listener to "Add Task" button
  addButton.addEventListener("click", addTask);

  // Attach event listener to input field for the "Enter" key
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask(); // Add task when "Enter" key is pressed
    }
  });
});
