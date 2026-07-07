const codes = document.querySelectorAll(".code");

codes[0].focus();

for(let i = 0; i < codes.length; i++)
{
  codes[i].addEventListener("click", e =>
  {
    codes[0].value = "";
    codes[0].focus();
  });
  codes[i].addEventListener("keydown", e =>
  {
    if(i == codes.length - 1)
    {
      setTimeout(() => codes[i].blur(), 10);
      return;
    }

    if(e.keyCode >= 48 && e.keyCode <= 57 && i < codes.length - 1)
    {
      setTimeout(() =>
      {
        codes[i + 1].value = "";
        codes[i + 1].focus();
      }, 10);
    }
    else if(e.key == "Backspace" && i > 0)
    {
      setTimeout(() =>
      {
        codes[i - 1].value = "";
        codes[i - 1].focus();
      }, 10);
    }
  })
}
