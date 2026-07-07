const images = document.querySelectorAll(".phone .content");
const navs = document.querySelectorAll("nav li");

for(let i = 0; i < navs.length; i++)
{
  navs[i].addEventListener("click", function()
  {
    clear_UI();
    activate_UI(i);
  })
}

function clear_UI()
{
  navs.forEach(nav => nav.classList.remove("active"));
  images.forEach(image => image.classList.remove("show"))
}

function activate_UI(i)
{
  images[i].classList.add("show");
  navs[i].classList.add("active")
}
