const todoInput = document.getElementById("todo-input");
const todosWrapper = document.querySelector(".todos-wrapper");

const todos = []; // [{title: "", isCompleted : false, id : }]

function handleAddTodo() {
  // add todo
  console.log(todoInput.value);
  //   {title: "", isCompleted : false, id : }

  const todoObj = {
    title: todoInput.value,
    isCompleted: false,
    id: Date.now(),
  };

  todos.push(todoObj);

  // front - end --> todos

  updateUi(todos);
}

function updateUi(todos) {
  todosWrapper.innerHTML = "";

  for (let i = 0; i < todos.length; i++) {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const todoPara = document.createElement("p");
    todoPara.innerText = todos[i].title;

    todoDiv.appendChild(todoPara);

    todosWrapper.append(todoDiv);
  }
}
