const todoInput = document.getElementById("todo-input");
const todosWrapper = document.querySelector(".todos-wrapper");

const todosArray = []; // [{title: "", isCompleted : false, id : }]

function handleAddTodo() {
  if (!todoInput.value) {
    alert("Add Valid input...");
    return;
  }

  const todoObj = {
    title: todoInput.value,
    isCompleted: false,
    id: Date.now(),
  };

  todosArray.push(todoObj);

  // front - end --> todos
  updateUi();

  todoInput.value = "";
}

function updateUi() {
  todosWrapper.innerHTML = "";

  for (let i = 0; i < todosArray.length; i++) {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const todoPara = document.createElement("p");
    todoPara.innerText = todosArray[i].title;

    // appending paragraph to todo div
    todoDiv.appendChild(todoPara);

    todosWrapper.append(todoDiv);
  }
}
