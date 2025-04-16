// @ts-nocheck

function displayBodyBackground(element, path) {
  element.addEventListener("click", () => {
    document.body.style.backgroundImage = `url(${path})`;
  });
}

displayBodyBackground(
  document.getElementById("bgOne"),
  "./images/montain1.jpg"
);
displayBodyBackground(
  document.getElementById("bgTwo"),
  "./images/montain2.jpg"
);
displayBodyBackground(
  document.getElementById("bgThree"),
  "./images/prairie.jpg"
);

const todosData = {
  todos: [],
};

function buildTodo(id) {
  const todoManager = document.createElement("div");
  todoManager.classList.add("todo-manager");
  todoManager.id = `id-${id}`;

  const theTodo = document.createElement("div");
  theTodo.classList.add("the-todo");

  const labelCheck = document.createElement("label");
  labelCheck.classList.add("checkbox-container");
  const inputCheck = document.createElement("input");
  inputCheck.type = "checkbox";
  const spanCheck = document.createElement("span");
  spanCheck.classList.add("custom-checkbox");

  const inputAdder = document.createElement("input");
  inputAdder.type = "text";
  inputAdder.classList.add("input-adder");

  const btnDeleteTodo = document.createElement("i");
  btnDeleteTodo.classList.add("fa-solid", "fa-trash-can");
  btnDeleteTodo.id = "btn-delete-todo";

  labelCheck.appendChild(inputCheck);
  labelCheck.appendChild(spanCheck);
  theTodo.appendChild(labelCheck);
  theTodo.appendChild(inputAdder);
  todoManager.appendChild(theTodo);
  todoManager.appendChild(btnDeleteTodo);

  return todoManager;
}

function NewTodo() {
  const buttonPlus = document.getElementById("btn-add-todo");
  const indicator = document.querySelector(".indicator");
  const allTodosContainer = document.querySelector(".all-todos-container");

  buttonPlus.addEventListener("click", () => {
    indicator.style.display = "none";
    const newTodo = buildTodo(Date.now());
    allTodosContainer.appendChild(newTodo);

    const input = newTodo.querySelector(".input-adder");
    if (input) {
      input.focus();
    }
  });
}

NewTodo();
