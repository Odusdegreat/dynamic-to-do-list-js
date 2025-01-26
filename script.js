document.addEventListener("DOMContentLoaded", () => {
  // Select DOM elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Function to add a task
  function addTask() {
    // Retrieve and trim the task input value
    const taskText = taskInput.value.trim();

    // If task input is empty, prompt the user to enter a task
    if (taskText === "") {
      alert("Please enter a task!");
      return; // Exit the function if input is empty
    }

    // Create a new <li> element for the task
    const listItem = document.createElement("li");
    listItem.textContent = taskText; // Set the text content of the task

    // Create a "Remove" button for the task
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove"; // Set the text content of the button

    // Add 'remove-btn' class to the button using classList.add
    removeButton.classList.add("remove-btn"); // This is the part you're asking for

    // Add an onclick event to the remove button to remove the task
    removeButton.onclick = () => {
      taskList.removeChild(listItem); // Remove the task from the task list
    };

    // Append the remove button to the list item
    listItem.appendChild(removeButton);

    // Append the list item to the task list
    taskList.appendChild(listItem);

    // Clear the input field after adding the task
    taskInput.value = "";
  }

  // Event listener for the "Add Task" button
  addButton.addEventListener("click", addTask);

  // Event listener for the "Enter" key to add a task
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
