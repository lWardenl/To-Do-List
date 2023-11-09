const todoContainer = document.getElementById("list");
const addTaskBtn = document.getElementById("add-task");
const userInput = document.getElementById("task-input");

let todoList = [];
addTaskBtn.addEventListener("click", CreateTask);

function CreateTask() {
  if (userInput.value == "") {
    alert("Please write your task before!");
  }
  console.log(userInput.value);
  // Creating the item div as a child to todo-list div
  const newTaskContainer = document.createElement("div");
  newTaskContainer.classList.add("item");
  todoContainer.appendChild(newTaskContainer);

  // Creating checkbox element with it's attributes
  const checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  newTaskContainer.appendChild(checkBox);

  // Creating the task text input element
  const taskTextField = document.createElement("input");
  taskTextField.setAttribute("type", "text");
  taskTextField.setAttribute("class", "task-text");
  taskTextField.setAttribute("readonly", "readonly");
  taskTextField.value = userInput.value;
  newTaskContainer.appendChild(taskTextField);

  // Creating div that holds the buttons
  const btnContainer = document.createElement("div");
  btnContainer.classList.add("action-btn");
  newTaskContainer.appendChild(btnContainer);

  // Creating edit button
  const editBtn = document.createElement("button");
  editBtn.classList.add("edit");
  editBtn.innerHTML =
    '<img src="./assets/images/pencil.png" alt="edit pencil" />';
  btnContainer.appendChild(editBtn);

  // Creating delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("edit");
  deleteBtn.innerHTML =
    '<img src="./assets/images/trash.png" alt="delete trash" />';
  btnContainer.appendChild(deleteBtn);
}
