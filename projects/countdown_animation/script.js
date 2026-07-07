const nums = document.querySelectorAll(".nums span");
const counter = document.querySelector(".counter");
const final_message = document.querySelector(".final");

function run_animation()
{
  for(let i = 0, length = nums.length; i < length; i++)
  {
    const num = nums[i];
    const num_index = i;
    const last = length - 1;
    const next = num.nextElementSibling;

    num.addEventListener("animationend", function(e)
    {
      if(e.animationName == "go-in")
      {
        if(num_index == last)
        {
          counter.classList.add("hide");
          final_message.classList.add("show");
          return;
        }
        num.classList.remove("in");
        num.classList.add("out");
      }
      else if(e.animationName == "go-out")
      {
        if(next)
        {
          next.classList.add("in");
        }
      }
    })
  }
}

function reset_animation()
{
  for(let i = 0; i < nums.length; i++)
  {
    nums[i].className = "";
  }
  nums[0].classList.add("in");
  counter.classList.remove("hide");
  final_message.classList.remove("show");
}

replay.addEventListener("click", function()
{
  reset_animation();
  run_animation();
});

run_animation()
