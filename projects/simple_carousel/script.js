const img_container = document.getElementById("imgs");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

const imgs = document.querySelectorAll("#imgs img");

let idx = 0;


function change_image()
{
  if(idx > imgs.length - 1)
  {
    idx = 0;
  }
  else if(idx < 0)
  {
    idx = imgs.length - 1;
  }

  img_container.style.transform = `translateX(${-idx * 500}px)`;
}

function run()
{
  idx++;
  change_image();
}

let interval = setInterval(run, 2000);

function reset_interval()
{
  clearInterval(interval);
  interval = setInterval(run, 2000);
}

leftBtn.addEventListener("click", function()
{
  idx--;
  change_image();
  reset_interval();
})

rightBtn.addEventListener("click", function()
{
  idx++;
  change_image();
  reset_interval();
})
