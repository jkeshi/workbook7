let toDoBtn = document.getElementById("todo-btn");
let todoInput = document.getElementById("todo-input");
let messageDiv = document.getElementById("message-div");

function onToDoBtnClicked() {
  const toDoId = todoInput.value;
  fetch("https://jsonplaceholder.typicode.com/todos/" + toDoId)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}

window.onload = () => {
  const toDoBtn = document.getElementById("todo-btn");

  toDoBtn.onclick = onToDoBtnClicked;
};
