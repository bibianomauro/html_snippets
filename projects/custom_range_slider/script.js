const range = document.getElementById("range");
const label = document.querySelector("#range + label");

function init()
{
  label.textContent = range.value;
}

range.addEventListener("input", e => {
  const value = Number(e.target.value);

  // Old sh*t
  //const rangeWidth = getComputedStyle(e.target).getPropertyValue("width");

  // Not so new sh*t
  const rangeWidth = range.clientWidth;
  const labelWidth = label.clientWidth;

  const min = Number(e.target.min);
  const max = Number(e.target.max);

  // STUDY THIS ALGORHYTHM!!
  const left = value * (rangeWidth / max) - labelWidth / 2 + ((value - min) * (-10 -10) / (max - min) + 10);

  label.style.left = left + "px";

  label.textContent = value;
})


init();
