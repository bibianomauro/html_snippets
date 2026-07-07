const colors = [
  "#f00a",
  "#0f0a",
  "#00fa",
  "#ff0a",
  "#f0fa",
  "#0ffa",
];

const SQUARES = 420;

for(let i = 0; i < SQUARES; i++)
{
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", function() { set_color(square) })
  square.addEventListener("mouseout", function() { remove_color(square) })

  container.appendChild(square);
}

function set_color(element)
{
  const color = get_random_color();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function remove_color(element)
{
  element.style.backgroundColor = "#222";
  element.style.boxShadow = "0 0 2px #000";
}

function get_random_color()
{
  return colors[Math.floor(Math.random() * colors.length)];
}
