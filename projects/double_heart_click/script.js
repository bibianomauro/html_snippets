const love_me = document.querySelector(".loveMe");
const times = document.querySelector("#times");

let click_time = 0;
let times_clicked = 0;

function create_heart(e)
{
  const heart = document.createElement("i");
  heart.classList.add("fas");
  heart.classList.add("fa-heart");

  const x = e.offsetX;
  const y = e.offsetY;

  heart.style.left = x + "px";
  heart.style.top = y + "px";

  love_me.appendChild(heart);

  times_clicked = times_clicked + 1;
  times.innerHTML = times_clicked;

  setTimeout(function()
  {
    heart.remove();
  }, 1000);
};

love_me.addEventListener("click", function(e)
{
  if(click_time == 0)
  {
    click_time = new Date().getTime();
    return;
  };
  if((new Date().getTime() - click_time) < 800)
  {
    create_heart(e);
    click_time = 0;
    return;
  };
  click_time = new Date().getTime();
  return;
});
