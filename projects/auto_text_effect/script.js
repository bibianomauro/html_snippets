const text_el = document.querySelector("#text");
const speed_el = document.querySelector("#speed");

const text = "We Love JavaScript!!"

let index = 1;
let speed = 300 / speed_el.value;

speed_el.addEventListener("change", function(e)
{
  return speed = 300 / speed_el.value;
});

function write_text()
{
  let str = "";

  for(let i = 0; i < index; i++)
  {
    str = str + text[i];
  };

  text_el.innerText = str;
  index++;

  if(index > text.length) index = 1;

  setTimeout(write_text, speed);
};

write_text();
