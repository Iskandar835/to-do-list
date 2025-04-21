// @ts-nocheck

function displayBodyBackground(element, path) {
  element.addEventListener("click", () => {
    document.body.style.backgroundImage = `url(${path})`;
  });
}

displayBodyBackground(document.getElementById("bgOne"), "./images/ecran1.jpg");
displayBodyBackground(document.getElementById("bgTwo"), "./images/ecran2.jpg");
displayBodyBackground(
  document.getElementById("bgThree"),
  "./images/ecran3.jpg"
);

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
  inputCheck.addEventListener("change", () => handleCheckedTodos(id));
  const spanCheck = document.createElement("span");
  spanCheck.classList.add("custom-checkbox");

  const inputAdder = document.createElement("input");
  inputAdder.type = "text";
  inputAdder.classList.add("input-adder");

  const btnDeleteTodo = document.createElement("i");
  btnDeleteTodo.classList.add("fa-solid", "fa-trash-can");
  btnDeleteTodo.id = "btn-delete-todo";
  btnDeleteTodo.addEventListener("click", () => handleDeleteTodos(id));

  labelCheck.appendChild(inputCheck);
  labelCheck.appendChild(spanCheck);
  theTodo.appendChild(labelCheck);
  theTodo.appendChild(inputAdder);
  todoManager.appendChild(theTodo);
  todoManager.appendChild(btnDeleteTodo);

  return todoManager;
}

let todosData = [];

function saveTodos() {
  localStorage.setItem("all-todos", JSON.stringify(todosData));
}

function addNewTodo() {
  const buttonPlus = document.getElementById("btn-add-todo");
  const indicator = document.querySelector(".indicator");
  const allTodosContainer = document.querySelector(".all-todos-container");

  buttonPlus.addEventListener("click", () => {
    indicator.style.display = "none";

    const todoId = Date.now();
    const newTodo = buildTodo(todoId);
    allTodosContainer.appendChild(newTodo);

    const input = newTodo.querySelector(".input-adder");
    if (input) {
      input.focus();

      input.addEventListener("change", () => {
        const existingTodo = todosData.find((todo) => todo.id === todoId);

        if (existingTodo) {
          existingTodo.text = input.value;
          saveTodos();
        } else {
          const todoParams = {
            id: todoId,
            text: input.value,
            checked: false,
          };
          todosData.push(todoParams);
          saveTodos();
        }
      });
    }
  });
}

addNewTodo();

function hydrateTodosFromLocalStorage() {
  const saved = localStorage.getItem("all-todos");
  if (!saved) return;

  const todos = JSON.parse(saved);
  todosData = todos;

  const container = document.querySelector(".all-todos-container");
  indicator();

  todos.forEach((todo) => {
    const todoEl = buildTodo(todo.id);
    const checkbox = todoEl.querySelector('input[type="checkbox"]');
    const todoText = todoEl.querySelector(".input-adder");
    checkbox.checked = todo.checked;
    if (checkbox.checked === true) {
      todoText.classList.add("is-checked");
    }
    if (checkbox.checked === false) {
      todoText.classList.remove("is-checked");
    }
    const input = todoEl.querySelector(".input-adder");
    input.value = todo.text;
    container.appendChild(todoEl);
  });
}

hydrateTodosFromLocalStorage();

function handleDeleteTodos(id) {
  const todoEl = document.getElementById(`id-${id}`);
  if (todoEl) {
    todoEl.remove();
  }

  todosData = todosData.filter((todo) => todo.id !== id);
  saveTodos();
  indicator();
}

function indicator() {
  const indicator = document.querySelector(".indicator");
  if (todosData.length === 0) {
    indicator.style.display = "inline";
  }
  if (todosData.length >= 1) {
    indicator.style.display = "none";
  }
}

function handleCheckedTodos(id) {
  const todoEl = document.getElementById(`id-${id}`);
  const checkbox = todoEl.querySelector('input[type="checkbox"]');
  const todoText = todoEl.querySelector(".input-adder");

  const todo = todosData.find((t) => t.id === id);
  if (todo) {
    todo.checked = checkbox.checked;
    if (checkbox.checked === true) {
      todoText.classList.add("is-checked");
    }
    if (checkbox.checked === false) {
      todoText.classList.remove("is-checked");
    }
    saveTodos();
  }
}
