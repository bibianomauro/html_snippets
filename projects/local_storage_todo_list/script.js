const form = document.getElementById("form");
const input = document.getElementById("input");
const todos = document.getElementById("todos");

const todosSaved = JSON.parse(localStorage.getItem("todos"));
if(todosSaved) todosSaved.forEach(todo => addTodo(todo));

form.addEventListener("submit", e => {
  e.preventDefault();

  addTodo();
})

function addTodo(todo)
{
  let todoText = input.value;

  if(todo) {
    todoText = todo.text;
  }

  if(todoText) {
    const todoEl = document.createElement("li");
    if(todo && todo.completed) {
      todoEl.classList.add("completed");
    };

    todoEl.textContent = todoText;

    todoEl.addEventListener("click", () => {
      todoEl.classList.toggle("completed");
      updateLS();
    });
    todoEl.addEventListener("contextmenu", e => {
      e.preventDefault();
      todoEl.remove();
      updateLS();
    });

    todos.appendChild(todoEl);

    input.value = "";

    updateLS();
  }
}

function updateLS()
{
  const todosArray = [];

  todos.childNodes.forEach(li => {
    todosArray.push({
      text: li.textContent,
      completed: li.classList.contains("completed"),
    });
  });

  localStorage.setItem("todos", JSON.stringify(todosArray));
}
