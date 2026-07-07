var toggles = document.querySelectorAll(".toggle");

function do_the_trick(event)
{
  var clicked_one = event.target;

  if(good.checked && cheap.checked && fast.checked)
  {
    if(good === clicked_one) fast.checked = false;
    if(cheap === clicked_one) good.checked = false;
    if(fast === clicked_one) cheap.checked = false;
  };
};

for(var i = 0; i < toggles.length; i++)
{
  toggles[i].addEventListener("change", do_the_trick);
};
