let insert = document.querySelector("#insert");
let keyDivs = document.querySelectorAll(".key");

window.addEventListener("keydown", function(e)
{
    let key = e.key;
    if(e.key === " ") key = "Space";

    keyDivs[0].firstChild.textContent = key;
    keyDivs[0].style.display = "inline-flex";

    keyDivs[1].firstChild.textContent = e.keyCode;
    keyDivs[1].style.display = "inline-flex";
    
    keyDivs[2].firstChild.textContent = e.code;
    keyDivs[2].style.display = "inline-flex";

    keyDivs[3].style.display = "none";
});