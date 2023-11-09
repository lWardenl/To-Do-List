const todoContainer = document.getElementById("list");
const addTaskBtn = document.getElementById("add-task");
const userInput = document.getElementById("task-input");
let todoList = [];
addTaskBtn.addEventListener("click", CreateTask);
userInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") CreateTask();
});

function CreateTask() {
  if (userInput.value == "") {
    alert("Please write your task before!");
    return;
  }
  console.log(userInput.value);
  // Creating the item div as a child to todo-list div
  const newTaskContainer = document.createElement("div");
  newTaskContainer.classList.add("item");
  todoContainer.appendChild(newTaskContainer);

  // Creating checkbox element with it's attributes
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  newTaskContainer.appendChild(checkBox);
  // Checkbox logic
  checkBox.addEventListener("change", function () {
    if (checkBox.checked == true) {
      taskTextField.classList.add("completed");
      taskTextField.classList.remove("task-text");
    } else {
      taskTextField.classList.add("task-text");
      taskTextField.classList.remove("completed");
    }
  });

  // Creating the task text input element
  const taskTextField = document.createElement("input");
  taskTextField.type = "text";
  taskTextField.classList.add("task-text");
  taskTextField.readOnly = true;
  taskTextField.value = userInput.value;
  newTaskContainer.appendChild(taskTextField);

  //Task edit logic
  taskTextField.addEventListener("blur", function () {
    taskTextField.readOnly = true;
  });
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
  //Event button logic
  editBtn.addEventListener("click", function () {
    taskTextField.readOnly = false;
  });

  // Creating delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete");
  deleteBtn.innerHTML =
    '<img src="./assets/images/trash.png" alt="delete trash" />';
  btnContainer.appendChild(deleteBtn);
  // Delete button logic
  deleteBtn.addEventListener("click", function () {
    newTaskContainer.remove();
  });

  userInput.value = "";
}
