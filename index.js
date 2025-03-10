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

function addNewTodos() {
  // rechecker car todoContainer pas use et .all-todo-container non plus
  const inputAdd = document.querySelector(".todo-manager");
  const btnAdd = document.getElementById("btn-add-todo");
  const todoContainer = document.querySelector(".card-main");
  const indicator = document.querySelector(".indicator");

  btnAdd.addEventListener("click", () => {
    indicator.innerText = "";
    const unput = (inputAdd.style.display = "flex");
  });
}
addNewTodos();
