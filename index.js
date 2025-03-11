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

function buildTodo() {
  const todoManager = document.createElement("div");
  todoManager.classList.add("todo-manager");

  const theTodo = document.createElement("div");
  theTodo.classList.add("the-todo");

  const labelCheck = document.createElement("label");
  labelCheck.classList.add("checkbox-container");
  const inputCheck = document.createElement("input");
  inputCheck.type = "checkbox";
  inputCheck.id = "test";
  const spanCheck = document.createElement("span");
  spanCheck.classList.add("custom-checkbox");

  const inputAdder = document.createElement("input");
  inputAdder.type = "text";
  inputAdder.id = "input-adder";

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

function addNewTodo() {
  const inputAdd = document.getElementById("input-adder");
  if (inputAdd) {
    inputAdd.addEventListener("change", () => {
      inputAddValue = {
        id: new Date().getTime(),
        text: inputAdd.value,
        completed: false,
      };
      todosData.todos.push(inputAddValue);
      console.log(todosData.todos);
    });
  } else {
    console.error(
      "WARNING: #input-adder is not available, check function saveTodo"
    );
  }
}

function displayTodoField() {
  const btnAdd = document.getElementById("btn-add-todo");
  const todoContainer = document.querySelector(".all-todos-container");

  btnAdd.addEventListener("click", () => {
    todoContainer.innerText = "";
    todoContainer.appendChild(buildTodo());
    addNewTodo();
  });
}

displayTodoField();
