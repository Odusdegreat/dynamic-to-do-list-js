// Function to load tasks from localStorage and display them
function loadTasks() {
  // Retrieve stored tasks from localStorage, or use an empty array if none are found
  const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");

  // For each task retrieved from localStorage, add it to the list
  storedTasks.forEach((taskText) => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
}

// Function to add a task to the task list
function addTask(taskText, save = true) {
  // Check if taskText is not empty
  if (taskText.trim() === "") return;

  // Create a new <li> element for the task
  const listItem = document.createElement("li");
  listItem.textContent = taskText;

  // Create a "Remove" button for the task
  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.classList.add("remove-btn"); // Adding a class for styling

  // Add an onclick event to the remove button to remove the task
  removeButton.onclick = () => {
    // Remove the task from the task list
    taskList.removeChild(listItem);

    // Update the localStorage after removing a task
    updateLocalStorage();
  };

  // Append the remove button to the list item
  listItem.appendChild(removeButton);

  // Append the list item to the task list
  taskList.appendChild(listItem);

  // If save is true, store the task in localStorage
  if (save) {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks.push(taskText);
    localStorage.setItem("tasks", JSON.stringify(storedTasks));
  }

  // Clear the task input field
  taskInput.value = "";
}

// Function to update localStorage after a task is removed
function updateLocalStorage() {
  const tasks = [];
  const taskItems = taskList.querySelectorAll("li");

  taskItems.forEach((item) => {
    const taskText = item.textContent.replace("Remove", "").trim();
    tasks.push(taskText);
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Event listener to handle page load
document.addEventListener("DOMContentLoaded", () => {
  // Load previously stored tasks
  loadTasks();

  // Select DOM elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Add task event handler for the "Add Task" button
  addButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    addTask(taskText); // Add task and save it to localStorage
  });

  // Add task event handler for pressing "Enter" key
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      const taskText = taskInput.value.trim();
      addTask(taskText); // Add task and save it to localStorage
    }
  });
});
