function addList() {
  const listName = document.getElementById("new-list").value.trim();
  if (!listName) return;

  const listContainer = document.createElement("div");
  listContainer.className = "task-section";
  listContainer.innerHTML = `
    <h2>${listName}</h2>
    <input type="text" placeholder="New Task" class="task-input" />
    <input type="datetime-local" class="task-datetime" />
    <button onclick="addTask(this)">Add Task</button>
    <div class="tasks"></div>
  `;
  document.getElementById("lists-container").appendChild(listContainer);
  document.getElementById("new-list").value = "";
}

function addTask(button) {
  const section = button.parentElement;
  const taskInput = section.querySelector(".task-input");
  const dateInput = section.querySelector(".task-datetime");
  const taskText = taskInput.value.trim();
  const taskDate = dateInput.value;

  if (!taskText) return;

  const taskItem = document.createElement("div");
  taskItem.className = "task";
  taskItem.innerHTML = `
    <input type="checkbox" onchange="toggleComplete(this)">
    <input type="text" value="${taskText}" onchange="editTask(this)">
    <span>${taskDate ? new Date(taskDate).toLocaleString() : ''}</span>
    <button onclick="deleteTask(this)">Delete</button>
  `;

  section.querySelector(".tasks").appendChild(taskItem);
  taskInput.value = "";
  dateInput.value = "";
}

function toggleComplete(checkbox) {
  const task = checkbox.parentElement;
  task.classList.toggle("completed", checkbox.checked);
}

function editTask(input) {
  input.value = input.value.trim();
}

function deleteTask(button) {
  const task = button.parentElement;
  task.remove();
}
